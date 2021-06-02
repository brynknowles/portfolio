import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard({ article }) {
const { link, name, image, summary } = article

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}

    return (
        <div>
            <h4>{name}</h4>
            <img src={image} alt={name} style={{ height: 100 }} onClick={() => openInNewTab(link)}/>
            <p>{summary}</p>
        </div>
    )
}

export default ArticleCard
