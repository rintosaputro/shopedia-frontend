import { Form } from "react-bootstrap";

const CInput = ({typeInput,classVariant,children,...rest})=>{
    return(
        <Form.Control type={typeInput} className={classVariant}{...rest}/>
    )
}

export default CInput
