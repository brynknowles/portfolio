import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thumbnail({ project }) {
    const { link, title, imageURL, code, demo } = project
    return (
        <div className="project">
            <Link to={link}>
                <div className="project-title">{title}</div>
                <div className="project-image">
                    <img src={imageURL} alt="Project Image" width="500"/>
                </div>
                <div className="project-code">
                    <button>{code}</button>
                </div>
                <div className="project-demo">
                    <button>{demo}</button>
                </div>
            </Link>
        </div>
    )
}

export default Thumbnail;