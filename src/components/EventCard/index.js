import React from 'react'
import styled from 'styled-components'
import {teal} from '../../config/colors'
import venues from '../../content/venues'
import StyledP from '../StyledP'


import mediaQuery from '../../config/mediaQueries'

const Card = styled.div`
  border-top: 1px solid ${teal};
  padding: 2rem 1rem;

  @media (max-width: ${mediaQuery.small.max}px) {
      padding: 2rem 1rem;
  }

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

const Detail = styled.div`
  font-family: sans-serif;
`


const EventCard = ({ date, description, opens, start, subTitle, title, venue }) => (
  <Card>
    <StyledH3>{title}</StyledH3>
    <SubTitle>{subTitle}</SubTitle>
    <StyledP>{description}</StyledP>
    { opens ? <div>doors: <b>{opens}</b></div> : null }
    <Detail>starts: <b>{start}</b></Detail>
    <Detail>date: <b>{date}</b></Detail>
    <Detail>venue: <b>{venues[venue].name}</b></Detail>

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
