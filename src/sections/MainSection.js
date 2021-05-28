import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LPImg from '../images/LitterPickerImage.png'
import ProjectContainer from '../containers/ProjectContainer.js'; 
import styled from "styled-components";

function MainSection() {
    // commented out state and projects container for now
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

    return (
        <div>
            {projects === "" ? (
                <div> nada </div>
            ) : (
                <ProjectContainer projects={projects} />
            )}
        </div>
    );
}

export default MainSection;