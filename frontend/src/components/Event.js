import React from 'react'
import { Card } from 'react-bootstrap'

const Event = ({ event }) => {
  let eventName = event.name.split('|')
  let eventNameTrim = eventName.filter((name) => {
    return name !== null && name !== '' && name !== ' '
  })

  let team1 = `|${eventNameTrim[0]}|`
  let team2 = `|${eventNameTrim[2]}|`

  let allOdds = []

  event.markets.forEach((market) => {
    let odd = {}

    if (
      market.displayName !== 'Total' ||
      market.displayName !== 'Total Points'
    ) {
      odd = { market: market.displayName, [team1]: 0, [team2]: 0 }

      if (market.name === null) {
        odd[team1] = '-'
        odd[team2] = '-'
      }

      market.selections.forEach((selection) => {
        if (team1 === selection.name) {
          if (selection.price !== null) {
            odd[team1] = selection.price.a
          } else {
            odd[team1] = '-'
          }
        } else if (team2 === selection.name) {
          if (selection.price !== null) {
            odd[team2] = selection.price.a
          } else {
            odd[team2] = '-'
          }
        }
      })

      allOdds.push(odd)
    }
  })

  // remove duplicate objects (repeating markets)
  let odds = []

  let uniqueObject = {}

  for (let i in allOdds) {
    let objTitle = allOdds[i]['market']

    uniqueObject[objTitle] = allOdds[i]
  }

  for (let i in uniqueObject) {
    odds.push(uniqueObject[i])
  }

  return (
    <>
      <Card style={{ width: '40rem' }} className='my-3 p-3 rounded'>
        <Card.Body>
          <Card.Title as='div'>
            <strong>{event.name}</strong>
          </Card.Title>
          <h6>Odds</h6>
          {odds.map((odd, idx) => (
            <Card.Text key={idx}>
              {`Market: ${odd.market}, ${team1}: ${odd[team1]}, ${team2}: ${odd[team2]}`}
            </Card.Text>
          ))}
        </Card.Body>
      </Card>
    </>
  )
}

export default Event
