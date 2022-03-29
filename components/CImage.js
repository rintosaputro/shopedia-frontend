import Image from "next/image"

const CImage = ({pathImage,classVariant,children,...rest})=>{
    console.log("masuk!!")
    return(
        <Image src={pathImage} className={classVariant} {...rest}/>
    )
}

export default CImage