import React from 'react'
import { Title, Text } from 'tailwind-react'
import Layout from '../../components/Layout'

const Home = () => (
  <Layout>
    <Title size={6}>You win!</Title>
    <Text p>Congratulations, it looks like this is actually working</Text>
  </Layout>
)

export default Home
