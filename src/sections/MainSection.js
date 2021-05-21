import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import ProjectContainer from "../containers/ProjectContainer";
import styled from "styled-components";


function MainSection() {
    const [projects, setProjects] = useState("");

    //this is where you will put your array of project objects to iterate over and display in the return
    // normally a useEffect would go here like so:
        // useEffect(() => {
        //     fetch("http://www.someaddress.com/api/projects/all")
        //     .then((resp) => resp.json())
        //     .then((projectsAPI) => setProjects(projectsAPI));
        // }, []);

    return (
        <div>
            <SideBar />
            {projects === "" ? (
                <div> nada </div>
            ) : (
                <ProjectContainer projects={projects} />
            )}
        </div>
    );
}

export default MainSection;