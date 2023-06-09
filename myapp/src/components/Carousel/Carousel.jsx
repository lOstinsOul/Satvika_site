
import React from 'react';
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";
import { CenterFocusStrong } from '@material-ui/icons';


const Image=styled('img')(({theme})=>({
    paddingBottom:'4em',
  position:'relative',
  objectFit:'cover',
    width:'100%',
    zIndex:-1,
    height:600,
    [theme.breakpoints.down('md')]:{
      objectFit:'cover',
      height:300,
  width:'100%',

    }, 
       [theme.breakpoints.down('sm')]:{
        background:'contain',
    
        height:250,
        width:'100%',
      }
}))

const responsive = {

    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



const Banner = () => {
  return (
    <Carousel responsive={responsive}
          
          removeArrowOnDeviceType={["tablet", "mobile"]}
          swipeable={false}
          draggable={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          customTransition="all 1s"
          transitionDuration={1000}
          infinite={true}
          keyBoardControl={true}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
  >
{
    bannerData.map(data=>(
        <Image src={data.url} alt="banner"/>
    ))
}
    </Carousel>
  )
}

export default Banner;