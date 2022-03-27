import Image from "next/image";
import { Row, Col, Button } from "react-bootstrap";
import Layout from "../../components/Layout"
import NavProduct from "../../components/NavProduct";
import { BsCheck } from 'react-icons/bs';
import styles from './MyOrder.module.css';
import { getListOrder,filterListOrder } from "../../redux/actions/order";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyOrder = () => {
  const [dataOrder, setDataOrder] = useState({})
  const [filterOrder, setFilterOrder] = useState()
  const route = useRouter();
  const dispatch = useDispatch();

  const { order } = useSelector(state => state)

  useEffect(() => {
    if (order.listOrder.length === 0) {
      dispatch(getListOrder(1))
    }
  }, [])

  useEffect(() => {
    if (order.listOrder.length > 0) {
      setDataOrder({...order})
    }
  }, [order])

  useEffect(() => {
    if (route.query.status) {
      dispatch(filterListOrder(1,route.query.status))
    }else{
      dispatch(getListOrder(1))
    }
  }, [route.query.status])

  // useEffect(() => {
  //   const dataQuery = ['Processed', 'sent', 'Completed', 'Cancelled']
  //     for (let i = 0; i < dataQuery.length; i ++) {
  //       if (route.query.status === dataQuery[i]) {
  //         const filt = dataOrder.listOrder.orderStatus.filter(data => data.orderStatus.name === dataQuery[i])
  //         setFilterOrder(filt)
  //         console.log('test', dataQuery[i])
  //       }
  //     }
  // }, [])

  const nextPage = (e) => {
    e.preventDefault();
    if (order.pageInfo.next) {
      dispatch(getListOrder(order.pageInfo.currentPage + 1))
    }
    console.log('tes', dataOrder)
  }

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
        {order.listOrder && order.listOrder.map((data, index) => {
          return (
            <Row key={index} className='my-5'>
              <Col lg={4}>
                <div className='d-flex flex-row align-items-center'>
                  {data.product.product_images.length > 0 && <Image src={data.product.product_images[0].image} width={100} height={100} alt='Product picture' />}
                  <span className="ms-5">{data.product.name}</span>
                </div>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <div>
                  <span className="text-muted d-inline d-lg-none">Price: </span>
                  <span className="fw-bold">{formatter.format(Number(data.product.price))}</span>
                </div>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <span className="text-muted d-inline d-lg-none">Qty: </span>
                <span>{data.qty < 10 ? '0' + data.qty : data.qty}</span>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <div>
                  <span className="text-muted d-inline d-lg-none">Status order: </span>
                  <span className={styles.pill}><BsCheck/></span> {data.orderStatus.name}
                </div>
              </Col>
              <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto'>
                <span className="text-muted d-inline d-lg-none">Total: </span>
                <span className="fw-bold">{formatter.format(data.total)}</span>
              </Col>
            </Row>
          )
        })}
        {order.pageInfo.next && 
          <div className="mx-auto text-center">
            <Button onClick={nextPage} className='mt-4 px-5' variant="color2" size="lg" active>
              Next
            </Button>
          </div>
        }
        <hr className="mb-5"/>
      </section>
    </Layout>
  )
}

export default MyOrder;
