import { useEffect, useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const ProfileNAv = () => {
  const route = useRouter()
  const [active, setActive] = useState('/profile')
  useEffect(() => {
    setActive(route.pathname)
    console.log(route.pathname)
  }, [route.pathname])
  const menu = [
    { link: '/profile', name: 'Profile' },
    { link: '/profile/my-product', name: 'My Product' },
    { link: '/profile/selling-product', name: 'Selling Product' },
    { link: '/profile/my-order', name: 'My Order' },
  ]
  return (
    <>
      <style jsx>
        {`
                    a{
                        color: rgba(58, 61, 66, 0.4);
                        text-decoration: none;
                        font-size:1.8rem;
                    }
                    a{
                        color: transparent;
                        margin-bottom:5px;
                    }
                    a.actived{
                        color: #062C30;
                        border-color: #03045E;
                        border-bottom: 4px solid black
                        
                    }
                    a.active{
                        color: #062C30;
                    }
                `}
      </style>
      <nav className="navbar navbar-expand-lg navbar-light bg-light my-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {menu.map(item => {
                return (
                  <>
                    <div className='d-flex flex-column'>
                      <li key={item.name} className="nav-item mx-3">
                        <a className={active === item.link ? 'active actived nav-link' : 'nav-link'} aria-current="page" href={item.link}>{item.name}</a>
                      </li>
                    </div>
                  </>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default ProfileNAv
