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
import { getProduct } from "../../redux/actions/product"
import NumberFormat from "react-number-format"

const Cart = ()=>{
  const {cart,shipping,product} = useSelector(state=>state)
  const [titleTable,setTitleTable] = useState([])
  const dispatch = useDispatch() 
  const [statusCounter,setStatusCounter] = useState(false)
  const [subtotal,setSubtotal] =  useState(0)
  const route = useRouter()
  const [isEmpty,setIsEmpty] = useState(false)
  const [dataShipping,setDataShipping] = useState({})
  const [error,setError] = useState("")
  const [listCart,setListCart] = useState([])
  const [listProduct,setProduct] = useState([])

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const handleSubtotal = () =>{
    if(!statusCounter){
        const subtotal = listCart.map((item)=>{
          var result = 0
          result +=(item.qty * item.data.price) 
          return result
      })

      return subtotal.reduce(function (total, num) {
        return total+num
        }, 0)
      }
  }

  useEffect(()=>{
      setTitleTable(["Products","Price","Quantity","Total"])
      setListCart(JSON.parse(window.localStorage.getItem("cart")))
      dispatch(getListShipping)
      dispatch(addCart)
      dispatch(getProduct)
      setSubtotal(handleSubtotal())
  },[])

  useEffect(() => {
    if (listCart.length > 0) {
      let subTotal = 0
      listCart.forEach((item) => {
        subTotal += (item.qty * item.data.price)
      })
      setSubtotal(subTotal)
    }
  }, [listCart])

  // useEffect(()=>{
  //   if(listCart.length > 0){
  //     listCart.forEach((item)=>{
  //       dispatch(getProductDetail(item.data.id))
  //       item.data = product.productDetail
  //     })
  //   }
  //   const parsed = JSON.stringify(listCart)
  //   window.localStorage.setItem("cart",parsed)
  //   setListCart(JSON.parse(window.localStorage.getItem("cart")))
  // },[listCart])

  useEffect(()=>{
    if(cart.isAddCart){
      console.log("masuk add cart")
      dispatch(getProduct)
      console.log(product.product)
      var parseCart = JSON.parse(window.localStorage.getItem("cart"))
        if(parseCart.length > 0){
          parseCart.forEach((item)=>{
            product.product.forEach((itemProduct)=>{
              if(itemProduct.id===item.data.id){
                  item.data = itemProduct
              }
            })
        })
      }
      const parsed = JSON.stringify(parseCart)
      window.localStorage.setItem("cart",parsed)
      setListCart(JSON.parse(window.localStorage.getItem("cart")))
    }
  },[cart.isAddCart])


  useEffect(()=>{
    if(!statusCounter){
      setListCart(JSON.parse(window.localStorage.getItem("cart")))
      setSubtotal(handleSubtotal())
    }
  },[statusCounter])

 
  const countIncrement = (index) =>{
    if(listCart[index].qty < listCart[index].data.stock){
      listCart[index].qty++;
      const parsed = JSON.stringify(listCart);
      window.localStorage.setItem("cart",parsed)
      setListCart(JSON.parse(window.localStorage.getItem("cart")))
      setStatusCounter(true)
    }
  }

  const countDecrement = (index) =>{
    if(listCart[index].qty>0){
      listCart[index].qty--;
    }
    const parsed = JSON.stringify(listCart);
    window.localStorage.setItem("cart",parsed)
    setListCart(JSON.parse(window.localStorage.getItem("cart")))
    setStatusCounter(true)
  }

  const handleDelete = (index)=>{
    var getListcart = listCart.filter((item,indexCart)=>indexCart!==index);
    const parsed = JSON.stringify(getListcart);
    window.localStorage.setItem("cart",parsed);
    setListCart(JSON.parse(window.localStorage.getItem("cart")))
    setStatusCounter(false)
    dispatch(addCart)
    setSubtotal(handleSubtotal())
    if(listCart.length == 0){
      setIsEmpty(true)
    }
  }

  const handleUpdate = ()=>{
    setStatusCounter(false)
    setSubtotal(handleSubtotal())
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
      setListCart([])
      const parsed = JSON.stringify([]);
      window.localStorage.setItem("cart",parsed)
      dispatch(addCart)
      setStatusCounter(false)
      setSubtotal(handleSubtotal())
      totalPrice()
  }

  const handleProcessCheckout = (event)=>{
    event.preventDefault()
    if(Object.keys(dataShipping).length > 0){
      const data = {shipping:dataShipping,total:totalPrice()}
      const parsed = JSON.stringify(data);
      window.localStorage.setItem("transaction",parsed)
      route.push("/checkout")
    }else{
      setError("Shipping method must be filled!")
    }
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
          listCart.length ==0 ?  
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
              <Row className="mt-5 pb-2 text-color1 text-uppercase text-center d-none d-lg-flex border-bottom border-2 fw-bold">
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
                  listCart.map((item,index)=>{
                    return(
                      <Row key={index}>
                        <Col lg={6}>
                          <div className='d-flex flex-row align-items-center'>
                            <span className="py-5 me-3"><CButton classStyle={cartStyle.button} onClick={()=>handleDelete(index)}><FaTrashAlt className="fs-5"/></CButton></span>
                            {item.product_image && <Image src={item.product_image.image} alt="product" width={69} height={83}/>}
                            <span className="ms-5">{item.data.name}</span>
                          </div>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                            <span className="fw-bold"><NumberFormat value={String(item.data.price)} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'} /></span>
                            {/* <span className="fw-bold">{formatter.format(item.data.price)}</span> */}
                        </Col>
                        <Col  xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                          <span><div className="d-flex justify-content-between"><CButton classStyle={cartStyle.button} onClick={()=>countDecrement(index)}>-</CButton><CInput classVariant={cartStyle.formQty} type="number" value={item.qty}/><CButton classStyle={cartStyle.button} onClick={()=>countIncrement(index)}>+</CButton></div></span>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                          <span className="text-muted d-inline d-lg-none">Total: </span>
                          <span className="fw-bold"><NumberFormat value={String(item.qty * item.data.price)} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'} /></span>
                          {/* <span className="fw-bold">{formatter.format(item.qty * item.data.price)}</span> */}
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
                      <Col xs={4} md={3}><div className="fw-bold">Subtotal</div></Col>
                      <Col><div className="fw-bold"><NumberFormat value={String(subtotal)} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'} /></div></Col>
                      {/* <Col><div className="fw-bold">{formatter.format(subtotal)}</div></Col> */}
                    </Row>
                    <Row className="mb-5">
                      <Col md={3}><div className="fw-bold mb-3">Shipping</div></Col>
                      <Col>
                        <div className="me-5 me-md-4">
                          <Form.Select className={cartStyle.selectShipping} onChange={handleChange}>
                          <option selected style={{display:'none'}}>Select Shipping Method</option>
                            {
                              shipping!==null && shipping.listShipping.length > 0 &&
                              shipping.listShipping.map((item)=>{
                                return(
                                    <option value={JSON.stringify(item)} key={item.id}>{item.name} - Rp. {item.cost.toLocaleString("id-ID")}</option>
                                )
                              })
                            }
                          </Form.Select>
                          {error!=="" && <div className={cartStyle.error}>{error}</div>}
                        </div>
                      </Col>
                    </Row>
                    <hr className="w-80 me-5"></hr>
                    <Row className="pb-5">
                      <Col xs={4}><div className="fw-bold">Total Price</div></Col>
                      <Col><div className="fw-bold"><NumberFormat value={String(totalPrice())} prefix={'Rp. '} mask="." thousandSeparator={true} displayType={'text'}/></div></Col>
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

export default Cart
