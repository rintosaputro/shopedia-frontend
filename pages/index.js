import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Row, Col, Container, Nav, Alert } from 'react-bootstrap'
import homepage from '../styles/homepage.module.scss'
import CButton from '../components/CButton'
import NavProductHomepage from '../components/NavProductHomepage'
import { getProduct } from '../redux/actions/product'
import { getProfile } from '../redux/actions/user'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router'


export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.product.product)
  const error = useSelector(state => state.product)
  const route = useRouter()
  console.log(error.errMessage)
  useEffect(
    () => {
      dispatch(getProduct)
      if (window.localStorage.getItem('token')) {
        dispatch(getProfile)
      }
    }, []
  )

  return (
    <Layout>
      <Head>
        <title className='bg-primary'>Shopedia</title>
        <meta name="description" content="Generatedd by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                <Link href="/product"><a className="ms-3 fs-6 text-color1 text-decoration-none fw-bold">EXPLORE MORE</a></Link>
              </div>
            </Col>
            <Col lg={4} className='d-none d-lg-block'>
              <Image src="/images/image-header.png" width={500} height={500} alt='image spoiler' />
            </Col>
          </Row>
        </Container>
      </header>
      <section>
        <Container>
          <NavProductHomepage />
          {
            error.errMessage === "Data not found" &&
            <>
              <div className='d-flex justify-content-center'>
                <Image
                  width={350}
                  height={250}
                  src='/../images/comingsoon.svg'
                  alt="404"
                />
              </div>
              <Alert className='d-flex justify-content-center'>New Product is Coming Soon</Alert>
            </>
          }
          <>
            <Row className='mt-5 mb-5 text-center'>
              {data?.map((data, idx) => {
                return (
                  <Col style={{ cursor: 'pointer' }} onClick={e => route.push(`/product/${data.id}`)} key={data.id} md={4} className="mb-4">
                    <Image src={data.product_images[0].image || "/images/chair2.png"} width={460} height={400} alt="chair2" />
                    <div className="text-md-start ms-auto me-auto">
                      <p className='fs-5'>{data.name}</p>
                      <div className='fs-6 fw-bold'>
                        <NumberFormat value={String(data.price)} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'} />
                      </div>
                    </div>
                  </Col>
                )
              })}
            </Row>
            {
              !error.errMessage === "Data not found" &&
              <div className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
                <div className={homepage.lineHorizontal}></div>
                <Link href="#"><a className="ms-3 fs-6 text-color1 text-decoration-none fw-bold">VIEW MORE PRODUCTS</a></Link>
              </div>
            }
          </>
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
              <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70} alt='testimoni picture' /></CButton>
              <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70} alt='testimoni picture' /></CButton>
              <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`}><Image src="/images/testimon-image.png" height={70} width={70} alt='testimoni picture' /></CButton>
              <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70} alt='testimoni picture' /></CButton>
              <CButton classStyle={`${homepage.buttonTestimonial} rounded-circle`} disabled><Image src="/images/testimon-image.png" height={70} width={70} alt='testimoni picture' /></CButton>
            </div>

          </div>
        </Container>
      </section>
    </Layout>
  )
}
