import { useEffect, useState } from 'react';

const useProjectData = () => {
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/kibria-khandaker/my-portfolio/main/public/allProjectData.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])

    return [projects, setProjects];
}

export default useProjectData;