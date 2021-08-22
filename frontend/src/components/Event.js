import React from 'react'
import { Card } from 'react-bootstrap'

const Event = ({ event }) => {
  let eventName = event.name.split('|')
  let eventNameTrim = eventName.filter((name) => {
    return name !== null && name !== '' && name !== ' '
  })

  let team1 = `|${eventNameTrim[0]}|`
  let team2 = `|${eventNameTrim[2]}|`
  console.log(team1, 'vs', team2)

  let odds = []

  event.markets.forEach((market) => {
    let odd = {}
    if (market.displayName !== 'Total') {
      odd = { market: market.displayName, [team1]: 0, [team2]: 0 }

      if (market.name === null) {
        odd[team1] = '-'
        odd[team2] = '-'
      }
      market.selections.forEach((selection) => {
        if (team1 === selection.name) {
          odd[team1] = selection.price.a
        } else if (team2 === selection.name) {
          odd[team2] = selection.price.a
        }
      })
      odds.push(odd)
    }
  })

  console.log(odds)

  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Body>
        <Card.Title as='div'>
          <strong>{event.name}</strong>
        </Card.Title>
        <Card.Text as='div'>{'Odds'}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Event
