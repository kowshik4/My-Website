import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Contact Me</h2>
            <span className='section__subtitle'>Get in touch</span>

            <div className='contact__container container grid'>
                <div className='contact__content'>
                    <h3 className='contact__title'>Talk to me</h3>

                    <div className='contact__info'>
                        <div className='contact__card'>
                            <i class='bx bxs-contact' ></i>

                            <div>
                                <h3 className='contact__card-title'>Call Me</h3>
                                <span className='contact__card-data'>+1 980 345 0767</span>

                                <a href='mailto:kowshikmosalakanti@gmail.com' className='contact__button'>Write me{" "}
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                            </div>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bx-mail-send contact__card-icon'></i>

                            <div>
                                <h3 className='contact__card-title'>Email</h3>
                                <span className='contact__card-data'>kowshikmosalakanti@gmail.com</span>

                                <a href='mailto:kowshikmosalakanti@gmail.com' 
                                className='contact__button'>
                                    Write me{" "}
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                            </div>
                        </div>

                        <div className='contact__card'>
                            <i className='bx bxl-whatsapp contact__card-icon'></i>

                            <div>
                                <h3 className='contact__card-title'>Whatsapp</h3>
                                <span className='contact__card-data'>+1 980 345 0767</span>

                                <a href='https://api.whatsapp.com/send?phone=9803450767&text=Hello, more information!' className='contact__button'>Write me{" "}
                                <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact__content'>
                    <h3 className='contact__title'></h3>
                </div>
            </div>
            
        </section>
    );
}

export default Contact;