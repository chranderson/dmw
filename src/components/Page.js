import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../config/mediaQueries'

const Page = styled.div`
  margin: 6.25rem auto 0;

  @media (max-width: ${mediaQuery.small.max}px) {
    margin: 8rem auto 0;
  }

`

export default Page
