import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const defaultDescription =
  'Use the next.js boilerplate to jump start your React project.'
const maxLength = 300 // https://moz.com/blog/how-long-should-your-meta-description-be-2018

export default (pageDescription = defaultDescription) => {
  const description = pageDescription

  if (publicRuntimeConfig.isDev && description.length > maxLength) {
    console.warn(
      `Meta description is longer than recommended ${maxLength} characters so may be detrimental to` +
        "SEO. Pass 'false' as second argument to supress the common site description.",
    )
  }

  return description
}
