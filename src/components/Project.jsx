import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {

    const [projectData, setProjectData] = useState([]);

    // Get params
    const { id } = useParams();

    // Get project wiht given id
    useEffect(() => {
        const url = `https://fridarosengren.com/portf/wp-json/wp/v2/posts/${id}?_embed`;
        fetch(url).then(res => res.json()).then(
            res => {
                // Visa laddningssymbol innan detta händer
                setProjectData(res);
                console.log(res)
            },
            err => {
                console.log(err);
            }
        )
    }, [id]);

    return(
        <h1>This is a project {projectData.content && projectData.content.rendered}</h1>
    )
}

export default Project;