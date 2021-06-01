import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard({ article }) {
const { linkURL, title, imageURL, summary } = article

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
}

    return (
        <div>
            <h4>{title}</h4>
            <img src={imageURL} alt={title} style={{ height: 100 }} onClick={() => openInNewTab(linkURL)}/>
            <p>{summary}</p>
        </div>
    )
}

export default ArticleCard
