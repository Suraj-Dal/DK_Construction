import React from 'react';
import './material.css';
import Header from '../../components/header/header';

const Material = () => {
    return (
        <div>
            <header className='material_header'>
                <Header></Header>
                <div className='header_content'>
                    <video src=""></video>
                    <h1>Materials</h1>
                    <p>Our selection of premium materials guarantees durability and aesthetic appeal. We source the finest products, ensuring each element of your space is crafted with excellence. From flooring to fixtures, our materials enhance the overall beauty and longevity of your interiors.</p>
                </div>
            </header>
        </div>
    )
}

export default Material