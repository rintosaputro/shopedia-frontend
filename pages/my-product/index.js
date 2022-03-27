import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import NavProduct from "../../components/NavProduct";
import Image from 'next/image'
import CButton from "../../components/CButton";
import { Row, Col } from "react-bootstrap";
import { BsCheck } from 'react-icons/bs';
import styles from './MyProduct.module.css';
import { getMyProduct } from '../../redux/actions/product'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react";
import pict from '../../public/images/mask.png'

const MyProduct = () => {

  const dispatch = useDispatch()
  const datas = useSelector(state => state.product.myProduct)
  const error = useSelector(state => state.product)
  const route = useRouter()

  const { role } = useSelector(state => state.user.dataUser)

  console.log(error.errMessage)
  useEffect(
    () => {
      dispatch(getMyProduct)
    }, []
  )
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
      {role && role.name === 'seller'
      &&
      <Layout>
        <header className="text-center bg-color4 py-5">
          <div className="my-5 container">
            <h1>My Product</h1>
            <p>See your notifications for the last updates</p>
          </div>
        </header>
        <section className={`container ${styles.contain}`}>
          <div className="my-5">
            <NavProduct />
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
          {datas.map((data, index) => {
            return (
              <Row key={index} className='my-5'>
                <Col xs={12} sm={6} lg={4} className='d-flex flex-row align-items-center'>
                  <Image src={pict} alt='product' width={100} height={100} />
                  <span className="ps-4">{data.desc}</span>
                </Col>
                <Col xs={12} sm={6} lg={4} className='my-auto'>
                  <div className="my-3 my-lg-0 ms-0 ms-lg-5">
                    <span className={styles.pill}><BsCheck /></span> {data.stock} Stock
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
      </Layout>}
    </div>
  )
}

export default MyProduct;
