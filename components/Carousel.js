/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import banner from '../public/images/banner-product.png';

export default class NextJsCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel showThumbs={false}>
          <div>
            <Image width={2000} height={1000} src={banner} alt="image1" />
          </div>
          <div>
            <Image width={2000} height={1000} src={banner} alt="image2" />
          </div>
          <div>
            <Image width={2000} height={1000} src={banner} alt="image3" />
          </div>
          <div>
            <Image width={2000} height={1000} src={banner} alt="image4" />
          </div>
          <div>
            <Image width={2000} height={1000} src={banner} alt="image5" />
          </div>
        </Carousel>
      </div>
    );
  }
}
