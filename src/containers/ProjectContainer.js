import React from "react"
import ProjectCard from "../components/ProjectCard"

function ProjectContainer(props) {

    const renderProjectCards = (projects) => {
        console.log("projects in renderProjectCards ", projects);
        return projects.map((project) => <ProjectCard key={project.title} project={project} />);
    }

    return (
        <div>
            <h1>Projects</h1>
            {props.projects ? (
                renderProjectCards(props.projects)
            ) : (
                <div>nope</div>
            )}
        </div>
    );

}

export default ProjectContainer;
