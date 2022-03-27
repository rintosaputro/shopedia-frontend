import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import NavProduct from '../../components/NavProduct'
import photo from '../../images/photo.png'
import add from '../../images/add.png'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from './Selling.module.css'
import noImg from '../../images/noImg.jpg'
import http from '../../helper/http'
import { Alert, Spinner } from 'react-bootstrap'
import { useRouter } from 'next/router'

const Index = () => {
  const [brand, setBrand] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const route = useRouter();

  const { user } = useSelector(state => state);

  const [img, setImg] = useState();

  const getBrand = async () => {
    const { data } = await http().get('/brands')
    setBrand([...data.results])
  }
  const getCategory = async () => {
    const { data } = await http().get('/categories')
    setCategories(data.results)
  }

  useEffect(() => {
    getBrand();
    getCategory();
  }, [])
  
  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
    }
  }

  const sellProduct = async (e) => {
    e.preventDefault();
    setLoading(true)
    setErr(false);
    const goods = document.getElementById('goods').value
    const description = document.getElementById('description').value
    const price = document.getElementById('price').value
    const stock = document.getElementById('stock').value
    const condition = document.querySelector('.stockRadio .form-check-input:checked');
    const brand = document.querySelector('.brandRadio .form-check-input:checked');
    const category = document.querySelector('.categoriesRadio .form-check-input:checked');
    const file = document.getElementById('fileImg').files[0]
    let resCondition;
    let resBrand;
    let resCategory;
    if (condition && category) {
      resCondition = condition.value
      resCategory = category.value
    }
    if (brand) {
      resBrand = brand.value;
    }

    const param = new URLSearchParams();
    param.append('name', goods)
    param.append('description', description)
    param.append('price', price)
    param.append('stock', stock)
    param.append('condition', resCondition)
    param.append('brandId', resBrand)
    param.append('categoryId', resCategory)

    const token = window.localStorage.getItem('token')

    if (file) {
      await http(token).post('/products', param)
      .then(async (res) => {
        if (res.status < 400) {
          console.log('res', res)
          const files = new FormData();
          files.append('image', file)
          files.append('productId', res.data.results.id)
          await http(token).post('/products/image', files)
          .then(res => {
            console.log('image', res.data.results)
          })
          .catch(err => {
            console.log('image', err.response.data.message)
          })
          setMessage(res.data.results.message)
          setSuccess(true)
          setLoading(false);
          route.push('/my-product')
        }
      }).catch(err => {
        setLoading(false);
        setErr(true);
        console.log(err.response.data.message)
        setMessage(err.response.data.message)
      })
    } else {
      setErr(true);
      setMessage('Please add your image products')
    }
    setLoading(false)
  }

  return (
    <>
    {user.dataUser.role && user.dataUser.role.name === 'seller' &&  
    <Layout>
    <style jsx>
      {`
      .inputImg {
        height: 162px;
        z-index: 2;
        opacity: 0;
        top: 58px;
      }
      .bgInputImg {
        z-index: 1;
      }
      `}
    </style>
      <Head>
        <title>Selling Product | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Profile', active: true }]} />
        </Container>
        <h1 className={'text-center pt-4'}>Selling Product</h1>
        <div className={'text-center pb-5'}>See your notifications for the latest updates</div>
      </div>
      <Container className='mb-5'>
        <NavProduct />
        <Row>
          <Col xs={12} md={3}>
          </Col>
          <Col xs={12} md={6}>
            <h4>Inventory</h4>
            <Input
              type="text"
              id="goods"
              name="goods"
              aria-describedby="goods"
              className='me-5 py-3 mt-5'
              placeholder='Name of goods *'
            />
            <Input
              type="text"
              id="description"
              as="textarea"
              name="description"
              aria-describedby="description"
              className='me-5 py-3 mt-5'
              placeholder='Description Product *'
            />
            <h4 className='mt-5'>Item Details</h4>
            <Input
              type="number"
              id="price"
              name="price"
              aria-describedby="price"
              className='me-5 py-3 mt-5'
              placeholder='Unit price *'
            />
            <Input
              type="number"
              id="stock"
              name="stock"
              aria-describedby="stock"
              className='me-5 py-3 mt-5'
              placeholder='Unit Stock *'
            />
            <Row className='mt-3'>
              <div className='my-4'>Stock Condition</div>
              <Col>
                <Form.Check
                  inline
                  label="New Product"
                  name="group1"
                  className='stockRadio'
                  value='New'
                />
              </Col>
              <Col>
                <Form.Check
                  inline
                  label="Second Product"
                  name="group1"
                  className='stockRadio'
                  value='Second'
                />
              </Col>
            </Row>
            <Row className='mt-5 g-1'>
              <div className='mb-3'>Brands</div>
              {brand.map((data, index) => {
                return <Col key={data.name} xs={6} lg={4}>
                  <Form.Check
                  inline
                  label={data.name}
                  name="group1"
                  className='brandRadio'
                  value={data.id}
                />
                </Col>
              })}
            </Row>
            <Row className='mt-5 g-1'>
              <div className='mb-3'>Categories</div>
              {categories.map((data, index) => {
                return <Col key={data.name} xs={6} lg={4}>
                  <Form.Check
                  inline
                  label={data.name}
                  name="group1"
                  className='categoriesRadio'
                  value={data.id}
                />
                </Col>
              })}
            </Row>
            <h4 className='mt-5'>Photo of Goods</h4>
            <Row className='my-5'>
              <Col xs={12} md={4}>
                <div height={30} className="my-3">
                  <Image
                    src={img || noImg}
                    width="500px"
                    height="500px"
                    className="img-thumbnail"
                    alt="..." 
                  />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div height={30} className="my-3 position-relative">
                  <form className=''>
                    <input id='fileImg' onChange={imageChange} className='position-absolute inputImg' type='file' height='10em' />
                  </form>
                  <div className='bgInputImg position-absolute'>
                  <Image
                    src={add}
                    width="500px"
                    height="500px"
                    className="img-thumbnail"
                    alt="..."
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={4}>

              </Col>
            </Row>
            {err && <Alert variant='color1' className='text-danger text-center mt-5'>{message}</Alert>}
            {success && <Alert variant='color1' className='text-center mt-5'>Successfully added new product!</Alert>}
            <Button onClick={sellProduct} className={`mt-4 px-4 ${styles.btnSell}`} variant="color2" size="lg" active>
              {loading ? <Spinner animation="border" /> : 'Sell Product'}
            </Button>
            {' '}
          </Col>
          <Col xs={12} md={3}>

          </Col>
        </Row>
      </Container>
    </Layout >}
    </>
  )
}
export default Index
