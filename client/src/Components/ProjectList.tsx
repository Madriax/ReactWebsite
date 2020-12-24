import React from "react";
import Project from "./Project";

function ProjectList() {

    return (
        <section className="project-list">
            <div className="content">
                <div className="titles">
                    <h1>Featured projects</h1>
                    <h2>Discover some of my works</h2>
                </div>
                <div className="projects">
                    <Project title="Titre" description="Une description Une description Une description Une description Une description Une description Une description Une description" image_url="https://placehold.it/350x350" />
                    <Project title="Autre article" description="Une description Une description Une description Une description Une description Une description Une description Une description" image_url="https://placehold.it/350x350" />
                    <Project title="Et un dernier article" description="Une description Une description Une description Une description Une description Une description Une description Une description" image_url="https://placehold.it/350x350" />
                </div>
                <div className="read-more">
                    <button>See more</button>
                </div>
            </div>
        </section>
    );
}

export default ProjectList;