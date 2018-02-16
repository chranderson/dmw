import React from 'react'
import Link from 'gatsby-link'

import Container from '../components/Container'

const Contact = ({transition}) => (
  <Container style={transition && transition.style}>
    <h1>Contact</h1>
    <p>Welcome to the contact page</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default Contact
