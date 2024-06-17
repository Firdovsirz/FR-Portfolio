import React from 'react'
import Box from '@mui/material/Box';
import "../Resume/Resume.css"
import LinearProgress from '@mui/material/LinearProgress';

export default function Resume() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const duration = 1000;
        const startTime = performance.now();

        const updateProgress = (timestamp) => {
            const elapsed = timestamp - startTime;
            const newProgress = Math.min((elapsed / duration) * 70, 70);
            setProgress(newProgress);
            if (newProgress < 100) {
                requestAnimationFrame(updateProgress);
            }
        };

        requestAnimationFrame(updateProgress);
    }, []);
    let skillPercentage = [
        {
            skill: 'Html5',
            percentage: 100
        }, {
            skill: 'Css',
            percentage: 95
        }, {
            skill: 'JavaScript',
            percentage: 95
        }, {
            skill: 'React',
            percentage: 90
        }, {
            skill: 'Material UI',
            percentage: 100
        }, {
            skill: 'Redux',
            percentage: 90
        }, {
            skill: 'Git',
            percentage: 90
        }

    ]
    return (
        <>
            <section id='resumeSection' className='resume-section'>
                <div className='my-profile'>
                    <h2>MY <span>PROFILE</span></h2>
                    <ul>
                        <li><span>Name</span> Firdovsi Rzaev</li>
                        <li><span>Address</span> Azerbaijan, Sumgait city, Sulh 189</li>
                        <li><span>Phone</span> +994554511870</li>
                        <li><span>Email</span> firdovsirz@gmail.com</li>
                        <li><span>GitHub</span><a href="https://github.com/Firdovsirz">Firdovsirz</a></li>
                        <li><span>Website</span> <a href="#">www.FR.vercel.app</a></li>
                    </ul>
                </div>
                <div className='some-skills'>
                    <h2>Front-End <span>SKILLS</span></h2>
                    <p>Here are the front-end skills I know and had the opportunity to work with.</p>
                    <div className='skill-main'>
                        {skillPercentage.map((element) => {
                            return (
                                <div>
                                    <div className='skill-desc'>
                                        <p className='skill-title'>{element.skill}</p>
                                        <p className='skill-percentages'>{element.percentage} %</p>
                                    </div>
                                    <Box sx={{
                                        width: '100%', ' & .MuiLinearProgress-bar': {
                                            background: '#eb5424'
                                        }, ' & .css-eglki6-MuiLinearProgress-root': { backgroundColor: "rgb(220, 220, 220)", borderRadius: '20px' }
                                    }}>
                                        < LinearProgress variant="determinate" value={element.percentage} />
                                    </Box>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section >
        </>
    )
}