import React from 'react'
import Container from '../components/Container'
import Link from 'gatsby-link'

const Tickets = ({transition}) => (
  <Container style={transition && transition.style}>
    <h1>Tickets</h1>
    <p>get your tickets <a href="#">Here</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default Tickets
