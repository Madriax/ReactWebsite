import React from 'react';
import profile from '../Assets/img/alex.jpg';
import discord from '../Assets/icons/discord.svg';
import github from '../Assets/icons/github.svg';
import linkedin from '../Assets/icons/linkedin.svg';
import twitter from '../Assets/icons/twitter.svg';
import youtube from '../Assets/icons/youtube.svg';
import Navbar from "../Components/Navbar";

function Home() {
    return (
        <div className="intro">
            <div className="content">

                <Navbar />

                <img src={profile} alt="Alexandre Duvois" className="logo" />

                    <div className="infos">
                        <h1>Alexandre Duvois</h1>
                        <h2>Backend developer, Cybersecurity enthusiast</h2>
                    </div>

                    <div className="social">
                        <a href="https://discord.gg/vfFYu6j8yM" target="_blank" rel="noreferrer">
                            <img src={discord} alt="Discord" />
                        </a>
                        <a href="https://github.com/madriax/" target="_blank" rel="noreferrer">
                            <img src={github} alt="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/alexandre-duvois/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://twitter.com/alexandreDUVOIS/" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a href="https://youtube.com/madriaxgaming/" target="_blank" rel="noreferrer">
                            <img src={youtube} alt="Youtube" />
                        </a>
                    </div>
            </div>
        </div>
    );
}

export default Home;