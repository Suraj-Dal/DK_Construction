import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Slider {...settings} sx={{display: 'flex', gap: '10px'}}>
        {props.data.map((image, index) => (
          <Box key={index} sx={{ padding: 1 }}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{
                width: '600px',
                height: '250px', 
                objectFit: 'cover', 
                borderRadius: '8px',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
