import React from 'react';

const Contact = () => {
    return (
        <div className=' text-center'>
            <div className="mt-10">
                <div className="kib_box_shadow rounded-3xl w-5/12 mx-auto">
                    <h1 className='gradient_text_box text-5xl py-10'> Contact Me </h1>
                </div>
                <p className='text-[#8a92a5] pt-10'>
                    Please send me massage for Start Your Project with me Or your any inquiry or
                </p>
                <p className='text-[#8a92a5] pt-7 pb-4 font-bold'> Send Massage </p>
                <button className="kib_inside_effect py-2 px-5 text-[#8a92a5] bg-[#ebecf0] outline-none border-0 rounded ">
                    Discussion About Your Project
                </button>
                <br />
                <br />
                <button className="kib_inside_effect py-2 px-5 text-[#8a92a5] bg-[#ebecf0] outline-none border-0 rounded ">
                    For Your inquiry
                </button>

            </div>
        </div>
    );
};

export default Contact;