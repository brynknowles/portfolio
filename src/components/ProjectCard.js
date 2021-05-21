import React from "react";

function ProjectCard(props) {
    console.log(props.project);
    
    return (
        <div>
            <h4>{props.project.name}</h4>
            <img src={props.project.image_url} style={{ height: 100 }} />
            <p>{props.project.summary}</p>
        </div>
    );
}

export default ProjectCard;