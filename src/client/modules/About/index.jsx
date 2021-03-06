import React from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'

import setWindowTitle from '../../utils/setWindowTitle'
import setMetaDescription from '../../utils/setMetaDescription'

const pageDescription =
  'Learn more about the next boilerplate and how it can help your future projects'

const About = () => (
  <Layout>
    <Head>
      <title key="title">{setWindowTitle('About')}</title>
      <meta
        key="description"
        name="description"
        content={setMetaDescription(pageDescription)}
      />
    </Head>
    <h1>About</h1>
    <p>Some information...</p>
  </Layout>
)

export default About
