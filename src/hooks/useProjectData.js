import { useEffect, useState } from 'react';

const useProjectData = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('/allProjectData.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])

    return [projects, setProjects];
}

export default useProjectData;