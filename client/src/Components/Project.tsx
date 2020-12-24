import React from "react";
import {ProjectProps} from "../Types/ProjectProps";

function Project(props: ProjectProps) {

    return (
        <div className="project">
            <img src={props.image_url} alt=""/>
            <div className="infos">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Project;