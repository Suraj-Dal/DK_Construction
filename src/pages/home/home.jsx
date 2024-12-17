import React from 'react';
import './home.css';
import image1 from '../../assets/house1.png';
import image2 from '../../assets/house2.png';
import houseimage1 from '../../assets/ourServiceImage1.png';
import houseimage2 from '../../assets/ourServiceImage2.png';
import houseimage3 from '../../assets/ourServiceImage3.png';
import dkImage from '../../assets/dkImage.png';
import Header from '../../components/header/header';

const Home = () => {
    return (
        <div className='outer-container'>
            <header className='header'>
                <Header></Header>
                <div className='header_content'>
                    <h1>Lets Make <br /> your Interior <br /> Better</h1>
                    <p>"Expertly crafted interior design solutions that reflect your <br /> unique style, transforming spaces into personalized havens of <br /> beauty and functionality."</p>
                    <button>Know More</button>
                </div>
            </header>
            <main>
                <section className='design_section'>
                    <div className='images_section'>
                        <div className='picture1'>
                            <div className='box1'>
                            </div>
                            <div className='box2'>
                                <img src={image1} alt="" style={{ width: '380px', height: '190px' }} />
                            </div>
                        </div>
                        <div className='picture2'>
                            <div className='box2'>
                                <img src={image2} alt="" style={{ width: '380px', height: '240px', position: 'relative', zIndex: '5' }} />
                                <div className='box1' />
                                <div className='box3' />
                            </div>
                        </div>
                    </div>
                    <div className='information_section'>
                        <h1>THE DREAM HOUSE DESIGN</h1>
                        <p>Adding the DK Construction touch to your house brings usefulness and aesthetic appeal together.
                            We use cutting-edge technology to give your house a faultless
                            appearance that will last for a very long period.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic quaerat quis impedit.
                            Aperiam impedit nesciunt ducimus fugiat earum consectetur dicta,
                            eveniet vel cupiditate alias dolorem, natus quasi similique at odit odio accusamus
                            ipsum voluptas tempore expedita aut adipisci nihil laudantium voluptate? Expedita,
                            deserunt obcaecati? Incidunt voluptatibus dicta deleniti dolores, dolorem id maiores
                            nemo doloremque nisi assumenda sit officiis vitae. Beatae accusantium voluptate et,
                            tenetur deleniti natus aut maiores inventore iste porro mollitia incidunt vero nihil
                            quos praesentium officiis vitae sit consequuntur veritatis alias soluta, libero velit sed!
                            Reprehenderit minima nam quia ducimus aperiam recusandae sequi laboriosam distinctio quaerat iure?</p>
                        <button>BOOK FREE CONSULTATION</button>
                    </div>
                </section>
                <section className='service_section'>
                    <div className='service_heading'>
                        <h1>Our Services</h1>
                    </div>
                    <div className='service_images'>
                        <div className='service_image1'>
                            <div className='image1'>
                                <img src={houseimage1} alt="" style={{ width: '300px', height: '380px' }} />
                            </div>
                            <h1>Construction</h1>
                        </div>
                        <div className='service_image1'>
                            <div className='image1'>
                                <img src={houseimage2} alt="" style={{ width: '300px', height: '380px' }} />
                            </div>
                            <h1>Interior Designing</h1>
                        </div>
                        <div className='service_image1'>
                            <div className='image1'>
                                <img src={houseimage3} alt="" style={{ width: '300px', height: '360px' }} />
                            </div>
                            <h1>Material</h1>
                        </div>

                    </div>
                </section>
                <section className='aboutUs'>
                    <div className='aboutUs_images'>
                        <div className='box2'>
                            <img src={dkImage} alt="" style={{ width: '280px', height: '360px', position: 'relative', zIndex: '5' }} />
                            <div className='box3' />
                            <div className='box1' />
                        </div>
                    </div>
                    <div className='aboutUs_information'>
                        <h1>ABOUT US</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Distinctio sit odio molestiae atque illo voluptas nemo nulla
                            rem minima quam magnam, corrupti vel ipsa recusandae quos vitae.
                            Illum, ullam neque dolorum vel repellat dolorem ipsa nam corporis,
                            provident cupiditate quasi iure iusto quaerat ab non
                            vero velit quod molestias eaque itaque veritatis asperiores
                            doloribus repellendus! Tenetur voluptate voluptates quis quibusdam
                            nostrum, odit deserunt doloremque omnis, quidem itaque nulla cupiditate
                            exercitationem a suscipit! Neque ipsa laboriosam quaerat, quia a odit aliquam
                            aspernatur aut dignissimos placeat culpa quam quos eligendi earum,
                            sunt quo id fugiat consectetur. Corrupti ipsum possimus dolorem eum
                            distinctio, modi eos ipsam vel facere, delectus veritatis perspiciatis ex
                            deserunt nisi accusantium qui repellat, nostrum aperiam aliquam aspernatur impedit.
                        </p>
                    </div>
                </section>
            </main>
            <footer>

            </footer>
        </div>
    )
}
export default Home