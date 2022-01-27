import React from 'react';
import AnimatedPage from '../animations/AnimatedPage';
import CertBody from '../components/CertBody';
import Head from '../components/Head';

const titleText = <span>I'm certified.</span>
const subtitleText = <span>I've aquired the following industry <strong>certifications</strong> in the time I've worked in IT.</span>
const avatar = <i className="fas fa-stamp"></i>


const Credentials = () => {
    return <div>
        <AnimatedPage>
            <Head
                titleText={titleText}
                subtitleText={subtitleText}
                avatar={avatar}
            />
            <CertBody />
        </AnimatedPage>
    </div>
}

export default Credentials;