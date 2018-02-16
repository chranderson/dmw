import React from 'react'
import Link from 'gatsby-link'
import Logo from '../Logo'
import styled from 'styled-components'
import {darken} from 'polished'
import {teal, green} from '../../config/colors'

const HeaderWrap = styled.div`
  background-color: rgba(255,255,255, 0.975);
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;

  margin-bottom: 1rem;
  padding: 0 1rem;

  z-index: 2;
  padding: 2rem 4rem;
`

const Nav = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 0 0 1rem;
  list-style: none;
  overflow-x: auto;
  -webkit-mask-image: linear-gradient(to right, transparent, white 0.175rem, white 98%, transparent);
  flex-grow: 1;
  justify-content: flex-end;

  > li {
    font-size: 0.8rem;
    display: inline-block;
    margin: 0;
    padding-left: 0;
    text-align: -webkit-match-parent;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    a {
      box-sizing: border-box;
      color: ${green};
      display: inline-block;
      font-family: sans-serif;
      ${'' /* line-height: calc(3.5rem - 6px); */}
      padding: 6px 0.7rem 0;
      position: relative;
      text-decoration: none;
      top: 0;
    }
  }
`
//
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-bottom: 0.35rem;
`

const Header = () => (
  <HeaderWrap role="navigation">
    <StyledLink to={'/'}>
      <Logo />
    </StyledLink>
    <Nav>
      <li><Link to="/presentations/">Presentations</Link></li>
      <li><Link to="/tickets/">Tickets</Link></li>
      <li><Link to="/venues/">Venues</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </Nav>
  </HeaderWrap>
)

export default Header
