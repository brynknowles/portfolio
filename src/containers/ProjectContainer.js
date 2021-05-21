import React from "react";
import ProjectCard from "../components/ProjectCard";

function ProjectContainer(props) {
    const renderProjectCards = (projects) => {
        console.log(projects);
        return projects.map((project) => <ProjectCard project={project} />);
    }

    return (
        <div>
            {props.projects ? (
                renderProjectCards(props.projects)
            ) : (
                <div>nope</div>
            )}
        </div>
    );
}

export default ProjectContainer;