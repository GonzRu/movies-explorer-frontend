import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Main from '../../Main/Main';
import Register from '../../Register/Register';
import Login from '../../Login/Login';
import Profile from '../../Profile/Profile';
import SavedMovies from '../../SavedMovies/SavedMovies';
import Movies from '../../Movies/Movies';

class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' children={<Main/>}/>
                <Route exact path='/movies' children={<Movies/>}/>
                <Route exact path='/saved-movies' children={<SavedMovies/>}/>
                <Route exact path='/profile' children={<Profile/>}/>
                <Route exact path='/signin' children={<Login/>}/>
                <Route exact path='/signup' children={<Register/>}/>
            </Switch>
        );
    }
}

export default AppRouter;
