import React from 'react';
// import useProjectData from '../../hooks/useProjectData';

const MyProjectDetailsModal = ({ modalProjectData }) => {
    console.log('projects', modalProjectData);
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            {/* border-4 border-red-600  */}
            <div class="modal">
                <div class="modal-box w-8/12 max-w-4xl rounded-none shadow-2xl shadow-white  ">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg mt-5 mb-10"> {modalProjectData?.name} </h3>
                    <div className='grid grid-cols-2 gap-10'>
                        {
                            modalProjectData?.allImg.map(arryImg => (
                                <img className='kib_box_shadow' src={arryImg} alt="" />
                            ))
                        }
                    </div>
                    <p className='my-10 px-5 text-[#98a0af]'>{modalProjectData?.shortText}</p>
                    <img className='kib_box_shadow w-3/5 mx-auto' src={modalProjectData?.img1} alt="" />
                    <p className="py-4">
                        <p>{modalProjectData?.name}</p>
                    </p>

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-sm">close</label>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MyProjectDetailsModal;