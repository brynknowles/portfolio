import React from "react";

function ProjectCard({ project }) {
    console.log("project in ProjectCard ", project);
    const { title, imageURL, summary, code, demo } = project
    return (
        <div>
            <h4>{title}</h4>
            <img src={imageURL} alt={title} style={{ height: 100 }} />
            <p>{summary}</p>
            <button>{code}</button>
            <button>{demo}</button>
        </div>
    );
}

export default ProjectCard;
