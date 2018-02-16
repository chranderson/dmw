import react from 'react'
import styled from 'styled-components'
import {orange, white} from '../config/colors'

const NotificationBar = styled.div`
  font-family: sans-serif;
  font-size: 0.75rem;
  height: 1.5rem;
  background-color: ${orange};
  display: flex;
  color: ${white};
  align-items: center;
  padding: 0 1rem;
  ${'' /* justify-content: center; */}
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1101;
`

export default NotificationBar
