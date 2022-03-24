import Layout from "../../components/Layout"
import HeaderPage from "../../components/HeaderPage"
import Head from 'next/head'
import { Container,Row,Col } from "react-bootstrap"
import { Form } from "react-bootstrap"
import CInput from "../../components/CInput"
import CButton from "../../components/CButton"
import 'react-phone-number-input/style.css'
import { useEffect, useState } from "react"

const checkout = ()=>{
  const [paymentMethod,setPaymentMethod] = useState([])

  useEffect(()=>{
    setPaymentMethod(["Cash","Transfer","Credit Card"])
  },[])

  return(
    <Layout>
        <Head>
          <title>Checkout | Shopedia</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <HeaderPage breadcumb={[{name:"Cart",href:"/"},{name:"Checkout",active:true}]} title="Check Out" detail="Pay and get your ordered items"/>
      <Container>
        <div className="m-5">
              <Form>
                <Row>
                  <Col xs={12} md={3}></Col>
                  <Col xs={12} md={6}>
                    <div className="fs-2">Self Information</div>
                    <CInput type="text" classVariant="me-5 py-3 mt-5" placeholder="Your name *" ></CInput>
                    <CInput as="textarea" className="me-5 py-3 mt-3" rows={3} placeholder="Address *"/>
                    <CInput type="text" classVariant="me-5 py-3 mt-3" placeholder="Phone Number *" ></CInput>
                    <Form.Select className="me-5 py-3 mt-5">
                      <option style={{display:'none'}}>Payment Method</option>
                      {
                        paymentMethod.map((item)=>{
                          return(
                            <>
                              <option>{item}</option>
                            </>
                          )
                        })
                      }
                    </Form.Select>
                    <CButton className='mt-5 mb-5 px-4' variant="color2" size="lg" active> Check Out</CButton>
                  </Col>
                </Row>
              </Form>
        </div>
      </Container>
    </Layout>
  )
}

export default checkout
