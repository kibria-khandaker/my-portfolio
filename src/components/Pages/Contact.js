import React from 'react';
import ContactFormDiscussionAboutProject from './ContactFormDiscussionAboutProject';
import ContactFormRequestMe from './ContactFormRequestMe';

const Contact = () => {
    return (
        <div className=' text-center'>
            <div className="my-12">
                <div className="kib_box_shadow rounded-3xl w-5/12 mx-auto">
                    <h1 className='gradient_text_box text-2xl py-7'> Send Email with the option </h1>
                </div>
                <p className='text-[#8a92a5] pt-7 pb-12'>
                    Please send me massage for Start Your Project with me Or your any inquiry or
                </p>

                {/* ---- Both Modal Open Btn --------  */}
                <label htmlFor="contactFormDiscussionModal" className="kib_inside_effect py-3 px-5 text-[#8a92a5] bg-[#ebecf0] outline-none border-0 rounded cursor-pointer">
                    Discussion About Your Project
                </label>
                <br /> <br /> <br />
                <label htmlFor="contactFormRequestModal" className="kib_inside_effect py-3 px-5 text-[#8a92a5] bg-[#ebecf0] outline-none border-0 rounded cursor-pointer">
                    For any Request/Inquiry
                </label>

            </div>



            {/* ------------------------ All Modal body start */}            
            {/* - Modal body for Discussion Contact form -  */}
            <input type="checkbox" id="contactFormDiscussionModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-semibold text-lg text-[#8a92a5] ">
                        Contact with me for Discussion About your Project
                    </h3>
                    <ContactFormDiscussionAboutProject />
                    <div class="modal-action">
                        <label htmlFor="contactFormDiscussionModal"
                            class="kib_inside_effect text-[#fd4475] py-2 px-4 rounded">
                            Close
                        </label>
                    </div>
                </div>
            </div>

            {/* - Modal body for Request/Inquiry Contact form -  */}
            <input type="checkbox" id="contactFormRequestModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-semibold text-lg text-[#8a92a5] ">
                        Contact With me for any Request/Inquiry
                    </h3>
                    <ContactFormRequestMe />
                    <div class="modal-action">
                        <label htmlFor="contactFormRequestModal"
                            class="kib_inside_effect text-[#fd4475] py-2 px-4 rounded">
                            Close
                        </label>
                    </div>
                </div>
            </div>
            {/* ------------------------ All Modal body end  */}

        </div>
    );
};

export default Contact;