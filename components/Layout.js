import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children, fullFooter}) => {
  const route = useRouter();

  return (
    <div>
      <Navbar/>
      {children}
      <Footer fullFooter={fullFooter}/>
    </div>
  )
}

export default Layout;
