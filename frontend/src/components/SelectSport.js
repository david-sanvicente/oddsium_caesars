import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Sport from '../components/Sport'

const SelectSport = () => {
  // football, ufcmma, americanfootball, basketball, icehockey, tennis, boxing, baseball
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
      <Row>
        {allSports.map((sport, idx) => {
          return (
            <Container>
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
            </Container>
          )
        })}
      </Row>
    </>
  )
}

export default SelectSport
