import React from 'react';
import './home.css'

const Home: React.FC = () => {
    return (
        <div className='home-container'>
            <h1 className="line1"><span className='span1'>Hey</span> It's Me</h1>
                <h1 className="line2">Kunal <span className="span2">Sharma</span></h1>
                <h1 className="line3">I am a passionate</h1>
                <h1 className="line4 span3">Web <span className='span3'>Developer</span></h1>
        </div>
    );
};

export default Home;