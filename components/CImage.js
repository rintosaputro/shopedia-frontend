import React from 'react';
import Image from 'next/image';

function CImage({
  pathImage, classVariant, children, ...rest
}) {
  return (
    <Image src={pathImage} className={classVariant} {...rest} />
  );
}

export default CImage;
