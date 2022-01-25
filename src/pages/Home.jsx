import React from 'react';
import FA from 'react-fontawesome';
import Body from '../components/Body';
import Head from '../components/Head';

const titleText = <span>My name is Gabriel.</span>
const subtitleText = <span>I'm a <strong>software engineer</strong> that loves building things to make life better.</span>
const ghLink = <a href="https://github.com/The-Briel-Deal" className="social_icon"><FA name="fab fa-github-square" /></a>
const liLink = <a href="https://www.linkedin.com/in/gabrielford/" className="social_icon"><FA name="fab fa-linkedin-square" /></a>
const socialBlock = <div className="column">{ghLink}{liLink}</div>
const avatar = <img id="avatar_of_me" src={require('../assets/avatar.png')} alt="Avatar of me" />


const Home = () => {
    return <div>
        <Head
            titleText={titleText}
            subtitleText={subtitleText}
            socialBlock={socialBlock}
            avatar={avatar}
        />
        <Body />
    </div>
}

export default Home;