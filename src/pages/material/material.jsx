import React from 'react';
import './material.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import image1 from '../../assets/interior1.jpg'
import image2 from '../../assets/interior2.jpg'
import image3 from '../../assets/interior3.jpg'
import Carousel from '../../components/carousel/carousel';

const Material = () => {
    return (
        <div className='main'>
            <header className='material_header'>
                <Header></Header>
                <div className='header_content'>
                    <video src=""></video>
                    <h1>Materials</h1>
                    <p>Our selection of premium materials guarantees durability and aesthetic appeal. We source the finest products, ensuring each element of your space is crafted with excellence. From flooring to fixtures, our materials enhance the overall beauty and longevity of your interiors.</p>
                </div>
            </header>
            <section className='carousel'>
                <Carousel data={[image1, image2, image3]}/>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Material