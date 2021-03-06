import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const LoginScreen = ({ location, history }) => {
  const { setUser } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const redirect = location.search ? location.search.split('=')[1] : '/'

  const fetchUserData = async (email, password) => {
    const { data } = await axios.post('/api/login', { email, password })

    return data
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    const data = await fetchUserData(email, password)

    const userInfo = {
      userName: data.USERNAME,
      userId: data.ENCRYPTED_USER_ID,
      balance: data.BALANCE,
      loggedIn: true,
    }

    setUser(userInfo)

    console.log(data)

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
