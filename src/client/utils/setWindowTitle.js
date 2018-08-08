import getConfig from 'next/config'

import log from './log'

const { publicRuntimeConfig } = getConfig()

const defaultTitle = 'Next Boilerplate'
const maxLength = 60 // https://moz.com/blog/title-tag-hacks-whiteboard-friday

export default (pageTitle = '', useDefaultTitle = true) => {
  let title = pageTitle

  if (useDefaultTitle && defaultTitle.length > 0) {
    title += pageTitle.length > 0 ? ` - ${defaultTitle}` : defaultTitle
  }

  if (publicRuntimeConfig.showLogs && title.length > maxLength) {
    log.warn(
      `Window title is longer than recommended ${maxLength} characters so may be detrimental to` +
        "SEO. Pass 'false' as second argument to prevent the default title from being added if.",
    )
  }

  return title
}
