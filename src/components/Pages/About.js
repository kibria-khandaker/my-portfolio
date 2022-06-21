import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = () => {
    return (
        <div className='kib_box_shadow w-12/12  md:w-8/12 max-w-screen-lg mx-5  md:mx-10 mt-9 rounded-lg py-10 px-5 md:px-20 text-[#787f90]'>
            <h2 className=' text-center text-3xl mb-10 font-bold'> About me </h2>
            <div className='text-left flex flex-col gap-5 '>
                <p>My name is Golam kibria, a Front-End Developer | MERN Stack Developer
                    based in javaScript, React, Node.js, Express.js, MongoDB</p>

                <p>
                    I am a hard-working web developer having an urge for creating elegant solutions within the least possible time. I am
                    able to work in both self-starting and collaborative environments being focused on achieving proven results under
                    strict deadlines. I am passionate to take a challenging position at a prestigious company that will expand my learning
                    and building skills.
                </p>

                <div className=" flex  justify-center pt-8 gap-5 ">
                    <a target='_blank' rel="noreferrer" className='kib_inside_effect text-[#969eb1] rounded-full py-3 px-3' href="https://www.linkedin.com/in/kibria-khandaker/" ><FaGithubSquare /></a>
                    <a target='_blank' rel="noreferrer" className='kib_inside_effect text-[#969eb1] rounded-full py-3 px-3' href="https://github.com/kibria-khandaker" ><FaLinkedin /></a>
                </div>

            </div>
        </div>
    );
};

export default About;