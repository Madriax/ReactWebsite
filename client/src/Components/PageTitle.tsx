import React from "react";
import {PageTitleProps} from "../Types/PageTitleProps";

function PageTitle(props: PageTitleProps) {

    return (
        <section className="page-title">
            <h1>{props.title}</h1>
        </section>
    );
}

export default PageTitle;