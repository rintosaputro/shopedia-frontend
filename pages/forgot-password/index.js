import { useEffect, useState } from "react"
import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useRouter } from "next/router"
import http from '../../helper/http'

const Index = () => {
  const [requested, setRequested] = useState(false)
  const router = useRouter()
  const [token, setToken] = useState('')
  const [doneReset, setDoneReset] = useState(false)
  const [resetError, setResetError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    setToken(router.query.token)
  }, [router.query])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setRequested(true)
    const data = new URLSearchParams()
    data.append('email', e.target.elements['email'].value)
    const request = await http().post('http://localhost:3000/auth/reset-verify?callbackUrl=http://localhost:3001', data, {
      validateStatus: (status) => {
        return status < 400
      }
    }).catch((error) => {
      console.log(error.response)
    })
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()
    const data = new URLSearchParams()
    data.append('token', token)
    data.append('password', e.target.elements['password'].value)
    data.append('confirmPassword', e.target.elements['confirmPassword'].value)

    const request = await http().post('http://localhost:3000/auth/reset-verify', data, {
      validateStatus: (status) => {
        return status < 400
      }
    }).catch((error) => {
      setResetError(true)
      setErrorMsg(error.response.data.message)
    })
    if (request && request.status < 400) {
      setDoneReset(true)
    }

  }

  return (
    <Layout>
      <Head>
        <title>Forgot Password | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <h1 className={'text-center pt-5'}>My Account</h1>
        <div className={'text-center pb-5'}>Register and log in with your account to be able to shop at will</div>
      </div>
      <Container>
        <Row className='py-5'>
          <Col xs={12} md={4}>
          </Col>
          <Col xs={12} md={4}>
            {

              <Form className='my-5' onSubmit={handleSubmit}>
                <h3>Forgot your Password?</h3>
                <div>Don’t worry! Just fill in your email and we’ll send you a link</div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  className='me-5 py-3 mt-5'
                  placeholder='Your email address *'
                />
                <Button type="submit" className='mt-4 px-4' variant="color2" size="lg" active>
                  Reset Password
                </Button>{' '}<br />
              </Form>
            }
            {
              token && !doneReset &&
              <Container className="d-flex flex-column justify-content-center h-lg-100 vh-100">
                <div>
                  <h2>
                    Did You Forgot Your Password?
                    Don’t Worry, You Can Reset Your
                    Password In a Minutes.
                  </h2>
                </div>
                <div>
                  <p>
                    Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.
                  </p>
                </div>
                <form className="mb-4" onSubmit={handleResetPassword}>
                  <div>
                    <Input name="newPassword" type='password' placeholder='New Password ..' className='py-3 mx-4' />
                    <Input name="confirmPassword" type='password' placeholder='Confirm Password ..' className='py-3 mx-4' />
                  </div>
                  {
                    resetError &&
                    <div className="text-center mb-3">
                      <h3 className="error-message">{errorMsg}</h3>
                    </div>
                  }
                  <Button type='submit' isBlock={true} variant='primary'>Confirm</Button>
                </form>
              </Container>
            }
          </Col>
          <Col xs={12} md={4}>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Index
