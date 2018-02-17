import mediaQuery from '../../config/mediaQueries'
import styled from 'styled-components'

export const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
`

export const StyledSvg = styled.svg.attrs({
  alt: 'Denver Modernism Week Logo',
  focusable: 'false',
  role: 'presentation',
  viewBox: '0 0 150 50',
})`

  user-select: none;
  height: 70px;

  @media (max-width: ${mediaQuery.small.max}px) {
    height: 50px;
  }

  #blue {
    fill: #008ca8;
  }
  #green {
    fill: #f58220;
  }
  #red {
    fill: #8d8733;
  }
`
