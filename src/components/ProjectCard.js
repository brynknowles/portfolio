import React from "react";

function ProjectCard({ project }) {
    console.log("project in ProjectCard ", project);
    const { id, name, summary, primaryTechnology, link, code, demo, image } = project
    return (
        <div>
            <h4>{name}</h4>
            <img src={image} alt={name} style={{ height: 100 }} />
            <p>{summary}</p>
            <button>{code}Code</button>
            <button>{demo}Demo</button>
        </div>
    );
}

export default ProjectCard;
