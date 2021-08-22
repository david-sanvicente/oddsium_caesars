const express = require('express')
const fetch = require('node-fetch')

const app = express()

app.get('/', (req, res, next) => {
  res.send('API is running...')
})

app.get('/api/allevents', (req, res) => {
  res.send(`All events page`)
})

app.get('/api/allevents/:id', (req, res, next) => {
  const sport = req.params.id

  // res.send(`${sport} from server`)

  fetch(
    `https://www.williamhill.com/us/nj/bet/api/v2/sports/${sport}/events/schedule`
  )
    .then((data) => data.json())
    .then((data) => {
      res.send(data)
    })
})

app.listen(5000, console.log(`Server running on port 5000`))
