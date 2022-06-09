import React from 'react';

const MyProjectDetailsModal = ({ modalProjectData }) => {
    console.log('projects', modalProjectData);
    return (
        <>
            <input type="checkbox" id="productDetailsModal" className="modal-toggle" />
            {/* border-4 border-red-600  */}
            <div class="modal">
                <div class="modal-box w-8/12 max-w-4xl rounded-none shadow-2xl shadow-white  text-center">

                    <label for="productDetailsModal" class="kib_inside_effect text-[#fd4475]  px-4 py-2 rounded-full absolute right-5 top-5 flex justify-center items-center">✕</label>

                    <h3 className="font-semibold text-lg mt-5 mb-10 text-[#8a92a5] "> {modalProjectData?.name} </h3>

                    <div className='grid grid-cols-2 gap-10'>
                        {
                            modalProjectData?.allImg.map(arryImg => (
                                <img className='kib_box_shadow' src={arryImg} alt="" />
                            ))
                        }
                    </div>

                    <p className='my-10 px-5 text-[#98a0af]'>{modalProjectData?.shortText}</p>

                    <a target='_blank' rel="noreferrer"  className='kib_inside_effect text-[#8a92a5] rounded-md py-3 px-3  mb-10 inline-block' href={modalProjectData?.pUrl} > Check Live Website </a>

                    <img className='kib_box_shadow w-3/5 mx-auto' src={modalProjectData?.img1} alt="" />

                    {/* close btn  */}
                    <div className="modal-action">
                        <label htmlFor="productDetailsModal" className="kib_inside_effect text-[#fd4475]   px-4 py-2 rounded-md mb-5 mr-4">close</label>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MyProjectDetailsModal;