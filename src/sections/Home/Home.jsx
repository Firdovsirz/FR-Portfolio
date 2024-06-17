import React from 'react'
import "../Home/Home.css"
import { useEffect } from 'react';


export default function Home() {
    return (
        <>
            <section id='homeSection' className='home-section'>
                <h1 className='home-name'>Firdovsi Rzaev</h1>
                <h2 className='home-job-title'>Front-End Developer</h2>
                <p className='home-job-desc'>I am a <span>Front-End Developer</span> creating modern and responsive web pages. Let us work together. Thank you!</p>
                <a href="#workSection"><button className='home-btn'>Let's Begin</button></a>
            </section>

        </>
    )
}
