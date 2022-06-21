import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import myImg from '../../Assets/img/Front-End-Developer-golam-kibria.jpg';

const Home = () => {
    return (
        <div>
            <div className='w-11/12 max-w-screen-lg kib_box_shadow my-8 rounded-3xl mx-auto md:mx-10
              py-8 lg:py-auto  md:flex justify-evenly items-start '>
                <div>                   
                    <img className="w-[200px]  md:mb-0  mx-auto md:mx-5 kib_box_shadow rounded-full hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " src={myImg} alt='myImg' />
                    <div className=" flex  justify-center py-8 gap-5 ">
                        <a target='_blank' rel="noreferrer" className='kib_inside_effect  text-[#8a92a5] rounded-full py-3 px-3' href="https://www.linkedin.com/in/kibria-khandaker/" ><FaGithubSquare /></a>
                        <a target='_blank' rel="noreferrer" className='kib_inside_effect  text-[#8a92a5] rounded-full py-3 px-3' href="https://github.com/kibria-khandaker" ><FaLinkedin /></a>
                    </div>
                </div>
                <div className=' mx-5 md:mx-5  flex flex-col text-center '>
                    <div className='kib_box_shadow pt-5 pb-7 px-6 md:px-8 rounded-lg  text-[#7a8190]'>
                        <h2 className=' font-bold md:text-2xl pb-3'>  Hello, I'm Golam Kibria </h2>
                        <p className='md:font-bold my-4 '> Front-End Developer | MERN Stack Developer </p>
                        <a target='_blank' rel="noreferrer" className='kib_inside_effect  rounded mt-5 inline-block py-3 px-3' href="https://drive.google.com/file/d/1VqNF-KdocXEGAv-zO534lSdkuimMxlNA/view?usp=sharing" > Download Resume </a>
                    </div>
                    <p className='text-[#7a8190] my-12'> <span className='animate-pulse'>Skills</span>: React, javaScript, Node.js, Express.js, MongoDB</p>
                </div>
            </div>

        </div>
    );
};

export default Home;