import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div className="navigation">
            <div className="navigation-sub">
                <Link to="/" className="item">Projects</Link>
                <Link to="/articles" className="item">Articles</Link>
                <Link to="/about" className="item">About</Link>
                <Link to="/contact" className="item">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;