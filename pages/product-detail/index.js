import { useState } from 'react'
import { Col, Nav, Row, Tabs, Tab } from "react-bootstrap";
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

const ProductDetail = () => {
  const [key, setKey] = useState('home');
  const imgClick = (e, currentImg) => {
    e.preventDefault();
    const bigImg = document.getElementById('mainImg')
    bigImg.innerHTML = `<Image src=${currentImg} quality={100} layout="intrinsic" alt='product' width={680} height={680} />`
    // bigImg.innerHTML = `<div style={{backgroundImage: ${`url(${currentImg})`}}} className=${styles.relatedBg} ></div>`
  }

  const imagesData = [
    {pict: '/images/product1.png', alt: 'product 1'},
    {pict: '/images/product2.png', alt: 'product 2'},
    {pict: '/images/product1.png', alt: 'product 1'},
    {pict: '/images/product2.png', alt: 'product 2'},
    {pict: '/images/product1.png', alt: 'product 1'}
  ]
  const relatedProducts = [
    {pict: '/images/product1.png', name: 'Coaster 506222-CO Loveseat', price: 765.99},
    {pict: '/images/product2.png', name: 'Coaster 506222-CO Loveseat', price: 765.99},
    {pict: '/images/product2.png', name: 'Coaster 506222-CO Loveseat', price: 765.99}
  ]
  return (
    <Layout>
      <header className="container">
        <Nav>
          <Nav.Item>
            <Nav.Link className="text-color1" href="/shop">Shop <GrFormNext/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-color1">Shop Right Sidebar <GrFormNext/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-color1">Product</Nav.Link>
          </Nav.Item>
        </Nav>
        <Row className={`my-5 ${styles.sideRow}`}>
          <Col lg={3} className='p-lg-5'>
            <aside className="h-100">
              <div className={`d-flex justify-content-between h-100 ${styles.asideImg}`}>
                {imagesData.map((data, index) => {
                  return (
                    <div  key={index} style={{cursor: 'pointer'}} onClick={e => imgClick(e, data.pict)}>
                      <Image src={data.pict} alt={data.alt} width={120} height={120} />
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
              <Image src='/images/product1.png' quality={100} layout="intrinsic" alt='product' width={680} height={680} />
            </div>
          </Col>
        </Row>
      </header>
      <main className="container mb-5">
        <div className="fs-2">Coaster Home Furnishings Sofa in Oatmeal</div>
        <div className="mt-5 mb-3">
          {[...Array(5)].map((data, index) => <AiFillStar key={index}/> )}
          <span>2 (reviews)</span>
        </div>
        <Row className="mb-5">
          <Col xs={6}>
            <div className="fw-bold h2">{priceFormat.format(765)}</div>
          </Col>
          <Col xs={6}>
            <div className={`${styles.pill} d-inline pe-2`}>
              <BsCheck className="border border-dark rounded-pill" />
            </div>
            19 Sold / 40 In Stock
          </Col>
        </Row>
        <p>
          Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. 
          Curabitur blandit ultrices exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit. Proin dui lacus, viverra at imperdiet non, 
          facilisis eget orci. Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam eu, pretium finibus libero. Class aptent taciti sociosqu 
          ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam vitae neque tellus.
        </p>
        <div className='my-5'>
          <div className="border border-dark d-inline py-2 rounded me-3">
            <button className="btn">-</button>
            <span>0</span>
            <button className="btn">-</button>
          </div>
          <button className="btn btn-dark">Add to Cart</button>
          <button className="btn btn-dark mx-3"><AiOutlineHeart /></button>
          <button className="btn btn-outline-dark">Add to Whislist</button>
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
                <Image src='/images/product1.png' quality={100} layout="intrinsic" alt='product' width={680} height={680} />
              </Col>
              <Col xs={12} lg={7}>
                <div>
                  <p className='text-muted'>Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..</p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="tab-pane mt-5 fade text-dark" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
            <h3>Leave A Comment</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
            <form>
              <Row>
                <Col xs={12} lg={4}>
                  <input className='py-2 w-100 px-2' type='text' placeholder='Name *' />
                </Col>
                <Col xs={12} lg={4}>
                  <input className='py-2 w-100 px-2' type='text' placeholder='Email *' />
                </Col>
                <Col xs={12} lg={4}>
                  <input className='py-2 w-100 px-2' type='text' placeholder='Website' />
                </Col>
                <Col xs={12}>
                  <textarea className={`w-100 mt-3 p-2 ${styles.comment}`} placeholder='Your Comment' ></textarea>
                </Col>
              </Row>
              <CButton classStyle='px-5 mt-3' color='dark'>Send</CButton>
            </form>
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
