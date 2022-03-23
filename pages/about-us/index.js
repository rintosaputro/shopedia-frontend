import Head from 'next/head'
import Input from '../../components/CInput'
import Button from '../../components/CButton'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import Image from 'next/image'
import video from '../../images/video.png'
import image1 from '../../images/about1.png'
import image2 from '../../images/about2.png'
import image3 from '../../images/about3.png'

const index = () => {
  return (
    <Layout>

      <Head>
        <title>About US | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'About Us', active: true }]} />
        </Container>
        <h1 className={'text-center pt-4 pb-5'}>About Us</h1>
      </div>
      <Container>
        <Row className='my-5'>
          <Col xs={12} sm={6}>
            <h1 className='my-5'>RAZ- Modern Furniture</h1>
            <div>
              Quisque at justo sagittis, semper lacus a,
              iaculis tellus. Fusce tempor, leo vel iaculis aliquet,
              dui turpis maximus tellus, commodo congue Nam fermentum,
              augue eget pulvinar ullamcorper, dui purus ornare nibh,
              eu congue ligula felis nec diam liquam mollis nibh eu
            </div>
            <ul>
              <li className='mt-5'>Fusce risus ligula, semper et ultricies vitae</li>
              <li className='my-5'>Vivamus eget ante id velit varius lacinia</li>
            </ul>
            <div>
              Fusce risus ligula, semper et ultricies vitae, bibendum
              non nisl. Nunc in libero quis felis congue molestie eu et
              velit. Praesent gravida magna eget interdum iaculis.
              Aliquam erat volutpat. Integer placerat ipsum quis malesuada
              vehicula. Vestibulum
            </div>
          </Col>
          <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
            <Image
              src={video}
              alt=''
              className='my-5'
            />
          </Col>
        </Row>

        <Row className='my-5'>
          <h1 className={'text-center py-5'}>Why Should Choose Us?</h1>
          <Col xs={12} md={4} className="my-5">
            <h4 className='text-center'>Unique Design</h4>
            <div className='text-center my-3'>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</div>
          </Col>
          <Col xs={12} md={4} className="my-5">
            <h4 className='text-center'>Good Wararanty Policy</h4>
            <div className='text-center my-3'>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</div>
          </Col>
          <Col xs={12} md={4} className="my-5">
            <h4 className='text-center'>Handcrafted Quality</h4>
            <div className='text-center my-3'>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</div>
          </Col>
          <Col xs={12} md={4} className="my-5">
            <h4 className='text-center'>Dedicated Support</h4>
            <div className='text-center my-3'>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</div>
          </Col>
          <Col xs={12} md={4} className="my-5">
            <h4 className='text-center'>Amazing Features</h4>
            <div className='text-center my-3'>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</div>
          </Col>
          <Col xs={12} md={4} className="my-5">
            <h4 className='text-center'>Easy Customized</h4>
            <div className='text-center my-3'>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</div>
          </Col>
        </Row>

        <Row>
          <h1 className={'text-center py-5'}>Meet Our Team</h1>
          <Col xs={12} md={4} className="my-5 d-flex flex-column justify-content-center">
            <div>
              <Image
                src={image1}
                alt=''
                className='my-5'
              />
            </div>
            <h4 className='mt-3'>Ansley Amanda</h4>
            <div>CEO Founder</div>
          </Col>
          <Col xs={12} md={4} className="my-5 d-flex flex-column justify-content-center">
            <div>
              <Image
                src={image2}
                alt=''
                className='my-5'
              />
            </div>
            <h4 className='mt-3'>Maude Norman</h4>
            <div>Art Director</div>
          </Col>
          <Col xs={12} md={4} className="my-5 d-flex flex-column justify-content-center">
            <div>
              <Image
                src={image3}
                alt=''
                className='my-5'
              />
            </div>
            <h4 className='mt-3'>Connor Shelton</h4>
            <div>Products Manager</div>
          </Col>
        </Row>
      </Container>
      <Row className='py-5 bg-color4'>
        <Col xs={12} md={3}>
        </Col>
        <Col xs={12} md={6}>
          <Card className="text-center bg-color4 border-0">
            <Container>
              <Card.Body>
                <Card.Text>
                  &quot;Gave 5 stars for excellent customer service. I had a couple
                  of questions which they replied quickly to answer. If I could
                  give multiple reasons for my rating it would also be for the
                  design quality and customization to go along with the great
                  service. The theme is excellent, keep up the great work.&quot;
                </Card.Text>
                <div height={30} className="my-3">
                  <Image
                    src={image1}
                    width="50px"
                    height="50px"
                    className="img-thumbnail rounded-circle"
                    alt="..." />
                </div>
                <h5>Trevor Rivera - Calinofrnia</h5>
              </Card.Body>
            </Container>
          </Card>
        </Col>
        <Col xs={12} md={3}>
        </Col>
      </Row>
    </Layout >
  )
}
export default index
