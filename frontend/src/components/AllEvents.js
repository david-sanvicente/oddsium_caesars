import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Competitions from './Competitions'
import { Col } from 'react-bootstrap'

const AllEvents = ({ match }) => {
  const [events, setEvents] = useState([])
  const [eventName, setEventName] = useState('')

  const sport = match.params.id

  const fetchEvents = async () => {
    const { data } = await axios.get(`/api/allevents/${sport}`)
    setEvents([...data.competitions])
    setEventName(data.name)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <>
      <h1>{eventName}</h1>
      {events.map((competition, idx) => {
        return (
          <Col
            key={idx}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            className='align-items-stretch d-flex'
          >
            <Competitions competition={competition} />
          </Col>
        )

        // return <li>{event}</li>
      })}
    </>
  )
}

export default AllEvents
