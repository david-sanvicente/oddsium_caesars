import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Sport = ({ sport }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/allevents/${sport}`}></Link>
      <Card.Body>
        <Link to={`/allevents/${sport}`}>
          <Card.Title as='div'>
            <strong>{sport}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Sport
