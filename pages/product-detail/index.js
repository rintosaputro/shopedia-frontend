import { Col, Nav, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import { GrFormNext } from 'react-icons/gr'
import Image from "next/image";
import styles from './productDetail.module.css';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import priceFormat from "../../helper/priceFormat";
import { GrDeliver } from 'react-icons/gr';
import { CgRuler } from 'react-icons/cg';
import { BiMap } from 'react-icons/bi';
import { FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';

const ProductDetail = () => {

  const imgClick = (e, currentImg) => {
    e.preventDefault();
    const bigImg = document.getElementById('mainImg')
    bigImg.innerHTML = `<Image src=${currentImg} quality={100} layout="intrinsic" alt='product' width={680} height={680} />`
  }

  const imagesData = [
    {pict: '/images/product1.png', alt: 'product 1'},
    {pict: '/images/product2.png', alt: 'product 2'},
    {pict: '/images/product1.png', alt: 'product 1'},
    {pict: '/images/product2.png', alt: 'product 2'},
    {pict: '/images/product1.png', alt: 'product 1'}
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
              <div className="d-flex justify-content-between flex-column h-100">
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
            <div id="mainImg" className="d-flex justify-content-center align-items-center h-100 overflow-hidden position-relative">
              <Image src='/images/product1.png' quality={100} layout="intrinsic" alt='product' width={680} height={680} />
            </div>
          </Col>
        </Row>
      </header>
      <main className="container">
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
      </main>
    </Layout>
  )
}

export default ProductDetail;
