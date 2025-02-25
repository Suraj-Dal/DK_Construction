import React from 'react';
import './interiorDesign.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Carousel from '../../components/carousel/carousel';
import image1 from '../../assets/interior1.jpg'
import image2 from '../../assets/interior2.jpg'
import image3 from '../../assets/interior3.jpg'

const InteriorDesign = () => {
    return (
        <div className='main'>
            <header className='interior_header'>
                <Header></Header>
                <div className='header_content'>
                    <video src=""></video>
                    <h1>Interior Designing</h1>
                    <p>Transform your spaces with our expert interior design services. We blend creativity and functionality, tailoring each design to your unique style and needs. Whether modern, classic, or eclectic, our designs elevate your living or working environments to new heights of elegance and comfort.</p>
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

export default InteriorDesign