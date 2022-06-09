import React from 'react';

const Contact = () => {
    return (
        <div className=' text-center'>
            <div className="mt-3">
                {/* <div className="kib_box_shadow rounded-3xl w-5/12 mx-auto">
                    <h1 className='gradient_text_box text-5xl py-10'> Contact Me </h1>
                </div>
                <p className='text-[#8a92a5] pt-10'>
                    Please send me massage for Start Your Project with me Or your any inquiry or
                </p>

                <p className='text-[#8a92a5] pt-7 pb-4 font-bold'> Send Massage </p> */}

                {/* ------------------  */}
                <div class="hero ">
                    <div class="hero-content flex-col w-full">
                        <div class="text-center px-5">
                            <h1 class="text-4xl font-bold text-[#8a92a5]"> Contact Me </h1>
                            <p class="py-6 text-[#8a92a5]">Feel free to contact with me</p>
                        </div>

                        <div class="card flex-shrink-0 w-full md:w-3/5 kib_box_shadow">
                            <div class="card-body">
                                <div class="form-control">
                                    <input type="text" placeholder="Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="email" placeholder="email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <textarea placeholder="Type your Text" class="input input-bordered" />
                                </div>
                                <div class="form-control w-2/5 mx-auto mt-2">
                                    <button class="kib_inside_effect py-2 px-5 text-[#8a92a5] bg-[#ebecf0] outline-none border-0 rounded"> Send </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <button className="kib_inside_effect py-2 px-5 text-[#8a92a5] bg-[#ebecf0] outline-none border-0 rounded ">
                    Discussion About Your Project
                </button>
                <br />
                <br />
                <button className="kib_inside_effect py-2 px-5 text-[#8a92a5] bg-[#ebecf0] outline-none border-0 rounded ">
                    For Your inquiry
                </button> */}

            </div>
        </div>
    );
};

export default Contact;