import Layout from "../../components/Layout"
import Head from 'next/head'
import HeaderPage from "../../components/HeaderPage"
import { useState,useEffect } from "react"
import { Row,Col,Table, Container,Form } from "react-bootstrap"
import Image from "next/image"
import CButton from "../../components/CButton"
import CInput from "../../components/CInput"
import cartStyle from "./cart.module.scss"
import {FaTrashAlt} from "react-icons/fa"

const cart = ()=>{

  const [cart,setCart] = useState([])
  const [titleTable,setTitleTable] = useState([])

  useEffect(()=>{
    setTitleTable(["Products","Price","Quantity","Total"])
    setCart([{name:"Fabric Mid Century Chair",image:"chair-cart2.png",price:"$10.50",quantity:2,total:"$21.00"},
    {name:"Chair in Dark Grey",image:"chair-cart1.png",price:"$10.50",quantity:1,total:"$10,50"}])
  },[])

  return(
    <Layout>
        <Head>
        <title>Cart | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderPage breadcumb={[{name:"Cart",active:true}]} title="Your cart" detail="Buy everything in your cart now!"/>
      <Container>
        <Form>
          <Row>
            <Col md={6} lg={7} xl={8}>
              <Row className="mt-5 pb-2 pt-5 text-color1 text-uppercase text-center d-none d-lg-flex border-bottom border-2 fw-bold">
                  {
                    titleTable.map((item)=>{
                        return(
                          item==="Products" ? <Col lg={6}>{item}</Col> :
                          <Col lg={2}>{item}</Col>
                        )
                    })
                  }
              </Row>
                {
                  cart.map((item)=>{
                    return(
                      <Row key={item.name}>
                        <Col lg={6}>
                          <div className='d-flex flex-row align-items-center'>
                            <span className="py-5 me-3"><CButton classStyle={cartStyle.button}><FaTrashAlt className="fs-5"/></CButton></span>
                            <Image src={`/images/${item.image}`} width={69} height={83}/>
                            <span className="ms-5">{item.name}</span>
                          </div>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                            <span className="fw-bold">{item.price}</span>
                        </Col>
                        <Col  xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                          <span><div className="d-flex justify-content-between"><CButton classStyle={cartStyle.button}>-</CButton><CInput classVariant={cartStyle.formQty} type="number" value={item.quantity}/><CButton classStyle={cartStyle.button}>+</CButton></div></span>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                          <span className="text-muted d-inline d-lg-none">Total: </span>
                          <span className="fw-bold">{item.total}</span>
                        </Col>
                      </Row>
                    )
                  })
                }
                {/* <Table hover responsive="lg" className="mt-5">
                  <thead className="text-color1 text-uppercase">
                    <tr>
                      <th>#</th>
                      {
                        titleTable.map((item)=>{
                          return(
                            item=="Products" ? <th colSpan={2}>{item}</th> :
                            <th>{item}</th>
                          )
                        })
                      }
                    </tr>
                  </thead>
                  <tbody>
                      {
                        cart.map((item)=>{
                          return(
                          <tr className={`${cartStyle.tBorderNone} align-middle`}>
                            <td className="py-5"><CButton classStyle={cartStyle.button}><FaTrashAlt className="fs-5"/></CButton></td>
                            <td className="py-5"><Image src={`/images/${item.image}`} width={69} height={83}/></td>
                            <td className="py-5">{item.name}</td>
                            <td className="py-5">{item.price}</td>
                            <td className="py-5"><div className="d-flex justify-content-between"><CButton classStyle={cartStyle.button}>-</CButton><CInput classVariant={cartStyle.formQty} type="number" value={item.quantity}/><CButton classStyle={cartStyle.button}>+</CButton></div></td>
                            <td className="py-5">{item.total}</td>
                          </tr>
                          )
                        })
                      }
                  </tbody>
              </Table> */}
              <div className="d-md-flex justify-content-between mt-5">
                <div className={`${cartStyle.cupon} d-md-flex mb-5 w-md-50`}>
                  <CInput classVariant={`${cartStyle.formCupon} w-md-50`} placeholder="Enter your coupon code"/>  
                  <CButton className={`${cartStyle.buttonUpdate} fw-bold`}>Apply Cupon</CButton>
                </div>
                <div className="text-end">
                  <CButton classStyle={`${cartStyle.buttonDelete}`}>Clear Cart</CButton>
                  <CButton classStyle={`${cartStyle.buttonUpdate} fw-bold`}>Update Cart</CButton>
                </div>
              </div>
             
            </Col>
            <Col md>
                <div className="ms-md-4 ps-5 mt-5 pt-4 bg-color4 ">
                  <div className="fs-6 fw-bold mb-5">Cart Total</div>
                    <Row className="mb-5">
                      <Col xs={4}><div className="fw-bold">Subtotal</div></Col>
                      <Col><div className="fw-bold">$125</div></Col>
                    </Row>
                    <Row className="mb-5">
                      <Col md={4}><div className="fw-bold mb-3">Shipping</div></Col>
                      <Col>
                        <div className="me-5 me-md-3">
                          <Form.Select className={cartStyle.selectShipping}>
                            <option>Disabled select</option>
                          </Form.Select>
                        </div>
                      </Col>
                    </Row>
                    <hr className="w-80 me-5"></hr>
                    <Row className="pb-5">
                      <Col xs={4}><div className="fw-bold">Total Price</div></Col>
                      <Col><div className="fw-bold">$125</div></Col>
                    </Row>
                </div>
                <div className="ms-md-4 mb-5 d-grid gap-2">
                  <CButton classStyle={`${cartStyle.buttonProcessCheckout} bg-color2`}>Procced To Check Out</CButton>
                </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </Layout>
  )
}

export default cart
