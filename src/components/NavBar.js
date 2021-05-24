import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        // <div>
        //     <h1>Logo</h1>
        //     <h1>Name</h1>
        //     <p>About</p>
        //     <p>Portfolio</p>
        //     <p>Contact</p>
        // </div>
        <div className="navigation">
            <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/about" className="item">About</Link>
            </div>
        </div>
    )
}

export default NavBar;