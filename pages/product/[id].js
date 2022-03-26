import { useEffect, useState } from 'react'
import { Col, Nav, Row, Tabs, Tab, Alert } from "react-bootstrap";
import Layout from "../../components/Layout";
import { GrFormNext } from 'react-icons/gr'
import Image from "next/image";
import styles from './productDetail.module.scss';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import priceFormat from "../../helper/priceFormat";
import { GrDeliver } from 'react-icons/gr';
import { CgRuler } from 'react-icons/cg';
import { BiMap } from 'react-icons/bi';
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';
import CButton from '../../components/CButton';
import BreadCrumb from '../../components/BrreadCrumb'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../redux/actions/product';
import capitalFirst from '../../helper/capitalFirst';
import http from '../../helper/http';
import { addCart } from '../../redux/actions/cart';

const ProductDetail = () => {
  const [key, setKey] = useState('home');
  const [count, setCount] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [whislist, setWhislist] = useState(false);
  const [errWhislist, setErrWhislist] = useState(false);
  const [reviewMessage, setReviewMessage] = useState('')
  const [delWishlist, setDelWhislist] = useState(false);
  

  const route = useRouter();
  const dispatch = useDispatch();

  const { product, user } = useSelector(state => state)
  const {id, name, price, description, product_images, product_reviews, stock } = product.productDetail;

  useEffect(() => {
    dispatch(getProductDetail(route.query.id))
  }, [dispatch, route.query.id])

  const imgClick = (e, currentImg) => {
    e.preventDefault();
    const bigImg = document.getElementById('mainImg')
    bigImg.innerHTML = `<Image src=${currentImg} quality={100} layout="intrinsic" alt='product' width={680} height={680} />`
    // bigImg.innerHTML = `<div style={{backgroundImage: ${`url(${currentImg})`}}} className=${styles.relatedBg} ></div>`
  }
  const countInc = (e) => {
    e.preventDefault();
    if (count < stock) {
      setCount(count + 1);
    }
  }
  const countDec = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount(count -1)
    }
  }
  let imageProduct = {}
  if (product_images) {
    imageProduct = product_images[0]
  }
  let idUser;
  if (user.id) {

  }
  const dataCart = {
    id,
    userId: user.dataUser.id,
    product: {id, name, price, stock},
    product_images: imageProduct,
  }
  const addtoCart = (e) => {
    e.preventDefault();
    const parsed = JSON.stringify(dataCart);
    const cartStorage = JSON.parse(window.localStorage.getItem("cart"))
    // window.localStorage.setItem('cart', [JSON.stringify(dataCart), parsed])
    // dispatch(addCart);
    const data = {data: dataCart, qty: 1}
    const resData = [...cartStorage, data]
    window.localStorage.setItem("cart", JSON.stringify(resData))
    console.log([...cartStorage, data]);
  }

  const addWhislist = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setErrWhislist(false)
    const token = window.localStorage.getItem('token');
    const param = new URLSearchParams();
    param.append('productId', Number(route.query.id))
    await http(token).post('/users/favorite-product', param)
    .then(res => {
      if (res.status < 400) {
        setWhislist(res.data.results)
        console.log(res.data.results)
      }
    }) 
    .catch(err => {
      setWhislist(false)
      setErrWhislist(true)
    })
    setIsLoading(true)
  }
  const deleteWihslist = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    setErrWhislist(false)
    const token = window.localStorage.getItem('token');
    await http(token).delete(`/users/favorite-product/${whislist.id}`)
    .then(res => {
      if (res.status < 400) {
        setWhislist(false)
        console.log(res.data.results)
      }
    }) 
    .catch(err => {
      setWhislist(false)
      setErrWhislist(true)
    })
    setIsLoading(true)
  }
  const addReview = async (e) => {
    e.preventDefault();
    setReviewMessage('')
    setIsLoading(true)
    const token = window.localStorage.getItem('token')
    const comment = document.getElementById('comment').value
    const name = document.getElementById('comment').value
    const email = document.getElementById('comment').value
    if (comment && name && email) {
      const param = new URLSearchParams();
      param.append('userId', user.dataUser.id)
      param.append('productId', Number(route.query.id))
      param.append('comment', comment)
      await http(token).post('/products/review', param)
      dispatch(getProductDetail(route.query.id))
    } else {
      setReviewMessage('Please fill the form')
    }
  }

  const relatedProducts = [
    {pict: '/images/product1.png', name: 'Coaster 506222-CO Loveseat', price: 765.99},
    {pict: '/images/product2.png', name: 'Coaster 506222-CO Loveseat', price: 765.99},
    {pict: '/images/product2.png', name: 'Coaster 506222-CO Loveseat', price: 765.99}
  ]
  return (
    <Layout>
      <header className="container">
        <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Product', href: '/product' }, { name: `${route.query.id}`, active: true }]} />
        <Row className={`my-5 ${styles.sideRow}`}>
          <Col lg={3} className='p-lg-5'>
            <aside className="h-100">
              <div className={`d-flex justify-content-center h-100 ${styles.asideImg}`}>
                {product_images && product_images.map((data, index) => {
                  return (
                    <div  key={index} style={{cursor: 'pointer'}} onClick={e => imgClick(e, data.image)}>
                      <Image src={data.image} alt={data.alt} width={120} height={120} />
                    </div>
                  )
                })}
              </div>
            </aside>
          </Col>
          <Col lg={9}>
            <div className="text-end">
              <div className="rounded-pill bg-color2 d-inline-block p-3 text-color4">
                Hot
              </div>
            </div>
            <div id="mainImg" className="d-flex justify-content-center align-items-center h-100 overflow-hidden">
              {product_images && <Image src={product_images[0].image} quality={100} layout="intrinsic" alt='product' width={680} height={680} />}
            </div>
          </Col>
        </Row>
      </header>
      <main className="container mb-5">
        <div className="fs-2">{name && capitalFirst(name)}</div>
        <div className="mt-5 mb-3">
          {(product_reviews && product_reviews.length > 0) && ([...Array(5)].map((data, index) => <AiFillStar key={index}/> ))}
          <span>{product_reviews && product_reviews.length} (reviews)</span>
        </div>
        <Row className="mb-5">
          <Col xs={6}>
            <div className="fw-bold h2">{priceFormat.format(price)}</div>
          </Col>
          <Col xs={6}>
            <div className={`${styles.pill} d-inline pe-2`}>
              <BsCheck className="border border-dark rounded-pill" />
            </div>
              {stock} In Stock
          </Col>
        </Row>
        <p>
          {description}
        </p>
        <div className='my-5'>
          <div className="border border-dark d-inline py-2 rounded me-3">
            <button onClick={countDec} className="btn">-</button>
            <span>{count}</span>
            <button onClick={countInc} className="btn">+</button>
          </div>
          <button onClick={addtoCart} className="btn btn-dark">Add to Cart</button>
          {/* <button className="btn btn-dark ms-3"><AiOutlineHeart /></button> */}
          {whislist 
          ? <button onClick={deleteWihslist} className="btn btn-outline-danger ms-3">Delete from Whislist</button>
          : <button onClick={addWhislist} className="btn btn-outline-dark ms-3">Add to Whislist</button>
          }
          {errWhislist && <span className='ms-3 text-danger'>Product already in whislist</span>}
        </div>
        <div>
          <div>SKU: N/A</div>
          <div>Categories: </div>
          <div>Tag</div>
          <div>Product ID:</div>
        </div>
        <div className='my-5'>
          <span><GrDeliver /> Delivery and return</span>
          <span className="mx-5"><CgRuler/> Size Guide</span>
          <span><BiMap/> Store Available</span>
        </div>
        <div className="mb-5">
          <div className="border d-inline px-2 py-1 border-dark  rounded-pill me-3">
            <FaFacebookF />
          </div>
          <div className="border d-inline px-2 py-1 border-dark  rounded-pill me-3">
            <FaTwitter/>
          </div>
          <div className="border d-inline px-2 py-1 border-dark  rounded-pill me-3">
            <FaYoutube/>
          </div>         
        </div>
        
        <nav>
          <style jsx>
            {`
            .nav-product-details .nav-link.active, .nav-product-details .nav-item.show .nav-link {
              border-color: white !important;
            }
            .nav-product-details .nav-link.active {
              border-bottom: 2px solid black !important;
              color: black;
            }
            .nav-product-details.nav-tabs {
              border-bottom: none !important;
            }
            `}
          </style>
          <div className={`nav nav-tabs ${styles.navBottom} nav-product-details d-flex justify-content-between`} id="nav-tab" role="tablist">
            <button className="nav-link fs-4 text-muted active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button>
            <button className="nav-link fs-4 text-muted" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Review</button>
            <button className="nav-link fs-4 text-muted" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Aditional Information</button>
            <button className="nav-link fs-4 text-muted" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">About Brands</button>
            <button className="nav-link fs-4 text-muted" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"> Shipping & Delivery</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
            <Row className='align-items-center'>
              <Col xs={12} lg={5}>
                {product_images && <Image src={product_images[0].image} quality={100} layout="intrinsic" alt='product' width={680} height={680} />}
              </Col>
              <Col xs={12} lg={7}>
                <div>
                  <p className='text-muted'>{description}</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tab-pane mt-5 px-lg-5 fade text-dark" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
            <div className='px-lg-5 my-5 py-4'>
              {product_reviews && product_reviews.map((data) => {
                return (
                  <div key={data.id} className='pt-5'>
                    <div className='d-flex flex-row'>
                      <div style={{backgroundImage: `url(${'/images/defaultpp.jpg'})`}} className={styles.photoReview}></div>
                      <div className={`${styles.commentReview} ms-4`}>
                        <div>“{data.comment}”</div>
                        <div className='text-muted mt-3'>
                          35 mins ago, 28 March 2022
                          <button className='fw-bold btn ms-3'>Reply</button>
                        </div>
                      </div>
                    </div>
                    <hr className='mt-5'/>
                  </div>
                )
              })
              }
            </div>
            <div className='px-lg-5 mt-4'>
              <h3>Leave A Comment</h3>
              <p>Your email address will not be published. Required fields are marked *</p>
              <form>
                <Row>
                  <Col xs={12} lg={4}>
                    <input className='py-2 w-100 px-2' type='text' id='nameRev' placeholder='Name *' />
                  </Col>
                  <Col xs={12} lg={4}>
                    <input className='py-2 w-100 px-2' type='text' id='emailRev' placeholder='Email *' />
                  </Col>
                  <Col xs={12} lg={4}>
                    <input className='py-2 w-100 px-2' type='text' id='websiteRev' placeholder='Website' />
                  </Col>
                  <Col xs={12}>
                    <textarea className={`w-100 mt-3 p-2 ${styles.comment}`} id='comment' placeholder='Your Comment' ></textarea>
                  </Col>
                </Row>
                {reviewMessage && <Alert variant='color2' className='text-danger'>{reviewMessage}</Alert>}
                <CButton onClick={addReview} classStyle='px-5 mt-3' color='dark'>Send</CButton>
              </form>
            </div>
          </div>
          <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">33</div>
        </div>

        <div className='d-none d-lg-block'>
          <div className='fs-3 text-center my-5'>Related Products</div>
          <Row>
            {relatedProducts.map((data, index) => {
              return <Col key={index} lg={4}>
                <div style={{backgroundImage: `url(${data.pict})`}} className={`${styles.relatedBg}`} ></div>
                <div className='fs-5 my-4'>{data.name}</div>
                <div className='fw-bold'>{priceFormat.format(data.price)}</div>
              </Col>
            })}
          </Row>
        </div>
      
      </main>
    </Layout>
  )
}

export default ProductDetail;
