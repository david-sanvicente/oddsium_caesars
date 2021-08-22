import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const LoginScreen = ({ location, history }) => {
  const { user, setUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [response, setResponse] = useState('')

  const userInfo = { userName: '', password: '', response: '', loggedIn: false }

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const fetchUserData = async () => {
    const { data } = await axios.get('/api/login')
    setResponse(data)
  }

  // useEffect(() => {
  //   console.log(email, password, response)
  // }, [email, password])

  const submitHandler = (e) => {
    e.preventDefault()

    // mimics a successful login to server
    fetchUserData()

    userInfo.userName = email
    userInfo.password = password
    userInfo.loggedIn = true
    userInfo.response = response
    setUser(userInfo)
    history.push('/')
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
