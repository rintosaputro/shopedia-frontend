import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import NavProduct from "../../components/NavProduct";
import Image from 'next/image'
import CButton from "../../components/CButton";
import { Row, Col } from "react-bootstrap";
import { BsCheck } from 'react-icons/bs';
import styles from './MyProduct.module.css';

const MyProduct = () => {
  const route = useRouter();

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const dataProduct = [
    {pict: '/images/Mask.png', desc: 'Eugene Accent Table 18.9 inches Espresso', stock: 10, price: 765},
    {pict: '/images/Mask.png', desc: 'Eugene Accent Table 18.9 inches Espresso', stock: 10, price: 765},
    {pict: '/images/Mask.png', desc: 'Eugene Accent Table 18.9 inches Espresso', stock: 10, price: 765}
  ]

  return (
    <Layout>
      <header className="text-center bg-color4 py-5">
        <div className="my-5 container">     
          <h1>My Product</h1>
          <p>See your notifications for the last updates</p>
        </div>
      </header>
      <section className={`container ${styles.contain}`}>
        <div className="my-5">
          <NavProduct/>
        </div>
        <Row className="border-bottom border-top py-3 fw-bold d-none d-lg-flex">
          <Col lg={4}>
            Product
          </Col>
          <Col lg={4}>
            <span className="ms-0 ms-lg-5">Stock Status</span>
          </Col>
          <Col lg={4}>
            <span className="ms-0 ms-lg-5">Price</span>
          </Col>
        </Row>
        {dataProduct.map((data, index) => {
          return (
            <Row key={index} className='my-5'>
              <Col xs={12} sm={6} lg={4} className='d-flex flex-row align-items-center'>
                <Image src={data.pict} alt='product' width={100} height={100} />
                <span className="ps-4">{data.desc}</span>
              </Col>
              <Col xs={12} sm={6} lg={4} className='my-auto'>
                <div className="my-3 my-lg-0 ms-0 ms-lg-5">
                  <span className={styles.pill}><BsCheck/></span> {data.stock} Stock
                </div>
              </Col>
              <Col xs={12} sm={12} lg={4} className='my-auto'>
                <span className="fw-bold ms-0 ms-lg-5">{formatter.format(data.price)}</span>
                <CButton classStyle='px-5 py-2 ms-5' color='danger'>Delete</CButton>
              </Col>
            </Row>
          )
        })}
      </section>
    </Layout>
  )
}

export default MyProduct;
