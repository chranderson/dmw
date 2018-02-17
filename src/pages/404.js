import React from 'react'
import Container from '../components/Container'

const NotFoundPage = ({transition}) => (
  <div style={transition && transition.style}>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </div>
)

export default NotFoundPage
