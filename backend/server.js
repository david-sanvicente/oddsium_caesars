const express = require('express')
const fetch = require('node-fetch')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/allevents', (req, res) => {
  res.send(`All events page`)
})

app.get('/api/allevents/:id', (req, res) => {
  const sport = req.params.id

  fetch(
    `https://www.williamhill.com/us/nj/bet/api/v2/sports/${sport}/events/schedule`
  )
    .then((data) => data.json())
    .then((data) => {
      res.send(data)
    })
})

app.get('/api/login', (req, res) => {
  const { email, password } = req.body

  fetch(
    'https://gamesrv1.nj.us.williamhill.com/ScratchCards/sapi.aspx?CSI=181&IUA=neow&KA=1&LNG=ENG&PlayMode=M&UniqueDeviceId=f1562d41-5780-412b-b6f7-149b2700616a&cm=LOGN&rst=j',
    {
      credentials: 'include',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
        Accept: 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.5',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'Sec-GPC': '1',
      },
      referrer: 'https://www.williamhill.com/',
      body: `username=${email}&password=${password}25&ClientTimezone=180&CurrencyCode=USD`,
      method: 'POST',
      mode: 'cors',
    }
  )
    .then((res) => res.json())
    .then((json) => res.send(json.S2C))
})

app.listen(5000, console.log(`Server running on port 5000`))
