import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../config/mediaQueries'
import gradient from '../config/gradient'

const Page = styled.div`
  margin: 100px auto 0;
  background: ${gradient.topDown};

  @media (max-width: ${mediaQuery.small.max}px) {
    margin: 125px auto 0;
  }

  @media (max-width: 480px) {
    margin: 116px auto 0;
  }

`

export default Page
