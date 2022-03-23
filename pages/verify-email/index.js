import React from 'react'
import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'

const index = () => {
  return (
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
              <Input
                type="email"
                id="email"
                name="email"
                aria-describedby="email"
                className='me-5 py-3 mt-5'
                placeholder='Your email address *'
              />
              <Button className='mt-4 px-4' variant="color2" size="lg" active>
                Send Verify Code
              </Button>{' '}<br />
            </div>
          </Col>
          <Col xs={12} md={4}>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default index
