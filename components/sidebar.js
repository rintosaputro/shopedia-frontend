import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Sidebar() {
  const route = useRouter();
  const [active, setActive] = useState('/login');
  useEffect(() => {
    setActive(route.pathname);
  }, [route.pathname]);
  const menu = [
    { link: '/login', name: 'Login Account' },
    { link: '/signup', name: 'Register Account' },
  ];
  return (
    <>
      <style jsx>
        {`
                    a{
                        color: rgba(58, 61, 66, 0.4);
                        text-decoration: none;
                    }
                    hr{
                        color: transparent;
                        margin-bottom:50px;
                    }
                    hr.actived{
                        color: #062C30;
                        border-color: #03045E;
                        border-bottom: 4px solid black
                        
                    }
                    a.active{
                        color: #062C30;
                    }
                `}
      </style>
      <Nav className="flex-column my-5 ms-5">
        {menu.map((item) => (
          <>
            <Link
              key={item.name}
              href={item.link}
            >
              <a className={active === item.link ? 'active' : ''}>
                <h3>{item.name}</h3>
              </a>
            </Link>
            <hr className={active === item.link ? 'actived' : ''} width="10%" />
          </>
        ))}
      </Nav>
    </>
  );
}
export default Sidebar;
