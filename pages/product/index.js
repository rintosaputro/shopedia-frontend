import React, { useState } from 'react';
import { useEffect } from 'react'
import http from '../../helper/http'
import Head from 'next/head'
import Carousel from '../../components/Carousel'
import { Container, Row, Col, ListGroup, Form, Pagination, Button } from 'react-bootstrap'
// import RangeSlider from 'react-bootstrap-range-slider';
import RangeSlider from '../../components/RangeSlider';
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import Image from 'next/image'
import NumberFormat from 'react-number-format';


const Index = () => {
  const [value, setValue] = useState(25);
  const [product, setProduct] = useState([])
  const [brands, setBrands] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    getProduct(`/products?limit=12`)
    getBrands(`/brands`)
  }, [])

  const getProduct = async (url) => {
    const { data } = await http().get(url)
    console.log(data)
    setProduct(data?.results)
    setPage(data?.pageInfo)
  }

  const getBrands = async (url) => {
    const { data } = await http().get(url)
    console.log(data)
    setBrands(data?.results)
  }

  const getNextData = async (url, replace = false) => {
    try {
      setErrorMsg(null)
      const { data } = await http().get(url)
      if (replace) {
        if (!Array.isArray(data.results)) {
          data.results = [data.results]
        }
        setProduct(data?.results)
      } else {
        setProduct([
          ...data.results
        ])
      }
      setPage(data.pageInfo)
    } catch (e) {
      if (e.message.includes('404')) {
        setErrorMsg('Data not found!')
        setProduct([])
        setPage({
          next: null
        })
      }
    }
  }

  const onSearch = async (event) => {
    event.preventDefault();
    const url = () => `/products?brandId=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}&limit=12`
    let brand = document.querySelector('.form-check-input:checked').value;
    let minPrice = document.querySelector('#min-value').value;
    let maxPrice = document.querySelector('#max-value').value;
    console.log(minPrice, maxPrice)
    await getNextData(url(brand, minPrice, maxPrice), true)
  }

  const onCategories1 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '1'
    await getNextData(url(category), true)
  }
  const onCategories2 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '2'
    await getNextData(url(category), true)
  }
  const onCategories3 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '3'
    await getNextData(url(category), true)
  }
  const onCategories4 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '4'
    await getNextData(url(category), true)
  }
  const onCategories5 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '5'
    await getNextData(url(category), true)
  }
  const onCategories6 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '6'
    await getNextData(url(category), true)
  }
  const onCategories7 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '7'
    await getNextData(url(category), true)
  }
  const onCategories8 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '8'
    await getNextData(url(category), true)
  }
  const onCategories9 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '9'
    await getNextData(url(category), true)
  }
  const onCategories10 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=12`
    const category = '10'
    await getNextData(url(category), true)
  }

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item size="lg" className='mx-1' key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Layout>

      <Head>
        <title>Product | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container className='mb-5'>
        <Carousel />
        <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Product', active: true }]} />

        <Row>
          <Col md={3}>
            <Form onSubmit={onSearch}>
              <ListGroup >
                <h3 className='ms-3'>Categories</h3>
                <ListGroup.Item onClick={onCategories1} id="category" value='1' className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p >Bed</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories2} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Chairs</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories3} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Tables</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories4} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Cabinets</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories5} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Sofas</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories6} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Wardrobes</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories7} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Storages</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories8} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Desks</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories9} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Lamps</p><div>99</div>
                </ListGroup.Item>
                <ListGroup.Item onClick={onCategories10} className='bg-transparent border-0 d-flex justify-content-between' action >
                  <p>Clocks</p><div>99</div>
                </ListGroup.Item>
              </ListGroup>

              <>
                <h3 className='ms-3 my-3'>Price</h3>
                <RangeSlider
                  min={0}
                  max={10000000}
                  onChange={({ min, max }) => (`min = ${min}, max = ${max}`)}
                />
              </>

              <>
                <h3 className='ms-3 my-3'>Brands</h3>
                <div className='d-flex flex-column gap-4 ms-3'>
                  <Form.Check
                    key={'All'}
                    inline
                    label={'All'}
                    name="group1"
                    id='brand'
                    value={""}
                    defaultChecked='true'
                  />
                  {brands?.map((data, idx) => {
                    return (
                      <>
                        <Form.Check
                          key={data.name}
                          inline
                          label={data.name}
                          name="group1"
                          id='brand'
                          value={data.id}
                        />
                      </>
                    )
                  })}

                </div>
                <Button type="submit" className='mt-4 px-4' variant="color2" size="lg" active>
                  &nbsp;Search
                </Button>{' '}
              </>
            </Form>
          </Col>
          <Col md={9}>
            <Row>
              <Col md={9}>
              </Col>
              <Col md={3}>
                <Form.Select className='border-0'>
                  <option>Sort By</option>
                  <option>Latest Product</option>
                  <option>More Expensivet</option>
                  <option>More Cheap</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className='mt-5 mb-5 text-center'>
              {product?.map((data, idx) => {
                return (
                  <>
                    <Col key={String(idx)} md={4} className="mb-4">
                      <Image src="/images/chair2.png" width={360} height={450} alt="chair2" />
                      <div className="text-md-start ms-auto me-auto">
                        <p className='fs-5'>{data.name}</p>
                        <div className='fs-6 fw-bold'>
                          <NumberFormat value={String(data.price)} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'} />
                        </div>
                      </div>
                    </Col>
                  </>
                )
              })}
            </Row>

            <Pagination>{items}</Pagination>
          </Col>
        </Row>
      </Container>
    </Layout >
  )
}
export default Index
