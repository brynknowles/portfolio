import React from "react"
import Thumbnail from "./Thumbnail"
import LPImg from './images/LitterPickerImage.png'
// import logo from '../public/logo192.png';

// console.log("litter picker image", LPImg)

function Projects(props) {
    const projectsArray = [
        {
            link: "/litterpicker",
            imageURL: {LPImg},
            title: "LitterPicker",
            code: "code",
            demo: "demo"
        },
        {
            link: "/my-portfolio",
            imageUrl: "Project imageUrl",
            title: "My Portfolio",
            code: "code",
            demo: "demo"
        },
        {
            link: "/monorail",
            imageUrl: "Project imageUrl",
            title: "MonorailTCG",
            code: "code",
            demo: "demo"
        },
        {
            link: "/brelby",
            imageUrl: "Project imageUrl",
            title: "Brelby",
            code: "code",
            demo: "demo"
        },
        {
            link: "/ruby-icecream-shop",
            imageUrl: "Project imageUrl",
            title: "Ruby Ice Cream Shop",
            code: "code",
            demo: "demo"
        },
    ]

    const displayProjects = projectsArray.map((project) => <Thumbnail key={project.title} project={project} />)
    return (
        <div>
            <h1>Projects</h1>
            {displayProjects}
        </div>
    )
}

export default Projects;