import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'

import site from '../config/site'
import Splash from '../components/Splash'
const IndexPage = ({ transition }) => (
  <div style={transition && transition.style}>
    <Splash />
  </div>
)

export default IndexPage
