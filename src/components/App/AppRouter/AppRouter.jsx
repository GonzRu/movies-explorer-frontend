import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../../Main/Main';
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import Profile from '../../Profile/Profile';
import SavedMovies from '../../SavedMovies/SavedMovies';
import Movies from '../../Movies/Movies';
import Layout from '../Layout/Layout';
import NotFound from '../../NotFound/NotFound';
import LayoutWithoutFooter from '../Layout/LayoutWithoutFooter';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/signin' children={<Login/>}/>
                <Route exact path='/signup' children={<Register/>}/>
                <Route exact path='/' children={<Layout><Main/></Layout>}/>
                <Route exact path='/movies' children={<Layout><Movies/></Layout>}/>
                <Route exact path='/saved-movies' children={<Layout><SavedMovies/></Layout>}/>
                <Route exact path='/profile' children={<LayoutWithoutFooter><Profile/></LayoutWithoutFooter>}/>
                <Route children={<NotFound/>}/>
            </Switch>
        );
    }
}

export default AppRouter;
