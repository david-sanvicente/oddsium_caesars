import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectSport from './components/SelectSport'
import AllEvents from './components/AllEvents'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className='py-3'>
          <Route path='/allevents/:id' component={AllEvents} />
          <Route path='/login' component={SignIn} />
          <Route path='/' component={SelectSport} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
