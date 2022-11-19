import React from 'react';
import PageSection from '../Shared/PageSection/PageSection';
import Portfolio from './Portfolio/Portfolio';
import Me from './Me/Me';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <PageSection title='Студент' contentClasses='aboutMe'>
            <Me/>
            <Portfolio/>
        </PageSection>
    );
};

export default AboutMe;
