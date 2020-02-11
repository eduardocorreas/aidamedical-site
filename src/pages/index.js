import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from '../components/home'
import About from '../components/about'
import Holdings from '../components/holdings'
import PerformanceMap from '../components/performanceMap'
import Clients from '../components/clients'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Holdings />
    <PerformanceMap />
    <Clients />
  </Layout>
)

export default IndexPage
