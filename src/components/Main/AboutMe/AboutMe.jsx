import React from 'react';
import PageSection from '../Shared/PageSection/PageSection';
import Portfolio from './Portfolio/Portfolio';
import Me from './Me/Me';
import './AboutMe.css';

function AboutMe() {
  return (
    <PageSection
      title="Студент"
      className="aboutMe"
      titleClasses="aboutMe__title"
      contentClasses="aboutMe__content"
    >
      <Me />
      <Portfolio />
    </PageSection>
  );
}

export default AboutMe;
