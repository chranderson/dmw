import React from 'react'
import Link from 'gatsby-link'
import Logo from '../Logo'
import styled from 'styled-components'
import {darken} from 'polished'
import {teal} from '../../config/colors'

const HeaderWrap = styled.div`
  background-color: rgba(255,255,255, 0.975);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  margin-top: 40px;
  position: fixed;
  border-bottom: 1px solid ${darken(0.1, '#ffffff')};
  z-index: 2;
  left: 0;
  right: 0;
`

const Nav = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 0 0 1rem;
  list-style: none;
  overflow-x: auto;
  -webkit-mask-image: linear-gradient(to right, transparent, white 0.175rem, white 98%, transparent);
  flex-grow: 1;

  > li {
    font-size: 0.8rem;
    display: inline-block;
    margin: 0;
    padding-left: 0;
    text-align: -webkit-match-parent;
    text-transform: uppercase;
    letter-spacing: 0.03em;

    a {
      box-sizing: border-box;
      color: ${teal};
      display: inline-block;
      font-family: sans-serif;
      line-height: calc(3.5rem - 6px);
      padding: 6px 0.7rem 0;
      position: relative;
      text-decoration: none;
      top: 0;
    }
  }

`

const Header = () => (
  <HeaderWrap role="navigation">
    <Link to={'/'}>
      <Logo />
    </Link>
    <Nav>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/events/">Events</Link></li>
      <li><Link to="/tickets/">Tickets</Link></li>
    </Nav>
  </HeaderWrap>
)

export default Header
