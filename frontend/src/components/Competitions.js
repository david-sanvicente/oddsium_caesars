import React from 'react'
import { Container } from 'react-bootstrap'
import Event from './Event'

const Competitions = ({ competition }) => {
  return (
    <Container>
      <h3>{competition.name}</h3>

      {competition.events.map((event) => {
        return <Event event={event} />
      })}

      {/* <Card className='my-3 p-3 rounded'>
        <Card.Body>
          <Card.Title as='div'>
            <strong>{competition.name}</strong>
          </Card.Title>
        </Card.Body>
      </Card> */}
    </Container>
  )
}

export default Competitions
