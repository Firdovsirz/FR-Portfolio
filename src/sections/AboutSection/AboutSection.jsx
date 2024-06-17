import React from 'react'
import "../AboutSection/AboutSection.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function AboutSection() {
    return (
        <>
            <section id='aboutSection' className='about-section'>
                <div className='about-text-container'>
                    <div className='about-text'>
                        <h2 className='about-head-me-txt'>
                            THIS IS <span className='about-me-txt'>ME</span>
                        </h2>
                        <h2 className='about-head-job-txt'>
                            FRONT-END <span className='about-job'>DEVELOPER</span>
                        </h2>
                        <p>
                        I am a first-year computer science student at Azerbaijan Technical University. At the same time, I am a front-end developer. I finished the Front-End course successfully at Codeart Training Center. At this time, I had the opportunity to learn Front-End technologies and work with them.
                        </p>
                    </div>
                </div>
                <div className='about-social-medias'>
                    <div className='linkedIn'>
                        <a href="https://www.linkedin.com/in/firdovsi-rzaev-136194234/">
                            <div className='lidIn-icon'>
                                <LinkedInIcon style={{ color: "#fff", fontSize: "90px", marginRight: "20px" }} />
                            </div>
                            <div className='lidIn-txt'>
                                <p>LINKEDLIN</p>
                            </div>
                        </a>
                    </div>
                    <div className='github'>
                        <a href="">
                            <div className='github-icon'>
                                <GitHubIcon style={{ color: "#fff", fontSize: "90px", marginRight: "20px" }} />
                            </div>
                            <div className='git-txt'>
                                <p>GITHUB</p>
                            </div>
                        </a>
                    </div>
                    <div className='telegram'>
                        <a href="https://web.telegram.org/k/#@firdovsirz">
                            <div className='telegran-icon'>
                                <TelegramIcon style={{ color: "#fff", fontSize: "90px", marginRight: "20px" }} />
                            </div>
                            <div className='telegram-txt'>
                                <p>TELEGRAM</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
