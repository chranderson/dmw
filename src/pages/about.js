import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'

const About = ({transition}) => (
  <Container style={transition && transition.style}>
    <h1>About</h1>
    <p>Welcome to the about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default About
