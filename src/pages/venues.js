import React from 'react'
import Container from '../components/Container'
import Link from 'gatsby-link'

const Venues = ({transition}) => (
  <Container style={transition && transition.style}>
    <h1>Venues</h1>
    <p>list of venues</p>
    <Link to="/">Go back to the homepage</Link>
  </Container>
)

export default Venues
