import React from "react";
import setup from "../Assets/img/setup.jpg";
import Article from "./Article";

function ArticleList() {

    return (
        <section className="article-list">
            <div className="content">
                <div className="titles">
                    <h1>Featured projects</h1>
                    <h2>Discover some of my works</h2>
                </div>
                <div className="articles">
                    <Article />
                    <Article />
                    <Article />
                </div>
                <div className="read-more">
                    <button>See more</button>
                </div>
            </div>
        </section>
    );
}

export default ArticleList;