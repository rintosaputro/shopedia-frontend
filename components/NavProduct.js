import Link from "next/link";
import { useRouter } from "next/router";
import { Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from '../pages/my-product/MyProduct.module.css';

const NavProduct = () => {
  const route = useRouter();

  const { user } = useSelector(state => state);

  return (
    <nav>
      <ul className="list-group d-flex flex-row justify-content-center align-items-center my-5">
        <li className={`mx-3 ${styles.list}`}>
          <Link href='/profile'>
            <a className={`${route.pathname === '/profile' ? 'text-color1' : 'text-muted'} h4 text-decoration-none `}>Profile</a>
          </Link>
        </li>
        {user.dataUser.role && user.dataUser.role.name === 'seller'
        && <li className={`mx-3 ${styles.list}`}>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <span className={`${route.pathname === '/my-product' ? 'text-color1' : 'text-muted'} h4`}>My Product</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/my-product">All</Dropdown.Item>
              <Dropdown.Item href="/my-product/archive">Archive</Dropdown.Item>
              <Dropdown.Item href="/my-product/sold-out">Sold Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>}
        {user.dataUser.role && user.dataUser.role.name === 'seller'
        && <li className={`mx-3 ${styles.list}`}>
          <Link href='/selling-product'>
            <a className={`${route.pathname === '/selling-product' ? 'text-color1' : 'text-muted'} h4 text-decoration-none `}>Selling Product</a>
          </Link>
        </li>}
        <li className={`mx-3 ${styles.list}`}>
          <Dropdown>
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              <span className={`${route.pathname === '/my-order' ? 'text-color1' : 'text-muted'} h4`}>My Order</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={e => route.push('/my-order')}>All</Dropdown.Item>
              {/* <Dropdown.Item onClick={e => route.push('/my-order?status=get-paid')}>Get Paid</Dropdown.Item> */}
              <Dropdown.Item onClick={e => route.push('/my-order?status=Processed')}>Processed</Dropdown.Item>
              <Dropdown.Item onClick={e => route.push('/my-order?status=Sent')}>Sent</Dropdown.Item>
              <Dropdown.Item onClick={e => route.push('/my-order?status=Completed')}>Completed</Dropdown.Item>
              <Dropdown.Item onClick={e => route.push('/my-order?status=Cancelled')}>Order Cancel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </nav>

  )
}

export default NavProduct
