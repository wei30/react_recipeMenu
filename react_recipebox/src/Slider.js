import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

export const Slider = () => {
  const arrayImage = {
  imagesrc: ['http://www.thebeijinger.com/sites/default/files/styles/large/public/green-tea-sake-mooncake.jpg',
             'http://thevillagemoseley.co.uk/wp-content/uploads/2013/10/1200-X-400-PUD.jpg',
             'http://resveralife.com/wp-content/uploads/2014/11/Vine-Vera-on-vitamins.jpg',
             'https://www.faith.edu/assets/uploads/2017/02/Spring-Dessert-Icon.jpg',
             'http://simplynutrio2.com/wp-content/uploads/2014/11/Food_Differring_meal_edible_Still_Life_033639_-1200x400.jpg',
             ],
  imagename:['中秋节快乐']
}

  const styles = {
    width: 1250,
    height: 400
  };
  const stylebackground = {
    background: '#d6f9f4',
    opacity: 0.65
  }
  return (
    <Carousel controls={false}>
      {arrayImage.imagesrc.map((image, index)=>
      <Carousel.Item key={index}>
        <a className="thumbnail" style={stylebackground}>
          <Image style={styles} src={image} alt="1250x400"/>
        </a>
        <Carousel.Caption>
          <h3>{arrayImage.imagename[index]}</h3>
        </Carousel.Caption>
      </Carousel.Item>
     )}
    </Carousel>

  );
}
