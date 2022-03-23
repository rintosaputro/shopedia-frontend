import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import Layout from "../../components/Layout"
import NavProduct from "../../components/NavProduct";
import { BsCheck } from 'react-icons/bs';
import styles from './MyOrder.module.css';

const MyOrder = () => {
  const dataOrder = [
    {pict: '/images/Mask.png', desc: 'Fabric mid century chair', price: 10.50, qty: 2, status: 'sent', total: 21},
    {pict: '/images/Mask.png', desc: 'Fabric mid century chair', price: 10.50, qty: 2, status: 'sent', total: 21}
  ]
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <Layout>
      <header className="text-center bg-color4 py-5">
        <div className="my-5 container">     
          <h1>My Order</h1>
          <p>See your notifications for the last updates</p>
        </div>
      </header>
      <section className={`container ${styles.contain}`}>
        <div className="my-5">
          <NavProduct />
        </div>
        <Row className="pb-2 pt-5 text-muted d-none d-lg-flex">
          <Col lg={4}>
            <span>Products</span>
          </Col>
          <Col lg={2}>
            <span>Price</span>
          </Col>
          <Col lg={2}>
            <span>Quantity</span>
          </Col>
          <Col lg={2}>
            <span>Status Order</span>
          </Col>
          <Col lg={2}>
            <span>Total</span>
          </Col>
        </Row>
        {dataOrder.map((data, index) => {
          return (
            <Row key={index} className='my-5'>
              <Col lg={4}>
                <div className='d-flex flex-row align-items-center'>
                  <Image src={data.pict} width={100} height={100} alt='Product picture' />
                  <span className="ms-5">{data.desc}</span>
                </div>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <div>
                  <span className="text-muted d-inline d-lg-none">Price: </span>
                  <span className="fw-bold">{formatter.format(data.price)}</span>
                </div>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <span className="text-muted d-inline d-lg-none">Qty: </span>
                <span>{data.qty < 10 ? '0'+data.qty : data.qty}</span>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <div>
                  <span className="text-muted d-inline d-lg-none">Status order: </span>
                  <span className={styles.pill}><BsCheck/></span> {data.status}
                </div>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <span className="text-muted d-inline d-lg-none">Total: </span>
                <span className="fw-bold">{formatter.format(data.total)}</span>
              </Col>
            </Row>
          )
        })}
        <hr className="mb-5"/>
      </section>
    </Layout>
  )
}

export default MyOrder;
