import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import http from '../../helper/http'
import { verify } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Alert } from 'react-bootstrap'

const Index = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const { auth } = useSelector(state => state)

  const [token, setToken] = useState(false);

  useEffect(() => {
    const token = route.query.token
    if (route.query.token) {
      setToken(true)
      const param = new URLSearchParams();
      param.append('token', token)
      http().post('/auth/reset-verify', param)
      // async () => {
      //   await 
      // }
      // return request
    }
  }, [route])

  const handleVerify = async (e) => {
    e.preventDefault();
    dispatch(verify(document.getElementById('email').value))
  }

  return (
    token && route.query.token 
    ?
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1>Verified Successfully</h1>
      <Button className='mt-4 px-4' variant="color2" size="lg" active onClick={e => route.push('/login')}>
        Go to Login
      </Button>
    </div>
    :
    <Layout>
      <Head>
        <title>Verify Email | Shopedia</title>
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
            <div className='my-5'>
              <h3>Verify Your Email?</h3>
              <div>Don’t worry! Just fill in your email and we’ll send you a link</div>
              {auth.isError && <Alert variant='color2' className='mt-5 text-danger text-center'>{auth.errMessage}</Alert>}
              {auth.verify 
              ?
              <Alert variant='color2' className='mt-5  text-center'>Verify Successfully, Please check your email</Alert>
              :
              <>
               <Input
                type="email"
                id="email"
                name="email"
                aria-describedby="email"
                className='me-5 py-3 mt-5'
                placeholder='Your email address *'
              />
              <Button className='mt-4 px-4' variant="color2" size="lg" active onClick={handleVerify}>
                Send Verify Code
              </Button>
              </>
              }
              {' '}<br />
            </div>
          </Col>
          <Col xs={12} md={4}>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Index
