import React, { useState, useMemo } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import SelectSport from './components/SelectSport'
import AllEvents from './components/AllEvents'
import SignIn from './components/SignIn'
import { UserContext } from './context/UserContext'

const App = () => {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <Router>
      <UserContext.Provider value={providerValue}>
        <Header />
        <main>
          <Container className='py-3'>
            <Route path='/allevents/:id' component={AllEvents} />
            <Route path='/login' component={SignIn} />
            <Route path='/' component={SelectSport} exact />
          </Container>
        </main>
        <Footer />
      </UserContext.Provider>
    </Router>
  )
}

export default App
