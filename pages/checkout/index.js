import Layout from "../../components/Layout"
import HeaderPage from "../../components/HeaderPage"
import Head from 'next/head'
import { Container,Row,Col,Alert } from "react-bootstrap"
import { Form } from "react-bootstrap"
import CInput from "../../components/CInput"
import CButton from "../../components/CButton"
import 'react-phone-number-input/style.css'
import { useEffect, useState } from "react"
import { addCart,addTransaction } from "../../redux/actions/cart"
import { getPaymentMethod } from "../../redux/actions/payment"
import { checkoutProcess,checkoutClear} from "../../redux/actions/checkout"
import { useDispatch, useSelector,connect } from "react-redux"
import { validationCheckout } from "../../helper/validation"
import styles from './checkout.module.scss';
import { route } from "next/dist/server/router"
import { useRouter } from "next/router"
import withAuth from "../../helper/withAuth"
import ModalNotifError from "../../components/ModalNotifError"


const Checkout = ()=>{
  
  // const [paymentMethod,setPaymentMethod] = useState([])

  const {payment,checkout} = useSelector(state=>state)
  const [error,setError] = useState({})
  const [control,setControl] = useState(false)
  const route = useRouter()
  const [listCart,setListCart] = useState([])
  const [dataTransaction,setDataTransaction] = useState([])

  const dispatch = useDispatch()

  useEffect(()=>{
      setListCart(JSON.parse(window.localStorage.getItem("cart")))
      setDataTransaction(JSON.parse(window.localStorage.getItem("transaction")))
      dispatch(addTransaction)
      dispatch(getPaymentMethod)
      dispatch(checkoutClear)
    // setPaymentMethod(["Cash","Transfer","Credit Card"])
  },[])

  useEffect(()=>{
    if(checkout.data && control){
        window.localStorage.setItem("cart",JSON.stringify([]))
        route.push("/my-order")
        setError({})
    }
  },[checkout.data])


  const handleCheckOut = (event)=>{
      event.preventDefault()
      const data = {
        name : event.target.elements["name"].value,
        address : event.target.elements["address"].value,
        phoneNumber : event.target.elements["phone-number"].value,
        paymentMethod : event.target.elements["payment-method"].value
      }

      const validate = validationCheckout(data)

      if(Object.keys(validate).length > 0){
        setError(validate)
      }else{
        dispatch(checkoutProcess(data,dataTransaction,listCart))
        setControl(true)
        // window.localStorage.setItem("cart",JSON.stringify([]))
        // route.push("/my-order")
        // if(checkout.isError){
        //   setError({errMsg : checkout.errMessage})
        // }else{
        //   window.localStorage.setItem("cart",JSON.stringify([]))
        //   route.push("/my-order")
        //   setError({})
        // }
      }
    }

  return(
    <Layout>
        <Head>
          <title>Checkout | Shopedia</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      <HeaderPage breadcumb={[{name:"Cart",href:"/"},{name:"Checkout",active:true}]} title="Check Out" detail="Pay and get your ordered items"/>
      <Container>
        <div className="m-5">
              <Form onSubmit={handleCheckOut}>
                <Row>
                  <Col xs={12} md={3}></Col>
                  <Col xs={12} md={6}>
                    <div className="fs-2">Self Information</div>
                    <ModalNotifError message={checkout.errMessage} />
                    {/* {checkout.isError && checkout.errMessage &&  
                    <Alert variant="danger" dismissible>
                    <Alert.Heading>{checkout.errMessage}</Alert.Heading>
                  </Alert>} */}
                    <CInput type="text" name="name" classVariant="me-5 py-3 mt-5" placeholder="Your name *" ></CInput>
                    {error!==null && error.name ? <div className={styles.error}>{error.name}</div> : '' }
                    <CInput as="textarea" name="address" className="me-5 py-3 mt-3" rows={3} placeholder="Address *"/>
                    {error!==null && error.address ? <div className={styles.error}>{error.address}</div> : '' }
                    <CInput type="text" name="phone-number" classVariant="me-5 py-3 mt-3" placeholder="Phone Number *" ></CInput>
                    {error!==null && error.phoneNumber ? <div className={styles.error}>{error.phoneNumber}</div> : '' }
                    <Form.Select name="payment-method" className="me-5 py-3 mt-5">
                      <option selected value="" style={{display:'none'}}>Payment Method</option>
                      {
                        payment.listPaymentMethod.map((item)=>{
                          return(
                            <>
                              <option value={item.id} key={item.id}>{item.name}</option>
                            </>
                          )
                        })
                      }
                    </Form.Select>
                    {error!==null && error.paymentMethod ? <div className={styles.error}>{error.paymentMethod}</div> : '' }
                    <CButton classStyle='mt-5 mb-5 px-4 bg-color2' size="lg" type="submit"> Check Out</CButton>
                  </Col>
                </Row>
              </Form>
        </div>
      </Container>
    </Layout>
  )
}

export default Checkout
