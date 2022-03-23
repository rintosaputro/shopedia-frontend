import React, { useState } from 'react';
import Head from 'next/head'
import Carousel from '../../components/Carousel'
import { Container, Row, Col, ListGroup, Form, Pagination } from 'react-bootstrap'
// import RangeSlider from 'react-bootstrap-range-slider';
import RangeSlider from '../../components/RangeSlider';
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import Image from 'next/image'


const Index = () => {
  const [value, setValue] = useState(25);
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item size="lg" className='mx-1' key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Layout>

      <Head>
        <title>My Profile | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className='mb-5'>
        <Carousel />
        <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Product', active: true }]} />

        <Row>
          <Col md={3}>
            <ListGroup defaultActiveKey="#link1">
              <h3 className='ms-3'>Categories</h3>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Accesories</p><div>99</div>
              </ListGroup.Item>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Brands</p><div>99</div>
              </ListGroup.Item>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Clothings</p><div>99</div>
              </ListGroup.Item>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Fashion</p><div>99</div>
              </ListGroup.Item>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Furniture</p><div>99</div>
              </ListGroup.Item>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Men</p><div>99</div>
              </ListGroup.Item>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Women</p><div>99</div>
              </ListGroup.Item>
              <ListGroup.Item className='bg-transparent border-0 d-flex justify-content-between' action href="#link2" >
                <p>Shoes</p><div>99</div>
              </ListGroup.Item>
            </ListGroup>

            <>
              <h3 className='ms-3 my-3'>Price</h3>
              <RangeSlider
                min={0}
                max={10000000}
                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
              />
            </>

            <>
              <h3 className='ms-3 my-3'>Brands</h3>
              <div className='d-flex flex-column gap-4 ms-3'>
                <Form.Check
                  inline
                  label="IKEA"
                  name="group1"
                />
                <Form.Check
                  inline
                  label="MR Royale"
                  name="group1"
                />
                <Form.Check
                  inline
                  label="Sweet House"
                  name="group1"
                />
                <Form.Check
                  inline
                  label="North Oxford"
                  name="group1"
                />
                <Form.Check
                  inline
                  label="Mr.Poppin 1929"
                  name="group1"
                />
              </div>
            </>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={9}>
              </Col>
              <Col md={3}>
                <Form.Select className='border-0'>
                  <option>Sort By</option>
                  <option>Latest Product</option>
                  <option>More Expensivet</option>
                  <option>More Cheap</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className='mt-5 mb-5 text-center'>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-auto me-auto">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                <div className="text-md-start ms-4">
                  <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                  <div className='fs-6 fw-bold'>$765.99</div>
                </div>
              </Col>
            </Row>

            <Pagination>{items}</Pagination>
          </Col>
        </Row>
      </Container>
    </Layout >
  )
}
export default Index
