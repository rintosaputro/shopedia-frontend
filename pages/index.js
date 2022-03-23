import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Row,Col, Container,Nav } from 'react-bootstrap'
import homepage from '../styles/homepage.module.scss'
import CButton from '../components/CButton'
import NavHomepage from '../components/NavHomepage'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title className='bg-primary'>Shopedia</title>
        <meta name="description" content="Generatedd by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <header className={homepage.header}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8}>
                          <p className={`${homepage.titleHeader} text-justify`}>
                            Welcome to Shopedia 
                          </p>
                          <div className={`${homepage.textHeader} mt-5 text-color2`}>
                            Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissi
                          </div>
                          <div className='mt-5 mb-5 d-flex align-items-center'>
                            <div className={homepage.lineHorizontal}></div>
                            <Link href="#"><a className="ms-3 fs-6 text-color1 text-decoration-none fw-bold">EXPLORE MORE</a></Link>
                          </div>
                    </Col>
                    <Col lg={4}className='d-none d-lg-block'>
                      <Image src="/images/image-header.png" width={500} height={500}/>
                    </Col>
                </Row>
            </Container>
          </header>
          <section>
              <Container>
                <NavHomepage/>
                  {/* <Nav defaultActiveKey="/home" as="ul" className={`${homepage.menuTrend} justify-content-center`}>
                    <Nav.Item as="li">
                      <Nav.Link href="/home">New Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link className='active'>Hot Trends</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="link-2">Sale Off</Nav.Link>
                    </Nav.Item>
                </Nav> */}
                  <Row className='mt-5 mb-5 text-center'>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-auto me-auto">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>$765.99</div>
                      </div>
                    </Col>
                  </Row>
                  <div className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
                      <div className={homepage.lineHorizontal}></div>
                      <Link href="#"><a className="ms-3 fs-6 text-color1 text-decoration-none fw-bold">VIEW MORE PRODUCTS</a></Link>
                  </div>
              </Container>
          </section>
          <section>
              <Container>
                <div className={`${homepage.sectionTestimonial} text-center`}>
                    <div className={`${homepage.titleTestimonial} text-color1`}>What Clients Say?</div>
                    <div className='d-flex justify-content-center mt-3'>
                      <div className={`${homepage.lineVertical} d-none d-md-block`}></div>
                    </div>
                    <div className={`${homepage.textTestimonial} text-color1 mt-4 text-center`}>
                    “Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work.“
                    </div>
                    <div className='text-color2 fs-5 mt-5 fw-bold'>Trevor Rivera - California</div>
                    <div className='mt-5 mb-5'>
                      <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70}/></CButton>
                      <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70}/></CButton>
                      <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`}><Image src="/images/testimon-image.png" height={70} width={70}/></CButton>
                      <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70}/></CButton>
                      <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70}/></CButton>
                    </div>
                  
                </div>
              </Container>
          </section>
      </Layout>
    </div>
  )
}
