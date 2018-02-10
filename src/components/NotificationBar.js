import react from 'react'
import styled from 'styled-components'
import {orange, white} from '../config/colors'

const NotificationBar = styled.div`
  font-family: sans-serif;
  height: 40px;
  background-color: ${orange};
  display: flex;
  color: ${white};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1101;
`

export default NotificationBar
