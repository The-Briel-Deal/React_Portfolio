import React from 'react';
import AnimatedPage from '../animations/AnimatedPage';
import WorkBody from '../components/WorkBody';
import Head from '../components/Head';

const titleText = <span>Work Experience.</span>
const subtitleText = <span>Here is some of the <strong>work</strong> I've done recently.</span>
const avatar = <i className="fas fa-briefcase"></i>


const WorkExperience = () => {
    return <div>
        <AnimatedPage>
            <Head
                titleText={titleText}
                subtitleText={subtitleText}
                avatar={avatar}
            />
            <WorkBody />
        </AnimatedPage>
    </div>
}

export default WorkExperience;