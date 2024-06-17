import React from 'react'
import "../MyWork/MyWork.css"
import ReactLogo from "/src/assets/react-logo.png"
import ResponsiveWeb from "/src/assets/res-web.jpg"
import VersionControl from "/src/assets/version-control.png"

export default function MyWork() {
    let works = [
        {
            title: "React",
            desc: "React is a free and open-source JavaScript library developed by Facebook for building user interfaces."
        }, {
            title: "Responsive Web Page",
            desc: "A responsive web page is a web page that adjusts and adapts its layout and content based on the size and capabilities of the device on which it is viewed."
        }, {
            title: "Version Control",
            desc: "Version control is a system that records changes to files over time, allowing you to recall specific versions later.It is commonly used in software development and other applications where files undergo frequent changes"
        }
    ]
    let workLogos = [ReactLogo, ResponsiveWeb, VersionControl]
    return (
        <>
            <section id='workSection' className='my-work-section'>
                <h2 className='my-work-heading'>My <span>Work</span></h2>
                <div className='work-cards'>
                    {works.map((item, index) => {
                        return (
                            <div className='work-card'>
                                <img src={workLogos[index]} alt="" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
                                <h3 className='work-card-title'>{item.title}</h3>
                                <div className='work-card-line' />
                                <p className='work-card-desc' style={{ height: "150px" }}>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
