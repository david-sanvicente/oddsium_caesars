import React, { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import Sport from '../components/Sport'
import { UserContext } from '../context/UserContext'

const SelectSport = () => {
  const { user, setUser } = useContext(UserContext)

  const allSports = [
    'football',
    'ufcmma',
    'americanfootball',
    'basketball',
    'icehockey',
    'tennis',
    'boxing',
    'baseball',
  ]

  return (
    <>
      <h5>Select a sport</h5>
      <Row>
        {allSports.map((sport, idx) => {
          return (
            <Col
              key={idx}
              sm={12}
              md={6}
              lg={4}
              xl={3}
              className='align-items-stretch d-flex'
            >
              <Sport sport={sport} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default SelectSport
