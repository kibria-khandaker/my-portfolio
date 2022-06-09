import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProjectData from '../../hooks/useProjectData';
import MyProjectDetailsModal from './MyProjectDetailsModal';

const MyPortfolio = () => {

    const [projects, setProjects] = useProjectData();
    let navigate = useNavigate();

    const [modalProjectData, setModalProjectData] = useState()

    const handleDetail = (id) => {
        navigate(`/projectDetails/${id}`);
    }

    return (
        <div>
            <div className="kib_box_shadow bg-[#ebecf0] mt-8 text-center rounded-2xl w-2/5 mx-auto">
                <h1 className='gradient_text_box text-3xl py-7'>My Portfolio</h1>
            </div>

            <p className='text-[#7a8190] my-14 text-center w-3/5 mx-auto'>
                Here is my Some Client and Personal project, Every project have Details in here
            </p>

            {/* project items section start */}
            <div className='w-full p-5 grid grid-cols-3 gap-14'>
                {
                    projects.map(project => (
                        <div key={project._id} className="card card-compact bg-base-100 rounded-lg shadow-xl kib_box_shadow">
                            <p className='text-center font-thin bg-black text-white py-2'>{project.name}</p>
                            <figure><img src={project.img1} alt="Shoes" /></figure>

                            <label onClick={() => setModalProjectData(project)} htmlFor="my-modal-6" className="btn modal-button">open modal</label>

                            <button onClick={() => handleDetail(project._id)} className="btn btn-ghost rounded-none rounded-b"> Projects Details </button>
                        </div>
                    ))
                }

            </div>
            {/* xxxxxxxxxxxxxxxxx Start  */}
            <MyProjectDetailsModal modalProjectData={modalProjectData}></MyProjectDetailsModal>
            {/* xxxxxxxxxxxxxxxxx end  */}
        </div>
    );
};

export default MyPortfolio;