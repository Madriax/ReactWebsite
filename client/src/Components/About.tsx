import React from "react";
import setup from "../Assets/img/setup.jpg";

function About() {

    return (
        <section className="about">
            <div className="content">
                <div className="titles">
                    <h1>About me</h1>
                    <h2>A passion for Cybersecurity</h2>
                </div>
                <div className="infos">
                    <img src={setup} alt=""/>
                    <div className="text">
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolore dolorum earum enim, impedit ipsam ipsum laudantium, minima numquam pariatur perferendis placeat porro quae reprehenderit similique! Architecto in perspiciatis veritatis.</span><span>Alias cupiditate et excepturi maxime nihil odio optio quod sapiente? Ab, assumenda aut consequatur cupiditate est eum in iure magnam magni minima minus, nostrum placeat possimus quia repellendus repudiandae ut.</span><span>Excepturi in incidunt iusto necessitatibus omnis quam reprehenderit sed totam! Ad aliquid aut deserunt dignissimos dolor doloremque exercitationem facere harum ipsam iure minima modi nihil nisi porro quasi recusandae, sed.</span><span>Consectetur cumque dicta facere officiis. Architecto eveniet hic id illo impedit iste odit possimus sapiente tempore? Amet blanditiis dolore explicabo laboriosam nulla officia placeat quibusdam quos vero voluptatem. Iste, rerum.</span><span>Cumque dignissimos eaque enim est excepturi exercitationem explicabo facere facilis libero nisi qui quia quisquam repellat repellendus, repudiandae tenetur vitae? Aperiam dolorum eos et excepturi ipsam maxime non quam. Aliquid.</span></p>
                    </div>

                </div>
                <div className="location">
                    <h3><span className="title">Living in</span><br/>Strasbourg</h3>
                    <h3><span className="title">IT Engineering Student at</span><br/>CESI Strasbourg</h3>
                </div>
                <div className="read-more">
                    <button>Read more</button>
                </div>
            </div>
        </section>
    );
}

export default About;