import React from 'react'
import { config, useSpring } from 'react-spring'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="Sobre | Jessica" desc="Olá, eu me chamo Jéssica!" />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Olá, eu me chamo Jéssica!</h1>
        <p>
          Aqui você poderá encontrar os mais incríveis e diversos tipos de doces.
          <a href="https://diogo-developer.netlify.com">Acesse meu Instagram</a>.
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
