import Layout from "../../components/Layout"
import Head from 'next/head'
import HeaderPage from "../../components/HeaderPage"
import { useState,useEffect } from "react"
import { Row,Col,Table, Container } from "react-bootstrap"

const cart = ()=>{

  const [cart,setCart] = useState([])
  
  useEffect(()=>{
    setCart([{name:"Fabric Mid Century Chair",price:"$10.50",qty:2,total:"$21.00"},
    {name:"Chair in Dark Grey",price:"$10.50",quantity:1,total:"$10,50"}])
  },[])

  return(
    <Layout>
        <Head>
        <title>Cart | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderPage breadcumb={[{name:"Cart",active:true}]} title="Your cart" detail="Buy everything in your cart now!"/>
      <Container>
        <Row>
          <Col md>
            <Table responsive="xs" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md>

          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default cart
