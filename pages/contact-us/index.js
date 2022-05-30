/* eslint-disable max-len */
import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/CInput';
import Button from '../../components/CButton';
import Layout from '../../components/Layout';
import BreadCrumb from '../../components/BrreadCrumb';

const index = () => (
  <Layout>

    <Head>
      <title>Contact US | Shopedia</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="bg-color4 py-5">
      <Container>
        <BreadCrumb data={[{ name: 'FAQ', href: '/faq' }, { name: 'Contact Us', active: true }]} />
      </Container>
      <h1 className="text-center pt-4 pb-5">Contact Us</h1>
    </div>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2834074458738!2d106.9625852146865!3d-6.357350195399544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6993912277883f%3A0x1d6d155d35dfbf98!2sfazztrack!5e0!3m2!1sid!2sid!4v1648009946080!5m2!1sid!2sid" width="600" height="450" allowFullScreen="" loading="lazy" />
        </Col>
        <Col xs={12} md={6}>
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email"
            className="me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1"
            placeholder="Name *"
          />
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email"
            className="me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1"
            placeholder="Your Email *"
          />
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email"
            className="me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1"
            placeholder="Your Website "
          />
          <Input
            type="email"
            id="email"
            name="email"
            aria-describedby="email"
            className="me-5 py-3 mt-5 border-top-0 border-start-0 border-end-0 border-3 border-color1"
            placeholder="Your Business Plan "
          />
          <Input
            type="textarea"
            as="textarea"
            id="email"
            name="email"
            aria-describedby="email"
            className="me-5 pb-5 my-5 border-top-0 border-start-0 border-end-0 border-3 border-color1"
            placeholder="Message "
          />
          <div className="d-grid">
            <Button className="mt-4 my-5 py-3 px-4" variant="color2" size="lg" active>
              Send Message
            </Button>
            {' '}
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
);
export default index;
