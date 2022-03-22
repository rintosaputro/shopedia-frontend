import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from './styles/Navbar.module.css';

const Layout = ({children, fullFooter}) => {
  const route = useRouter();

  return (
    <div>
      <Navbar/>
      <div className={styles.contain}>
      {children}
      </div>
      <Footer fullFooter={fullFooter}/>
    </div>
  )
}

export default Layout;
