import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjectData from '../../hooks/useProjectData';

const MyProjectDetails = () => {

    const [projects, setProjects] = useProjectData();
    const [singleItems, setSingleItems] = useState({});

    const { id } = useParams();
    useEffect(() => {
        let project = projects?.find(p => p?.id == id)
        setSingleItems(project);
    }, [projects, id])


    return (
        <div>
            <p>{id}</p>
            <p>{singleItems?.length}</p>
            <p>{singleItems?.name}</p>
        </div>
    );
};

export default MyProjectDetails;