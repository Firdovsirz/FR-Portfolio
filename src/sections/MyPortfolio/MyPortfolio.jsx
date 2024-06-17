import React from 'react'
import "../MyPortfolio/MyPortfolio.css"
import Project2 from "/src/assets/project2.webp"
import Sierra from "/src/assets/sierra.jpg"

export default function MyPortfolio() {
    return (
        <>
            <section id='portfolioSection' className='my-portfolio-section'>
                <h2 className='port-heading'>My <span>Portfolio</span></h2>
                <div className='port-main'>
                    <a href="https://sierra-mu.vercel.app/">
                        <img src={Sierra} alt="project" />
                        <img src={Project2} alt="second-project"/>
                    </a>
                    <p><a href="https://github.com/Firdovsirz"><span>+7</span> repositories in GitHub</a></p>
                </div>
            </section>
        </>
    )
}
