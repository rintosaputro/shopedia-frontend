import React from 'react';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import {
  FaFacebookF, FaTwitter, FaYoutube, FaDribbble,
} from 'react-icons/fa';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { BsTelephonePlus } from 'react-icons/bs';
import { RiTimer2Line } from 'react-icons/ri';
import styles from './styles/Footer.module.css';

function Footer({ fullFooter }) {
  const company = [
    { name: 'About Us', route: '/about' },
    { name: 'Help Center', route: '/help-center' },
    { name: 'Licenses', route: '/license' },
    { name: 'Market API', route: '/market' },
    { name: 'Site Map', route: '/site-map' },
  ];
  const userfull = [
    { name: 'The collections', route: '/collection' },
    { name: 'Size Guide', route: '/size-guide' },
    { name: 'LookBook', route: '/lookbook' },
    { name: 'Instagram shop', route: '/instagram' },
  ];
  const contactUs = [
    { name: 'info@la-studioweb.com', route: '/', icon: FiMail },
    { name: '+44.954.954.86', route: '/', icon: BsTelephonePlus },
    { name: '9:00am - 19:00pmMonday - Sunday', route: '/', icon: RiTimer2Line },
  ];

  return (
    <footer className="bg-color1">
      <div className="container py-5 text-white">
        {fullFooter
        && (
        <>
          <p className={`text-center fs-4 mx-auto ${styles.font}`}>
            Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer.
            If I could give multiple reasons for my rating it would also be for the design quality and customization to go
            along with the great service. The theme is excellent, keep up the great work.
          </p>
          <hr className="w-25 mx-auto my-5" />
          <div className="text-center fw-bold">Trevor Rivera - CEO IKEA</div>
          <div className="row d-flex flex-row justify-content-between mt-5 mx-lg-5">
            {[...Array(4)].map((data, idx) => (
              <div key={idx} className="col-6 col-lg-3 mt-5 mt-lg-1 text-center">
                <Image src={`/images/Bitmap${idx + 1}.png`} width={110} height={90} alt="Partner" />
              </div>
            ))}
          </div>
        </>
        )}
        <Row className="mt-5">
          <Col xs={12} lg={4}>
            <Image layout="intrinsic" alt="logo" src="/images/logo.png" width={100} height={100} />
            <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
            <div className="d-flex flex-row">
              <div className="border border-white rounded-pill px-2  text-center">
                <FaFacebookF />
              </div>
              <div className="border border-white rounded-pill ms-lg-3 px-2 pb-1 text-center">
                <FaTwitter />
              </div>
              <div className="border border-white rounded-pill mx-lg-3 px-2 pb-1 text-center">
                <FaYoutube />
              </div>
              <div className="border border-white rounded-pill px-2 pb-1 text-center">
                <FaDribbble />
              </div>
            </div>
          </Col>
          <Col xs={12} lg={8}>
            <Row>
              <Col xs={12} lg={4} className="mt-4">
                <h4>Company</h4>
                <ul className="list-group">
                  {company.map((data, index) => (
                    <li key={index} className={`my-2 ${styles.list}`}>
                      <Link href={data.route}>
                        <a className="text-decoration-none text-white">{data.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} lg={4} className="mt-4">
                <h4>Company</h4>
                <ul className="list-group">
                  {userfull.map((data, index) => (
                    <li key={index} className={`my-2 ${styles.list}`}>
                      <Link href={data.route}>
                        <a className="text-decoration-none text-white">{data.name}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
              <Col xs={12} lg={4} className="mt-4">
                <h4>Company</h4>
                <ul className="list-group">
                  {contactUs.map((data, index) => (
                    <li key={index} className={`my-2 ${styles.list}`}>
                      <Link href={data.route}>
                        <a className="text-decoration-none text-white">
                          <data.icon className="fs-4" />
                          {' '}
                          {data.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="text-center mt-5">© 2019 RAZ Store All rights reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
