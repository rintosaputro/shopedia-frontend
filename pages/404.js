import React from 'react'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
  return (
    <Layout>
      <Head>
        <title>404 | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Row className='py-5'>
          <Col xs={12} md={6}>
            <h1 className='notfound'>404</h1>
            <h1>Page cannot be found!</h1>
            <div>Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel
              diam auctor commodo. Curabitur blandit
              ultrices exurabitur ut magna dignissim, dignissi
            </div>
            <Row className='my-5'>
              <Col xs={12} md={3}>
                <hr align={'center'} size="5" width="100%" />
              </Col>
              <Col xs={12} md={9} className='mt-1'>
                <Link href='/'>
                  <a className='text-decoration-none text-color2'>BACK TO HOMEPAGE</a>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2}>
          </Col>
          <Col xs={12} md={4}>
            <Image
              width={350}
              height={250}
              src='/../images/NotFound.svg'
              alt="404"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default index
