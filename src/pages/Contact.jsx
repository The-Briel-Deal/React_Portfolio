import React from 'react';
import AnimatedPage from '../animations/AnimatedPage';
import ContactForm from '../components/ContactForm';
import Head from '../components/Head';

const titleText = <span>Contact me.</span>
const subtitleText = <span>Want to collaborate? Need help building something? General questions? Whatever it is I'm down to help!</span>
const avatar = <i className="fas fa-address-book"></i>

const Contact = () => {
    return <AnimatedPage>
        <Head
            titleText={titleText}
            subtitleText={subtitleText}
            avatar={avatar}
        />
        <ContactForm />
    </AnimatedPage>
}

export default Contact;