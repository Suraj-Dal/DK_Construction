import React from 'react';
import './service.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Carousel from '../../components/carousel/carousel';
import image1 from '../../assets/construction1.jpg'
import image2 from '../../assets/construction2.jpg'
import image3 from '../../assets/construction3.jpg'


const Service = () => {
    return (
        <div className='main'>
            <header className='header1'>
                <Header></Header>
                <div className='header_content'>
                    <video src=""></video>
                    <h1>Construction</h1>
                    <p>Our construction services deliver exceptional quality and precision, ensuring your vision comes to life seamlessly. From foundational work to finishing touches, we handle every aspect with professionalism and care, creating sturdy, beautiful spaces that stand the test of time.</p>
                </div>
            </header>
            <section className='carousel'>
                <Carousel data={[image1, image2, image3]}/>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Service