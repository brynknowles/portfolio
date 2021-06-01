import React from "react";
import { useState, useEffect } from 'react';
import ProjectCard from "../components/ProjectCard";
import LPImg from '../images/LitterPickerImage.png'

function ProjectContainer() {

    const [projects, setProjects] = useState("");

    const projectsArray = [
        {
            // link: "/litterpicker",
            imageURL: LPImg,
            title: "LitterPicker",
            summary: "A single page web app where a user can create litter cleanup events",
            code: "code",
            demo: "demo"
        },
        {
            // link: "/my-portfolio",
            imageUrl: "Project imageURL",
            title: "My Portfolio",
            summary: "",
            code: "code",
            demo: "demo"
        },
        {
            // link: "/monorail",
            imageUrl: "Project imageUrl",
            title: "MonorailTCG",
            summary: "",
            code: "code",
            demo: "demo"
        },
        {
            // link: "/brelby",
            imageUrl: "Project imageUrl",
            title: "Brelby",
            summary: "",
            code: "code",
            demo: "demo"
        },
        {
            // link: "/ruby-icecream-shop",
            imageUrl: "Project imageUrl",
            title: "Ruby Ice Cream Shop",
            summary: "",
            code: "code",
            demo: "demo"
        },
    ]

    useEffect(() => {
        setProjects(projectsArray)
        console.log("projects after setProjects in MainSection ", projects)
    }, [])

    const renderProjectCards = (projects) => {
        console.log("projects in renderProjectCards ", projects);
        return projects.map((project) => <ProjectCard key={project.title} project={project} />);
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
