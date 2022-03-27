import React, { useState } from 'react';
import { useEffect } from 'react'
import http from '../../helper/http'
import Head from 'next/head'
import Carousel from '../../components/Carousel'
import { Container, Row, Col, ListGroup, Form, Pagination, Button, Alert } from 'react-bootstrap'
// import RangeSlider from 'react-bootstrap-range-slider';
import RangeSlider from '../../components/RangeSlider';
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import Image from 'next/image'
import NumberFormat from 'react-number-format';
import { useRouter } from 'next/router';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs'



const Index = () => {
  const [value, setValue] = useState(25);
  const [product, setProduct] = useState([])
  const [brands, setBrands] = useState([])
  const [page, setPage] = useState({})
  const [errorMsg, setErrorMsg] = useState(null)

  const route = useRouter()
  console.log(page)
  useEffect(() => {
    getProduct(`/products?limit=9`)
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
    const url = () => `/products?brandId=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${name}&store=${productStore}&limit=9`
    let name = document.getElementById('name').value;
    let productStore = document.getElementById('productStore').value;
    let brand = document.querySelector('.form-check-input:checked').value;
    let minPrice = document.querySelector('#min-value').value;
    let maxPrice = document.querySelector('#max-value').value;
    await getNextData(url(brand, minPrice, maxPrice, name), true)
  }

  const onSort = async (event) => {
    event.preventDefault();
    const url = () => `/products?brandId=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}&search=${name}&sort=${sort}&orderBy=${orderBy}&limit=9`
    let name = document.getElementById('name').value;
    let brand = document.querySelector('.form-check-input:checked').value;
    let minPrice = document.querySelector('#min-value').value;
    let maxPrice = document.querySelector('#max-value').value;
    let check = document.querySelector('.form-select option:checked').value;
    let sort = ""
    let orderBy = ""
    if (check === "cheap") {
      sort = "ASC"
      orderBy = "price"
    } else if (check === "expensive") {
      sort = "DESC"
      orderBy = "price"
    } else if (check == "latest") {
      sort = "DESC"
      orderBy = "id"
    }
    await getNextData(url(brand, minPrice, maxPrice, name, sort, orderBy), true)
  }

  const onCategories1 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '1'
    await getNextData(url(category), true)
  }
  const onCategories2 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '2'
    await getNextData(url(category), true)
  }
  const onCategories3 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '3'
    await getNextData(url(category), true)
  }
  const onCategories4 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '4'
    await getNextData(url(category), true)
  }
  const onCategories5 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '5'
    await getNextData(url(category), true)
  }
  const onCategories6 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '6'
    await getNextData(url(category), true)
  }
  const onCategories7 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '7'
    await getNextData(url(category), true)
  }
  const onCategories8 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '8'
    await getNextData(url(category), true)
  }
  const onCategories9 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '9'
    await getNextData(url(category), true)
  }
  const onCategories10 = async (event) => {
    event.preventDefault();
    const url = () => `/products?categoryId=${category}&limit=9`
    const category = '10'
    await getNextData(url(category), true)
  }

  let active = page.currentPage;
  let items = [];
  for (let number = 1; number <= page.lastPage; number++) {
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
              <Form.Control
                type="text"
                id="name"
                name="name"
                aria-describedby="name"
                className='me-5 py-3 mt-5'
                placeholder='Search Product'
              />
              <Form.Control
                type="text"
                id="productStore"
                name="productStore"
                aria-describedby="productStore"
                className='me-5 py-3 mt-5'
                placeholder='Product By Store'
              />
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
                <Form onSubmit={onSort}>
                  <Form.Select className='border-0' defaultChecked={""}>
                    <option value={""}>Sort By</option>
                    <option value={"latest"}>Latest Product</option>
                    <option value="expensive">More Expensive</option>
                    <option value="cheap">More Cheap</option>
                  </Form.Select>
                  <Button type="submit" className='mt-4 px-4' variant="color2" size="sm" active>
                    &nbsp;Sort
                  </Button>{' '}
                </Form>
              </Col>
            </Row>
            <Row className='mt-5 mb-5 text-center'>
              <div className='d-flex flex-row'>
                {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><BsChevronDoubleLeft size={28} /> </p></button>}
                <Pagination size="lg">{items}</Pagination>
                {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p><BsChevronDoubleRight size={28} /> </p></button>}
              </div>
              {errorMsg &&
                <Alert variant='color3'>{errorMsg}</Alert>
              }
              {product?.map((data, idx) => {
                return (
                  <>
                    <Col style={{ cursor: 'pointer' }} onClick={e => route.push(`/product/${data.id}`)} key={String(idx)} md={4} className="mb-4">
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
            <div className='d-flex flex-row'>
              {page.prev !== null && <button onClick={() => getNextData(page.prev)} className='btn '><p><BsChevronDoubleLeft size={28} /> </p></button>}
              <Pagination size="lg">{items}</Pagination>
              {page.next !== null && <button onClick={() => getNextData(page.next)} className='btn '><p><BsChevronDoubleRight size={28} /> </p></button>}
            </div>
          </Col>
        </Row>
      </Container >
    </Layout >
  )
}
export default Index
