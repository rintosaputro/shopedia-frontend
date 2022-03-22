
const CButton = ({classVariant,children,...rest})=>{
    return(
        <button className={`btn ${classVariant}`} {...rest}>{children}</button>
    )
}

export default CButton