import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen bg-[#fd4475]">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://i.ibb.co/q7yZy2M/Golam-Kibria.jpg"
                    className="max-w-sm rounded-lg shadow-2xl" alt='Golam Kibria' />
                <div className='p-10 text-white'>
                    <p> Hi, This is </p>
                    <h1 className="text-5xl font-thin">Colam Kibria</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <ul className="menu menu-horizontal   ">
                        <p className=" normal-case rounded-none text-xl py-2 pr-3  "> My projects: </p>
                        <li><Link to='/JavaScriptProjects'>JavaScript</Link></li>
                        <li><Link to='/ReactProjects'>React</Link></li>
                        <li><Link to='/WordPressProjects'>WordPress</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;