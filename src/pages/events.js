import React from 'react'
import {events} from '../content'
import EventCard from '../components/EventCard'
import UL from '../components/UL'
import styled from 'styled-components'
import {teal} from '../config/colors'
const dates = {
  Saturday: '08-25-2018',
  Sunday: '08-26-2018'
}

const DayHeader = styled.div`
  color: ${teal};
  font-family: sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  h2 {
    font-weight: inherit;
    font-size: 2.6rem;
    margin: 0;
  }

  > * {
    display: inline-flex;
    padding: 0 1rem;
  }

  > div {
    line-height: 1.3;
  }
`

const DaySection = styled.div`
  padding: 1rem 0;
`

const EventList = () => (
  <div>
  <h1>Events</h1>
  <UL>
    {
      Object.keys(dates).map((d, i) => {
        return (
          <DaySection key={d}>
            <DayHeader>
              <h2>{d}</h2>
              <div>All presentations are on the second floor of the Denver Modernism Show, unless otherwise noted.</div>
            </DayHeader>
            {
              events
                .filter(e => e.date === dates[d])
                .map((x, i) => (
                    <li key={i}>
                      <EventCard {...x} />
                    </li>
                  ))
            }
          </DaySection>
        )
      })
    }


  </UL>
  </div>

)

export default EventList
