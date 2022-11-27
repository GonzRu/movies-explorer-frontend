import React from 'react';
import './Techs.css';
import PageSection from '../Shared/PageSection/PageSection';
import TechItems from './TechItems/TechItems';

function Techs() {
  return (
    <PageSection title="Технологии" accent contentClasses="techs__content">
      <h3 className="techs__title">
        7 технологий
      </h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <TechItems />
    </PageSection>
  );
}

export default Techs;
