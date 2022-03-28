import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import { FiSave } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { editStore } from '../../redux/actions/store'

const EditStore = () => {
  const data = useSelector(state => state.user?.dataUser)
  const store = useSelector(state => state.store)
  console.log(store.errMessage)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const store = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    dispatch(editStore(store, description))
  }
  return (
    <Layout>

      <Head>
        <title>Edit Store | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'My Store', href: '/my-store' }, { name: 'Create Store', active: true }]} />
        </Container>
        <h1 className={'text-center pt-4'}>Create Store</h1>
        <div className={'text-center pb-5'}>Lets Create Your Own Store</div>
      </div>
      <Container className='my-5'>
        {store.isError && <Alert variant='color3' className='mt-5 text-danger text-center'>{store.errMessage}</Alert>}
        {store.editStore && <Alert variant='color2' className='mt-5 text-danger text-center'>Edit Store Succesfully</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Label className='px-3'><p>Your Store Name :</p></Form.Label>
          <Input
            type="text"
            id="name"
            name="name"
            aria-describedby="name"
            className='me-5 pb-3 form-color2'
            placeholder='Your Store Name *'
            defaultValue={data.store?.name}
          />
          <Form.Label className='px-3 pt-5'><p>Your Store Description :</p></Form.Label>
          <Input
            type="text"
            id="description"
            as="textarea"
            name="description"
            aria-describedby="description"
            className='me-5 pb-3 form-color2'
            placeholder='Your Store Description *'
            defaultValue={data.store?.description}
          />
          <Button type="submit" className='mt-4 px-4' variant="color2" size="lg" active>
            <FiSave />&nbsp;Save
          </Button>{' '}
        </Form>
      </Container>
    </Layout >
  )
}
export default EditStore
