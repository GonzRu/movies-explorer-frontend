import React, {Component} from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Promo/>
                <AboutProject/>
                <Techs/>
            </div>
        );
    }
}

export default Main;
