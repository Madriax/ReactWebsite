import React from "react";
import profile from "../Assets/img/alex.jpg"

function Hero() {

    return (
        <section className="hero">
            <div className="info">
                <h1>Alexandre Duvois</h1>
                <h2>Back-end developer, Security enthusiast</h2>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet asperiores cumque deserunt dignissimos fugit maiores nam natus, nisi nostrum qui similique. Consectetur eligendi nihil odit officia quibusdam, ullam voluptate.</span><span>Atque autem cum, dolores eligendi expedita rerum saepe sint suscipit voluptatibus voluptatum! Aliquam assumenda beatae debitis doloribus in labore magni molestias neque, vero. Debitis illum modi obcaecati perferendis repellendus voluptates?</span></p>
                <button>Download CV</button>
            </div>
            <img src={profile} alt=""/>
        </section>
    );
}

export default Hero;