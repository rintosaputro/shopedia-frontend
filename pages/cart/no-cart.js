import Layout from "../../components/Layout"
import Head from 'next/head'
import HeaderPage from "../../components/HeaderPage"
import { useState,useEffect } from "react"
import { Row,Col,Table, Container } from "react-bootstrap"
import Image from "next/image"
import cartStyle from "./cart.module.scss"
import withAuth from "../../helper/withAuth"

const cart = ()=>{

  return(
    <Layout>
        <Head>
        <title>Cart | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderPage breadcumb={[{name:"Cart",active:true}]} title="Your cart" detail="Buy everything in your cart now!"/>
      <Container>
        <div className="text-center py-5">
          <div  className="pt-4">
            <Image src="/images/shopping-cart.png" width={200} height={200}/>
          </div>
          <div className="fs-1 mt-3">Your Cart is Empty</div>
          <div className="w-50 ms-auto me-auto mt-3 pb-5">
            <p className={`${cartStyle.text} text-center`}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. urabitur blandit ultri</p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default cart
