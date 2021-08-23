import React from 'react'
import { Container } from 'react-bootstrap'
import Event from './Event'

const Competitions = ({ competition }) => {
  return (
    <Container>
      <h5>{competition.name}</h5>

      {competition.events.map((event, idx) => {
        return <Event key={idx} event={event} />
      })}
    </Container>
  )
}

export default Competitions
