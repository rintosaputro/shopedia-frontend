/* eslint-disable eqeqeq */
import Head from 'next/head';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import Image from 'next/image';
import { BsCheck } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import Layout from '../../components/Layout';
import BreadCrumb from '../../components/BrreadCrumb';
import styles from './wishlist.module.css';
import CButton from '../../components/CButton';
import { getWishLlists } from '../../redux/actions/wishlist';
import { addCart } from '../../redux/actions/cart';

function Index() {
  const { wishlists } = useSelector((state) => state);
  const [cartUser, setCartUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishLlists);
  }, []);

  const handleAddtoCart = (dataCart) => {
    if (cartUser.length > 0) {
      const getDataCart = cartUser.filter((item) => item.data.id == dataCart.product.id);
      if (getDataCart.length == 0) {
        cartUser.push({ data: dataCart.product, product_image: dataCart.product_image, qty: 1 });
        setCartUser(cartUser);
        const parsed = JSON.stringify(cartUser);
        window.localStorage.setItem('cart', parsed);
        dispatch(addCart);
      }
    } else {
      cartUser.push({ data: dataCart.product, product_image: dataCart.product_image, qty: 1 });
      setCartUser(cartUser);
      const parsed = JSON.stringify(cartUser);
      window.localStorage.setItem('cart', parsed);
      dispatch(addCart);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Wishlist | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-color4 py-5">
        <Container>
          <BreadCrumb data={[{ name: 'Profile', href: '/profile' }, { name: 'Wishlist', active: true }]} />
        </Container>
        <h1 className="text-center pt-5">Wishlist</h1>
        <div className="text-center pb-5">Pay and get your ordered items</div>
      </div>
      <Container className="mt-5">
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
        <Row className="pb-5 pt-2">
          <Col xs={12} md={12}>
            {
              wishlists.listWishlist && wishlists.listWishlist.map((item) => (
                <Row key={item.id} className="my-5">
                  <Col xs={12} sm={6} lg={4} className="d-flex flex-row align-items-center">
                    {item.product_image && <Image src={item.product_image.image} alt="product" width={100} height={100} />}
                    <span className="ps-4">{item.product.name}</span>
                  </Col>
                  <Col xs={12} sm={6} lg={4} className="my-auto">
                    <div className="my-3 my-lg-0 ms-0 ms-lg-5">
                      <span className={styles.pill}><BsCheck /></span>
                      {' '}
                      {item.product.stock > 0 ? 'in stock' : 'out of stock'}
                    </div>
                  </Col>
                  <Col xs={12} sm={12} lg={4} className="my-auto">
                    <span className="fw-bold ms-0 ms-lg-5"><NumberFormat value={String(item.product.price)} prefix="Rp. " mask="." thousandSeparator displayType="text" /></span>
                    <CButton classStyle="px-5 py-2 ms-5" color="dark" disabled={item.product.stock === 0 && true} onClick={() => handleAddtoCart(item)}>Add To Cart</CButton>
                  </Col>
                </Row>
              ))
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
export default Index;
