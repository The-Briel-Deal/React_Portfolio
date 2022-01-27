import React from 'react';
import AnimatedPage from '../animations/AnimatedPage';
import ProjectBody from '../components/ProjectBody';
import Head from '../components/Head';

const titleText = <span>Projects.</span>
const subtitleText = <span>Here are some of my <strong>favorite</strong> personal projects.</span>
const avatar = <i className="fas fa-code-branch"></i>


const Projects = () => {
    return <div>
        <AnimatedPage>
            <Head
                titleText={titleText}
                subtitleText={subtitleText}
                avatar={avatar}
            />
            <ProjectBody />
        </AnimatedPage>
    </div>
}

export default Projects;