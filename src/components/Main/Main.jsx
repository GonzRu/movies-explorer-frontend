import React, {Component} from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';

class Main extends Component {
    render() {
        return (
            <div className='main'>
                <Promo/>
                <AboutProject/>
            </div>
        );
    }
}

export default Main;
