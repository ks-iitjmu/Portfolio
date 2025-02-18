import React from 'react';
import './home.css'

const Home: React.FC = () => {
    return (
        <>
            <div className="background-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className='home-container'>
                <div className="text">
                    <h1 className="hero-title">
                        Hi, I'm <span className="s">Kunal Sharma</span>
                        <br />
                        Full Stack Developer
                    </h1>
                    <p className="hero-subtitle">
                        I build exceptional digital experiences that make a difference.
                        Passionate about creating innovative solutions through code.
                    </p>
                </div>
                <div className="image">
                    <img src="./src/assets/me2.jpg" alt="myimage" className='img2'/>
                </div>
            </div>
        </>
    );
};

export default Home;