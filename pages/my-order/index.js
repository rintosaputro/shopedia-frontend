/* eslint-disable no-unused-vars */
import Image from 'next/image';
import { Row, Col, Button } from 'react-bootstrap';
import { BsCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ReactStars from 'react-rating-stars-component';
import { getListOrder, filterListOrder } from '../../redux/actions/order';
import styles from './MyOrder.module.css';
import NavProduct from '../../components/NavProduct';
import Layout from '../../components/Layout';
import { postRating } from '../../redux/actions/rating';
import CButton from '../../components/CButton';

function MyOrder() {
  const [rating, setRating] = useState(null);
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const [dataOrder, setDataOrder] = useState({});
  const route = useRouter();
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state);

  useEffect(() => {
    if (order.listOrder.length === 0) {
      dispatch(getListOrder(1));
    }
  }, []);

  useEffect(() => {
    if (order.listOrder.length > 0) {
      setDataOrder({ ...order });
    }
  }, [order]);

  const handleRating = (id) => {
    const ratings = rating;
    dispatch(postRating(id, ratings));
  };
  useEffect(() => {
    if (route.query.status) {
      dispatch(filterListOrder(1, route.query.status));
    } else {
      dispatch(getListOrder(1));
    }
  }, [route.query.status]);

  const nextPage = (e) => {
    e.preventDefault();
    if (order.pageInfo.next) {
      dispatch(getListOrder(order.pageInfo.currentPage + 1));
    }
  };

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
        {order.listOrder && order.listOrder.map((data, index) => (
          <>
            <Row key={index} className="my-5">
              <Col lg={4}>
                <div className="d-flex flex-row align-items-center">
                  {data.product.product_images.length > 0 && <Image src={data.product.product_images[0].image} width={100} height={100} alt="Product picture" />}
                  <span className="ms-5">{data.product.name}</span>
                </div>
              </Col>
              <Col xs={6} lg={2} className="my-auto mt-4 mt-lg-auto">
                <div>
                  <span className="text-muted d-inline d-lg-none">Price: </span>
                  <span className="fw-bold">{formatter.format(Number(data.product.price))}</span>
                </div>
              </Col>
              <Col xs={6} lg={2} className="my-auto mt-4 mt-lg-auto">
                <span className="text-muted d-inline d-lg-none">Qty: </span>
                <span>{data.qty < 10 ? `0${data.qty}` : data.qty}</span>
              </Col>
              <Col xs={6} lg={2} className="my-auto mt-4 mt-lg-auto">
                <div>
                  <span className="text-muted d-inline d-lg-none">Status order: </span>
                  <span className={styles.pill}><BsCheck /></span>
                  {' '}
                  {data.orderStatus.name}
                </div>
              </Col>
              <Col xs={6} lg={2} className="my-auto mt-4 mt-lg-auto">
                <span className="text-muted d-inline d-lg-none">Total: </span>
                <span className="fw-bold">{formatter.format(data.total)}</span>
              </Col>
            </Row>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              id="rating"
              size={24}
              isHalf
              emptyIcon={<i className="far fa-star" />}
              halfIcon={<i className="fa fa-star-half-alt" />}
              fullIcon={<i className="fa fa-star" />}
              activeColor="#ffd700"
            />
            <CButton className="bg-color2" onClick={() => handleRating(data.id)} style={{ cursor: 'pointer' }} type="submit">Save</CButton>
          </>
        ))}
        {order.pageInfo.next
          && (
          <div className="mx-auto text-center">
            <Button onClick={nextPage} className="mt-4 px-5" variant="color2" size="lg" active>
              Next
            </Button>
          </div>
          )}
        <hr className="mb-5" />
      </section>
    </Layout>
  );
}

export default MyOrder;
