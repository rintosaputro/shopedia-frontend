import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function NavProductHomepage() {
  const route = useRouter();
  const [active, setActive] = useState('/');
  useEffect(() => {
    setActive(route.pathname);
  }, [route.pathname]);
  const menu = [
    { link: '/', name: 'New Product' },
    { link: '/hot-trend', name: 'Hot Trend' },
    { link: '/selling-offer', name: 'Selling Offer' },
  ];

  return (
    <>
      <style jsx>
        {`
         
            a{
              color: rgba(58, 61, 66, 0.4);
              text-decoration: none;
              font-size:2vw;
          }
          a{
              color: #062C30;
              margin-bottom:5px;
          }
          a.actived{
              color: #062C30;
          }

          a:hover{
            color:#05595B;
          }

          a.active{
              color : #05595B
          }

          hr{
            border : 2px solid #05595B;
          }

          @media(max-width:500px) {
            
            a{
              font-size: 6vw;
            }
            
            a:hover{
              font-size: 6vw;
            }

            a.active{
              color : #05595B
            }
            
          }
        `}
      </style>
      <ul className="nav justify-content-center">
        {menu.map((item) => (
          <li className="nav-item" key={item.name}>
            {
                          active === item.link
                            ? (
                              <div>
                                <Link href={item.link}>
                                  <a className="active actived nav-link" aria-current="page">{item.name}</a>
                                </Link>
                                <hr className="w-25 text-color2 fw-bold ms-auto me-auto" />
                              </div>
                            )
                            : (
                              <Link href={item.link}>
                                <a className="nav-link" aria-current="page">{item.name}</a>
                              </Link>
                            )

                        }
          </li>
        ))}
      </ul>
    </>
  );
}
export default NavProductHomepage;
