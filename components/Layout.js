import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from './styles/Navbar.module.css';
import LoadingOverlay from "./LoadingOverlay";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { ModalBody } from "react-bootstrap";

const Layout = ({children, fullFooter}) => {
  const route = useRouter();
  const {isLoading} = useSelector(state=>state.pages)

  useEffect(()=>{
    const body = document.getElementsByTagName('body')[0]
    if(isLoading){
      body.className = 'position-relative overflow-hidden'
    }else{
      body.className = ''
    }
 
  },[isLoading])

  return (
    <div>
      <Navbar/>
      <div className={styles.contain}>
      {children}
      </div>
      <Footer fullFooter={fullFooter}/>
      {isLoading && <LoadingOverlay/>}
    </div>
  )
}

export default Layout;
