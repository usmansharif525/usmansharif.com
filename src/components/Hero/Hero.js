import React from 'react';
// import classNames from 'classnames';
// import * as styles from './Hero.module.css';



const Hero = () => {
    return (

        <div id="about" className="hero-section wf-section pt-12">
            <div className="c-container mx-auto">
                <div className="flex items-center justify-items-center">
                    <div className='pb-10 pr-10'>
                        <div className='mb-5'>
                            <p className="inline-block">
                                <strong className="text-3xl font-bold">Hi, I’m Joris</strong>
                            </p>
                            <p className='inline-block text-4xl hover:animate-wiggle'>✋🏼</p>
                        </div>
                        <p className="text-lg leading-8">I’m an Entrepreneur and Engineer at heart. I specialised in building decentralized applications and smart contracts within the Ethereum ecosystem. Here I'm documenting my journey along the way.</p>
                    </div>
                    <img src="https://uploads-ssl.webflow.com/62076bbcf2bab02c46ed50a1/62085ad6cd3ecbf4824cad17_Joris-Zierold_blue.png" loading="eager" alt="Portrait of Joris Zierold" sizes="(max-width: 479px) 100vw, (max-width: 991px) 400px, 480px" srcSet="https://uploads-ssl.webflow.com/62076bbcf2bab02c46ed50a1/62085ad6cd3ecbf4824cad17_Joris-Zierold_blue-p-500.png 500w, https://uploads-ssl.webflow.com/62076bbcf2bab02c46ed50a1/62085ad6cd3ecbf4824cad17_Joris-Zierold_blue-p-800.png 800w, https://uploads-ssl.webflow.com/62076bbcf2bab02c46ed50a1/62085ad6cd3ecbf4824cad17_Joris-Zierold_blue.png 1500w" className="hero-image" />
                </div>
            </div>
        </div>
    );
}

export default Hero;