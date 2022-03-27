import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Input from '../../components/CInput'
import { Container, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import BreadCrumb from '../../components/BrreadCrumb'
import NavProduct from '../../components/NavProduct'
import Image from 'next/image'
import profile from '../../images/about1.png'
import { FiEdit3, FiLogOut } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, editProfile } from '../../redux/actions/user'
import { useRouter } from "next/router";

const Index = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.user?.dataUser)
  // const token = useSelector(state => state.user.token)
  const role = data.role
  const genders = String(data.gender)
  const hiddenFileInput = useRef(null)
  const [datas, setDatas] = useState({})
  const route = useRouter();
  useEffect(
    () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        dispatch(getProfile)
      } else {
        route.push('/')
      }
    }, []
  )
  const uploadFile = (e) => {
    e.preventDefault()
    hiddenFileInput.current.click()
  }
  const fileInputHandler = (e) => {
    const reader = new FileReader();
    const picture = e.target.files[0];
    const profileImage = document.querySelector('#profile-image');
    reader.readAsDataURL(picture);
    reader.onload = (e) => {
      profileImage.src = e.target.result;
      profileImage.className += ' rounded-circle'
    };
    setDatas({
      picture: e.target.files[0]
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const gender = document.querySelector('#gender option:checked').value;
    const images = datas.picture
    if (role.name === 'seller') {
      const description = document.getElementById('description').value;
      dispatch(editProfile(email, name, gender, description, images))
    } else {
      dispatch(editProfile(email, name, gender, images))
    }

    // console.log(email)
    // route.push('/login')
  }
  return (
    <Layout>

      <Head>
        <title>My Profile | Shopedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={'bg-color4 py-5'}>
        <Container>
          <BreadCrumb data={[{ name: 'Home', href: '/' }, { name: 'Profile', active: true }]} />
        </Container>
        <h1 className={'text-center pt-4'}>Profile</h1>
        <div className={'text-center pb-5'}>See your notifications for the latest updates</div>
      </div>
      <Container className='mb-5'>
        {/* {role && role.name === 'seller' && <NavProduct />} */}
        <NavProduct />
        <Form onSubmit={handleSubmit}>
          <div className='d-flex flex-row'>
            <div className='ms-4 my-5 d-inline position-relative '>
              <Image
                id="profile-image"
                alt="{auth?.fullName}"
                src={data.image || profile}
                width="80"
                height="80"
                className="rounded-circle mx-auto d-block"
              />
              <Button block variant='pallet-2 radius' onClick={(e) => uploadFile(e)}><FiEdit3 size={20} /> Edit </Button>
              <input type="file"
                ref={hiddenFileInput}
                className='d-none'
                name='picture'
                accept='image'
                onChange={(e) => fileInputHandler(e)}
              />
            </div>
            <div className='my-5 py-2 ms-5'>
              <Input
                type="text"
                id="name"
                name="name"
                aria-describedby="name"
                className='me-5 pb-3 border-0 form-color2'
                defaultValue={data.name || 'Your Name'}
              // placeholder='Your Name*'
              />
              <div>as {role?.name}</div>
            </div>
          </div>

          <div className='border border-3 border-bottom-0 px-3 pt-3'>
            <Form.Label className='px-3'><p>Gender :</p></Form.Label>
            <Form.Select className='border-0' size="lg" id="gender" defaultValue={genders}>
              <option disabled value={''}></option>
              <option value={'male'}>male</option>
              <option value={'female'}>female</option>
              <option value={'others'}>others</option>
            </Form.Select>
          </div>
          <div className={`border border-3 border-bottom-1 px-3 pt-3`}>
            <Form.Label className='px-3'><p>Your Email :</p></Form.Label>
            <Input
              type="email"
              id="email"
              name="email"
              aria-describedby="email"
              className='me-5 pb-3 border-0 form-color2'
              defaultValue={data.email}
              placeholder='Your email address *'
            />
          </div>
          {role && role.name === 'seller' && 
           <>
            <div className='border border-3 border-bottom-0 px-3 pt-3'>
              <Form.Label className='px-3'><p>Store Name :</p></Form.Label>
              <Input
                type="text"
                id="store"
                name="store"
                aria-describedby="store"
                className='me-5 pb-3 border-0'
                defaultValue={data.store?.name}
                placeholder='Your Store'
              />
            </div>
            <div className='border border-3  px-3 pt-3'>
              <p className='px-3'>Store Description :</p>
              <Input
                type="text"
                id="description"
                name="description"
                aria-describedby="description"
                className='me-5 mb-3 border-0'
                defaultValue={data.store?.description}
                placeholder='Description Store'
              />
            </div>
          </> 
          }
          <Button type="submit" className='mt-4 px-4' variant="color2" size="lg" active>
            <FiLogOut />&nbsp;Save
          </Button>{' '}
        </Form>
      </Container>
    </Layout >
  )
}
export default Index
