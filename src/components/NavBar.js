import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

function NavBar() {
    return(
        <div className="navigation">
            <div className="navigation-sub">
                <Link to="/" className="item">Home</Link>
                <Link to="/about" className="item">About</Link>
                <Link to="/projects" className="item">Projects</Link>
                <Link to="/articles" className="item">Articles</Link>
                <Link to="/contact" className="item">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;