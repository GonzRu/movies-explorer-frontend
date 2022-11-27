import React, { Component } from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </div>
    );
  }
}

export default Main;
