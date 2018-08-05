const url = require('url')
const log = require('../log')

const defaultOptions = {
  useSlash: false,
  useWWW: false,
  useHTTPS: true,
}

module.exports = userOptions => (req, res, next) => {
  const options = Object.assign(defaultOptions, userOptions)
  const originalProtocol = req.protocol
  const originalHost = req.get('host')
  const originalPathname = req.originalUrl

  const useHTTPS =
    !req.hostname.includes('localhost') && options.useHTTPS && !req.secure

  const protocol = useHTTPS ? 'https' : originalProtocol
  let pathname = originalPathname
  let host = originalHost

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return useHTTPS ? res.status(403).send('Use HTTPS to submit data') : next()
  }

  if (options.useSlash) {
    pathname = /\/$/.test(pathname) ? pathname : `${pathname}/`
  } else {
    pathname = pathname.replace(/\/$/, '')
  }

  if (options.useWWW) {
    host =
      /^www\./i.test(host) || req.subdomains.length > 0 ? host : `www.${host}`
  } else {
    host = host.replace(/^www\./i, '')
  }

  if (
    originalProtocol !== protocol ||
    originalHost !== host ||
    originalPathname !== pathname
  ) {
    const redirect = url.format({
      protocol,
      host,
      pathname,
    })

    log.debug(
      `Redirecting from ${url.format({
        protocol: originalProtocol,
        host: originalHost,
        pathname: originalPathname,
      })} to ${redirect}`,
    )

    res.redirect(301, redirect)
  }

  return next()
}
