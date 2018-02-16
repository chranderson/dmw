import React from 'react'

const NotFoundPage = ({transition}) => (
  <div style={transition && transition.style}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
