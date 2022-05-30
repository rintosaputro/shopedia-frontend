/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Container, Row, Alert, Col,
} from 'react-bootstrap';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import BreadCrumb from '../../components/BrreadCrumb';
import { getProfile } from '../../redux/actions/user';
import http from '../../helper/http';
import { createStore } from '../../redux/actions/store';

function MyStore() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState({});
  const data = useSelector((state) => state.user?.dataUser);
  const dispatch = useDispatch();
  const route = useRouter();

  const getMyProduct = async (url) => {
    const token = window.localStorage.getItem('token');
    const { myProduct } = await http(token).get(url);
    setProduct(myProduct?.results);
    setPage(myProduct?.pageInfo);
  };

  useEffect(() => {
    dispatch(getProfile);
  }, []);
  useEffect(() => {
    getMyProduct('stores/my-store?limit=12');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    dispatch(createStore(name, description));
  };
  return (
    <Layout>

      <Head>
        <title>My Store | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-color4 py-5">
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'My Store', active: true }]} />
        </Container>
        <h1 className="text-center pt-4">{data.store?.name}</h1>
        <div className="text-center pb-5">{data.store?.description}</div>
      </div>
      <Container className="my-5">
        <Row className="mt-5 mb-5 text-center">
          {errorMsg
            && <Alert variant="color3">{errorMsg}</Alert>}
          {product?.map((data, idx) => (
            <Col style={{ cursor: 'pointer' }} onClick={(e) => route.push(`/product/${data.id}`)} key={String(idx)} md={4} className="mb-4">
              <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
              <div className="text-md-start ms-auto me-auto">
                <p className="fs-5">{data.name}</p>
                <div className="fs-6 fw-bold">
                  <NumberFormat value={String(data.price)} prefix="Rp. " mask="." thousandSeparator displayType="text" />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
}
export default MyStore;
