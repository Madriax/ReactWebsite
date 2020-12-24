import React from 'react';
import profile from '../Assets/img/alex.jpg';
import discord from '../Assets/icons/discord.svg';
import github from '../Assets/icons/github.svg';
import linkedin from '../Assets/icons/linkedin.svg';
import twitter from '../Assets/icons/twitter.svg';
import youtube from '../Assets/icons/youtube.svg';
import Navbar from "../Components/Navbar";
import Hero from '../Components/Hero';
import About from "../Components/About";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
        </>
    );
}

export default Home;