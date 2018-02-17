import React from 'react'
import Link from 'gatsby-link'
import Logo from '../Logo'
import styled from 'styled-components'
import {darken} from 'polished'
import {teal, orange, green} from '../../config/colors'
import Container from '../../components/Container'
import gradient from '../../config/gradient'
import mediaQuery from '../../config/mediaQueries'
import {boxShadow} from '../../config/mixins'


const HeaderWrap = styled.div`
  background-color: rgba(255,255,255, 0.975);
  box-sizing: border-box;

  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  z-index: 2;
  padding: 1rem 0 0 0;
  box-shadow: ${boxShadow.bottom};

  transition: transform 450ms ease;

  transform: translateY(${({hide}) => !hide ? '0' : '-100%'});

  @media (max-width: ${mediaQuery.small.max}px) {
    padding: 1rem 1rem 0;
    position: fixed;
    transform: translateY(0);
    ${'' /* flex-direction: column;
    align-items: center; */}
  }
`

const Nav = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: auto;
  ${gradient.side};
  flex-grow: 1;
  justify-content: flex-start;

  @media (max-width: ${mediaQuery.small.max}px) {
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    box-sizing: border-box;

  }

  > li {
    height: inherit;
    ${'' /* height: 30px; */}
    font-size: 0.8rem;
    display: inline-flex;
    margin: 0;
    padding-left: 0;
    text-align: -webkit-match-parent;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    @media (min-width: ${mediaQuery.large.min}px) {
      line-height: 2.6;
    }

    a {
      ${'' /* add a medium-esque highlight on hover. bottom 2/3 of word */}
      height: inherit;
      display: inline-flex;
      align-items: center;

      box-sizing: border-box;
      color: ${green};
      font-family: sans-serif;
      padding: 0 0.7rem 0;
      text-decoration: none;
      ${'' /* top: 0; */}
      user-select: none;
    }
  }
`

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding-bottom: 0.6rem;
  margin-right: 2rem;
  border-bottom: 1px solid ${orange};


  @media (max-width: ${mediaQuery.small.max}px) {
    flex: 1;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    margin-right: 0;
  }
`

const StyledContainer = Container.extend`
  max-width: 1000px;
  padding: 0 1rem;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  justify-content: flex-start;

  @media (max-width: ${mediaQuery.small.max}px) {
    transform: translateY(0);
    flex-direction: column;
    align-items: center;
  }

`

const Header = () => (

    <HeaderWrap role="navigation">
      <StyledContainer>
        <StyledLink to={'/'}>
          <Logo />
        </StyledLink>
        <Nav>
          <li><Link to="/tickets/">Tickets</Link></li>
          <li><Link to="/presentations/">Presentations</Link></li>

          {/* <li><Link to="/venues/">Venues</Link></li> */}
          {/* <li><Link to="/about/">About</Link></li> */}
          <li><Link to="/contact/">Contact</Link></li>
        </Nav>
      </StyledContainer>
    </HeaderWrap>
)

export default Header
