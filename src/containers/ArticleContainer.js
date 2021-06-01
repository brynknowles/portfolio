import React from "react"
import { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard.js';
import FormsHooksImg from '../images/FormsHooks.png';
import ChromeDevToolsImg from '../images/ChromeDevTools.png';
import RubyAppConvImg from '../images/RubyAppConv.png';
import RubyEnumsImg from '../images/RubyEnums.png';

function ArticleContainer(props) {

    const [articles, setArticles] = useState("");

    const articlesArray = [
        {
            linkURL: "https://medium.com/swlh/creating-forms-with-react-hooks-fe02b6eaad5e",
            title: "Creating Forms with React Hooks",
            imageURL: FormsHooksImg,
            summary: "How to build a basic search form using React Hooks",
        },
        {
            linkURL: "https://medium.com/swlh/the-basics-of-chrome-devtools-4d69a102a699",
            title: "The Basics Of Chrome Dev Tools",
            imageURL: ChromeDevToolsImg,
            summary: "Some ways to use Chrome Dev Tools when developing an app",
        },
        {
            linkURL: "https://medium.com/swlh/converting-your-first-ruby-cli-app-into-a-ruby-on-rails-web-app-dc094d9edb03",
            title: "Converting Your First Ruby CLI App Into a Ruby on Rails Web App",
            imageURL: RubyAppConvImg,
            summary: "Step-by-step instructions on creating a Ruby On Rails web app from a Ruby CLI app",
        },
        {
            linkURL: "https://bryn-knowles.medium.com/be-select-ive-when-choosing-your-enumerables-fd9839a28485",
            title: "Be .select-iv When Choosing Your Enumerables",
            imageURL: RubyEnumsImg,
            summary: "A Ruby journey to help you decide whether to use .select or .map",
        }
    ]

    useEffect(() => {
        setArticles(articlesArray)
        console.log("articles after setArticles in ArticleContainer ", articles)
    }, [])

    const renderArticleCards = (articles) => {
        console.log("projects in renderArticleCards ", articles);
        return articles.map((article) => <ArticleCard key={article.title} article={article} />);
    }
    return (
        <div>
            <h1>Articles</h1>
            {articles ? (
                renderArticleCards(articles)
            ) : (
                <div>nope</div>
            )}
        </div>
    )
}

export default ArticleContainer;