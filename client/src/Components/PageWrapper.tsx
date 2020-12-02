import React from "react";
import Navbar from "./Navbar";
import {Props} from "../Types/Props";

function PageWrapper({children}: Props) {
    return (
        <>
            <div className="blog-intro">
                <Navbar />
            </div>

            {children}
        </>
    )
}

export default PageWrapper;