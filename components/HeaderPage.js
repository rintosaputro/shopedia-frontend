import { Container } from "react-bootstrap"
import BreadCrumb from "./BrreadCrumb"

const HeaderPage = ({breadcumb,title,detail})=>{
  return (
    <header className="py-5 text-center bg-color4">
      <Container>
        {breadcumb!==null &&<BreadCrumb data={breadcumb}/>}
      </Container>
        <h1 className="text-center pt-4">{title}</h1>
        <p className="text-center pb-5">{detail}</p>
    </header>
  )
}

export default HeaderPage
