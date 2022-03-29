import { Button} from "react-bootstrap";

const CButton = ({classStyle,color,children,...rest})=>{
    return(
      <Button className={classStyle} variant={color} {...rest}>
        {children}
    </Button>
    )
}

export default CButton
