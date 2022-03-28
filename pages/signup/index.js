import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../login/login.module.css'
import Sidebar from '../../components/sidebar'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { signup } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { useRouter } from 'next/router'
import ModalNotifError from '../../components/ModalNotifError'

const Index = () => {
  const [roleCheck, setRoleCheck] = useState(true);
  const route = useRouter();
  const dispatch = useDispatch();

  const { auth } = useSelector(state => state);

  useEffect(() => {
    if (auth.signup) {
      route.push('/login');
    }
  }, [auth])

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('.form-check-input:checked');
    let roleId
    if (role) {
      roleId = role.value
      setRoleCheck(true)
    } else {
      setRoleCheck(false)
    }
    console.log(email, password, roleId);
    dispatch(signup(email, password, Number(roleId)))
    // route.push('/login')
  }

  return (
    <>
      {/* {auth.signup && route.push('/login')} */}
      <Layout>
        <Head>
          <title>Login | Shopedia</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={'bg-color4 py-5'}>
          <h1 className={'text-center pt-5'}>My Account</h1>
          <div className={'text-center pb-5'}>Register and log in with your account to be able to shop at will</div>
        </div>
        <Container>
          <Row className='py-5'>
            <Col xs={12} md={4}>
              <Sidebar />
            </Col>
            <Col xs={12} md={5}>
              <div className='my-5'>
                <h3>Create Account</h3>
                <ModalNotifError message={auth.errMessage} />
                {/* {auth.isError && <Alert variant='color1' className='text-danger text-center mt-5'>{auth.errMessage}</Alert>} */}
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  className='me-5 py-3 mt-5'
                  placeholder='Email address'
                />
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  aria-describedby="password"
                  className='me-5 py-3 mt-2'
                  placeholder='Password'
                />
                <Row className='mt-3'>
                  <Col>
                    <Form.Check
                      inline
                      label="I'm Customer"
                      name="group1"
                      className='roleCheckbox'
                      value={2}
                    />
                  </Col>
                  <Col>
                    <Form.Check
                      inline
                      label="I'm Seller"
                      name="group1"
                      className='roleCheckbox'
                      value={3}
                    />
                  </Col>
                </Row>
                <Button onClick={handleSubmit} className='mt-4 px-4' variant="color2" size="lg" active>
                  Register
                </Button>{' '}<br />
              </div>
            </Col>
            <Col xs={12} md={3}>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
export default Index
