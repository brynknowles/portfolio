import React from "react";
import { useState, useEffect } from 'react';
import ProjectCard from "../components/ProjectCard";
import LtrPkrImg from '../images/LitterPicker.png';
import PortfolioImg from '../images/PortfolioFirst.png';
// import MonorailTCGImg from '../images/MonorailTCG.png'
import BrelbysImg from '../images/Brelbys.png';
import RICShopImg from '../images/RubyIceCreamShop.png';


function ProjectContainer() {

    const [projects, setProjects] = useState("");

    const projectsArray = [
        {
            imageURL: LtrPkrImg,
            title: "LitterPicker",
            summary: "A single page web app where a user can create litter cleanup events. Built with Ruby on Rails for the backend, React.js and CSS Flexbox for the frontend.",
            code: "code",
            demo: "demo"
        },
        {
            imageUrl: PortfolioImg,
            title: "My Portfolio",
            summary: "This is my personal portfolio. Built with React.js and Styled Components.",
            code: "code",
            demo: "demo"
        },
        {
            imageUrl: BrelbysImg,
            title: "Brelby's",
            summary: "A single page web app where a user can shop for wine and cupcakes, with recommendations for pairings of the two. Built with Ruby on Rails and styled using Vanilla CSS.",
            code: "code",
            demo: "demo"
        },
        {
            imageUrl: "Project imageUrl",
            title: "MonorailTCG",
            summary: "A single page web app where a user can create Simpsons trading cards for their collection. Built with Vanilla JS.",
            code: "code",
            demo: "demo"
        },
        {
            imageUrl: RICShopImg,
            title: "Ruby Ice Cream Shop",
            summary: "A single page CLI app where a user can order ice cream. Built with Ruby.",
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
