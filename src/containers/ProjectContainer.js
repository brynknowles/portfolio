import React from "react";
import projects from "../projectData.js";
import ProjectCard from "../components/ProjectCard";

function ProjectContainer() {

    const renderProjectCards = (projects) => {
        console.log("projects in renderProjectCards ", projects);
        return projects.map((project) => <ProjectCard key={project.id} project={project} />);
    }

    return (
        <div>
            <h1>Projects</h1>
            {projects ? (
                renderProjectCards(projects)
            ) : (
                <div>nope</div>
            )}
        </div>
    );

}

export default ProjectContainer;
