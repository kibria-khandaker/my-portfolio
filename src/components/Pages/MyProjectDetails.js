import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjectData from '../../hooks/useProjectData';

const MyProjectDetails = () => {

    const [projects, setProjects] = useProjectData();
    const [singleItems, setSingleItems] = useState({});

    const { id } = useParams();
    useEffect(() => {
        let project = projects?.find(p => p?._id == id)
        setSingleItems(project);
    }, [projects, id])

// console.log('projects', projects);
// console.log('singleItems', singleItems);

    return (
        <div>
            <p>{id}</p>
            <p>{singleItems?.name}</p>
        </div> 
    );
};

export default MyProjectDetails;