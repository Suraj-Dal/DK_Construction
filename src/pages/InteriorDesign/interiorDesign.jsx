import React from 'react';
import './interiorDesign.css';
import Header from '../../components/header/header';

const InteriorDesign = () => {
    return (
        <div>
            <header className='interior_header'>
                <Header></Header>
                <div className='header_content'>
                    <video src=""></video>
                    <h1>Interior Designing</h1>
                    <p>Transform your spaces with our expert interior design services. We blend creativity and functionality, tailoring each design to your unique style and needs. Whether modern, classic, or eclectic, our designs elevate your living or working environments to new heights of elegance and comfort.</p>
                </div>
            </header>
        </div>
    )
}

export default InteriorDesign