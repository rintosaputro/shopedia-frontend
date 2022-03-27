import Layout from "../../components/Layout"
import Head from 'next/head'
import HeaderPage from "../../components/HeaderPage"
import { useState,useEffect } from "react"
import { Row,Col,Table, Container,Form } from "react-bootstrap"
import Image from "next/image"
import CButton from "../../components/CButton"
import CInput from "../../components/CInput"
import cartStyle from "./cart.module.scss"
import {FaTrashAlt} from "react-icons/fa"
import { addCart } from "../../redux/actions/cart"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { getListShipping } from "../../redux/actions/shipping"
import withAuth from "../../helper/withAuth"

const Cart = ()=>{
  const {cart,shipping} = useSelector(state=>state)
  const [titleTable,setTitleTable] = useState([])
  const dispatch = useDispatch() 
  const [statusCounter,setStatusCounter] = useState(false)
  const [subtotal,setSubtotal] =  useState(0)
  const route = useRouter()
  const [isEmpty,setIsEmpty] = useState(false)
  const [dataShipping,setDataShipping] = useState({})

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(()=>{
    setTitleTable(["Products","Price","Quantity","Total"])
    dispatch(addCart)
    dispatch(getListShipping)
    handleSubtotal()
  },[])

  useEffect(()=>{
    if(!statusCounter){
      handleSubtotal()
    }
  },[statusCounter])


  const countIncrement = (index) =>{
    console.log("masuk@@")
    cart.listCart[index].qty++;
    const parsed = JSON.stringify(cart.listCart);
    window.localStorage.setItem("cart",parsed)
    dispatch(addCart)
    setStatusCounter(true)
  }

  const countDecrement = (index) =>{
    if(cart.listCart[index].qty>0){
      cart.listCart[index].qty--;
    }
    const parsed = JSON.stringify(cart.listCart);
    window.localStorage.setItem("cart",parsed)
    dispatch(addCart)
    setStatusCounter(true)
  }

  const handleSubtotal = () =>{
    if(!statusCounter){
        const subtotal = cart.listCart.map((item)=>{
          var result = 0
          result +=(item.qty * item.data.price) 
          return result
      })

      setSubtotal(subtotal.reduce(function (total, num) {
        return total+num
        }, 0))
    } 
  }

  const handleDelete = (index)=>{
    var getListcart = cart.listCart.filter((item,indexCart)=>indexCart!==index);
    cart.listCart = getListcart
    const parsed = JSON.stringify(cart.listCart);
    window.localStorage.setItem("cart",parsed)
    dispatch(addCart)
    if(cart.listCart.length == 0){
      setIsEmpty(true)
    }else{
      setStatusCounter(false)
      handleSubtotal()
    }
  }

  const handleUpdate = ()=>{
    setStatusCounter(false)
    handleSubtotal()
  }

  const handleChange = (event)=>{
    event.preventDefault()
    setDataShipping(JSON.parse(event.target.value))
  }

  const totalPrice = ()=>{
      var total = 0;
      if(Object.keys(dataShipping).length > 0){
        total = subtotal + dataShipping.cost;
      }else{
        total = subtotal
      }
    
      return total
  }

  const handleClearCart = (event)=>{
      event.preventDefault()
      cart.listCart = []
      const parsed = JSON.stringify(cart.listCart);
      window.localStorage.setItem("cart",parsed)
      dispatch(addCart)
      setStatusCounter(false)
      handleSubtotal()
      totalPrice()
      setIsEmpty(true)
  }

  const handleProcessCheckout = (event)=>{
    event.preventDefault()
    route.push("/checkout")
  }
    
  return(
    <Layout>
        <Head>
        <title>Cart | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderPage breadcumb={[{name:"Cart",active:true}]} title="Your cart" detail="Buy everything in your cart now!"/>
      <Container>
        {
          isEmpty ?  
          <div className="text-center py-5">
            <div  className="pt-4">
              <Image src="/images/shopping-cart.png" width={200} height={200}/>
            </div>
            <div className="fs-1 mt-3">Your Cart is Empty</div>
            <div className="w-50 ms-auto me-auto mt-3 pb-5">
              <p className={`${cartStyle.text} text-center`}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. urabitur blandit ultri</p>
            </div>
          </div> :
        <Form>
          <Row>
            <Col md={6} lg={7} xl={8}>
              <Row className="mt-5 pb-2 pt-5 text-color1 text-uppercase text-center d-none d-lg-flex border-bottom border-2 fw-bold">
                  {
                    titleTable.map((item)=>{
                        return(
                          item==="Products" ? <Col lg={6}>{item}</Col> :
                          <Col lg={2}>{item}</Col>
                        )
                    })
                  }
              </Row>
                {
                  cart.listCart.map((item,index)=>{
                    return(
                      <Row key={index}>
                        <Col lg={6}>
                          <div className='d-flex flex-row align-items-center'>
                            <span className="py-5 me-3"><CButton classStyle={cartStyle.button} onClick={()=>handleDelete(index)}><FaTrashAlt className="fs-5"/></CButton></span>
                            {item.data.product_image && <Image src={item.data.product_image.image} alt="product" width={69} height={83}/>}
                            <span className="ms-5">{item.data.name}</span>
                          </div>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                            <span className="fw-bold">{formatter.format(item.data.price)}</span>
                        </Col>
                        <Col  xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                          <span><div className="d-flex justify-content-between"><CButton classStyle={cartStyle.button} onClick={()=>countDecrement(index)}>-</CButton><CInput classVariant={cartStyle.formQty} type="number" value={item.qty}/><CButton classStyle={cartStyle.button} onClick={()=>countIncrement(index)}>+</CButton></div></span>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                          <span className="text-muted d-inline d-lg-none">Total: </span>
                          <span className="fw-bold">{formatter.format(item.qty * item.data.price)}</span>
                        </Col>
                      </Row>
                    )
                  })
                }
                {/* <Table hover responsive="lg" className="mt-5">
                  <thead className="text-color1 text-uppercase">
                    <tr>
                      <th>#</th>
                      {
                        titleTable.map((item)=>{
                          return(
                            item=="Products" ? <th colSpan={2}>{item}</th> :
                            <th>{item}</th>
                          )
                        })
                      }
                    </tr>
                  </thead>
                  <tbody>
                      {
                        cart.map((item)=>{
                          return(
                          <tr className={`${cartStyle.tBorderNone} align-middle`}>
                            <td className="py-5"><CButton classStyle={cartStyle.button}><FaTrashAlt className="fs-5"/></CButton></td>
                            <td className="py-5"><Image src={`/images/${item.image}`} width={69} height={83}/></td>
                            <td className="py-5">{item.name}</td>
                            <td className="py-5">{item.price}</td>
                            <td className="py-5"><div className="d-flex justify-content-between"><CButton classStyle={cartStyle.button}>-</CButton><CInput classVariant={cartStyle.formQty} type="number" value={item.quantity}/><CButton classStyle={cartStyle.button}>+</CButton></div></td>
                            <td className="py-5">{item.total}</td>
                          </tr>
                          )
                        })
                      }
                  </tbody>
              </Table> */}
              <div className="d-md-flex justify-content-between mt-5">
                <div className={`${cartStyle.cupon} d-md-flex mb-5 w-md-50`}>
                  <CInput classVariant={`${cartStyle.formCupon} w-md-50`} placeholder="Enter your coupon code"/>  
                  <CButton className={`${cartStyle.buttonUpdate} fw-bold`}>Apply Cupon</CButton>
                </div>
                <div className="text-end">
                  <CButton classStyle={`${cartStyle.buttonDelete}`} onClick={handleClearCart}>Clear Cart</CButton>
                  <CButton classStyle={`${cartStyle.buttonUpdate} fw-bold`} onClick={handleUpdate}>Update Cart</CButton>
                </div>
              </div>
             
            </Col>
            <Col md>
                <div className="ms-md-4 ps-5 mt-5 pt-4 bg-color4 ">
                  <div className="fs-6 fw-bold mb-5">Cart Total</div>
                    <Row className="mb-5">
                      <Col xs={4}><div className="fw-bold">Subtotal</div></Col>
                      <Col><div className="fw-bold">{formatter.format(subtotal)}</div></Col>
                    </Row>
                    <Row className="mb-5">
                      <Col md={4}><div className="fw-bold mb-3">Shipping</div></Col>
                      <Col>
                        <div className="me-5 me-md-3">
                          <Form.Select className={cartStyle.selectShipping} onChange={handleChange}>
                          <option selected style={{display:'none'}}>Select Shipping Method</option>
                            {
                              shipping!==null && shipping.listShipping.length > 0 &&
                              shipping.listShipping.map((item)=>{
                                return(
                                    <option value={JSON.stringify(item)} key={item.id}>{item.name} - {formatter.format(item.cost)}</option>
                                )
                              })
                            }
                          </Form.Select>
                        </div>
                      </Col>
                    </Row>
                    <hr className="w-80 me-5"></hr>
                    <Row className="pb-5">
                      <Col xs={4}><div className="fw-bold">Total Price</div></Col>
                      <Col><div className="fw-bold">{formatter.format(totalPrice())}</div></Col>
                    </Row>
                </div>
                <div className="ms-md-4 mb-5 d-grid gap-2">
                  <CButton classStyle={`${cartStyle.buttonProcessCheckout} bg-color2`} onClick={handleProcessCheckout}>Procced To Check Out</CButton>
                </div>
            </Col>
          </Row>
        </Form> }
      </Container>
    </Layout>
  )
}

export default withAuth(Cart)
