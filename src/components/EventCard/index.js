import React from 'react'
import styled from 'styled-components'
import {teal} from '../../config/colors'
import StyledP from '../StyledP'

const Card = styled.div`
  border-top: 1px solid ${teal};
  padding: 3rem 1rem;

  > div {
    display: block;
  }
`

const StyledH3 = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  line-height: 1.33;
`

const SubTitle = styled.div`
  font-family: sans-serif;
  color: ${teal};
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
`


const EventCard = ({ date, description, start, subTitle, title, venue }) => (
  <Card>
    <StyledH3>{title}</StyledH3>
    <SubTitle>{subTitle}</SubTitle>
    <StyledP>{description}</StyledP>
    <div>start: {start}</div>
    <div>date: {date}</div>
    <div>venue: {venue}</div>
  </Card>
)

EventCard.defaultProps = {
  event: {
    title: 'What is the Mid-Century Modern Home',
    subTitle: 'Atom Stevens, Historian',
    description: 'A lot of us know it when we see it. We are familiar with many of the great examples of mid-century modern houses both in Denver and beyond. But do you know where this style came from? What defines a house as a "mid-century modern?"',
    start: '11:30am',
    date: '08-25-2018',
    venue: 'dms'
  }
}

export default EventCard
