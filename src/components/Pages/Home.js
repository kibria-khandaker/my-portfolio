import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import myImg from '../../Assets/img/golam-kibria.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='w-5/6 kib_box_shadow my-8 rounded-3xl mx-auto  py-8 lg:py-auto flex flex-col text-center justify-center items-center'>
                <img className="w-[150px] kib_box_shadow mx-auto rounded-lg" src={myImg} alt='myImg' />
                <div className='kib_box_shadow pt-5 pb-7 px-6 md:px-12 rounded-lg mt-8 text-[#7a8190]'>
                    <h2 className=' font-bold text-2xl pb-3'> Hello, I'm Golam Kibria </h2>
                    <p> A <span className='font-bold'>Front-End Developer | MERN Stack Developer</span> <br /> based in React node MongoDB </p>
                    <a target='_blank'  rel="noreferrer" className='kib_inside_effect rounded mt-5 inline-block py-3 px-3' href="https://drive.google.com/file/d/1VqNF-KdocXEGAv-zO534lSdkuimMxlNA/view?usp=sharing" > Download Resume </a>
                </div>
                <div className=" flex pt-8 gap-5">
                    <a target='_blank' rel="noreferrer"  className='kib_inside_effect rounded-full py-3 px-3' href="https://www.linkedin.com/in/kibria-khandaker/" ><FaGithubSquare /></a>
                    <a target='_blank' rel="noreferrer"  className='kib_inside_effect rounded-full py-3 px-3' href="https://github.com/kibria-khandaker" ><FaLinkedin /></a>
                </div>
            </div>

        </div>
    );
};

export default Home;