import React from 'react';
// import useProjectData from '../../hooks/useProjectData';

const MyProjectDetailsModal = ({ modalProjectData }) => {
    console.log('projects', modalProjectData);
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            {/* border-4 border-red-600  */}
            <div class="modal">
                <div class="modal-box w-8/12 max-w-4xl">
                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg"> {modalProjectData?.name} </h3>
                    <img className='w-2/6' src={modalProjectData?.allImg[0]} alt="" />

                    <img className='w-2/6' src={modalProjectData?.allImg[2]} alt="" />
                    <img className='w-2/6' src={modalProjectData?.img1} alt="" />
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