import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <Route exact path="/signin">
            <Login/>
        </Route>
        <Route exact path="/signup">
            <Register />
        </Route>
        <Route exact path="/">
            <Layout><Main /></Layout>
        </Route>
        <Route exact path="/movies">
            <Layout><Movies /></Layout>
        </Route>
        <Route exact path="/saved-movies">
            <Layout><SavedMovies /></Layout>
        </Route>
        <Route exact path="/profile">
            <LayoutWithoutFooter><Profile /></LayoutWithoutFooter>
        </Route>
        <Route>
            <NotFound />
        </Route>
      </Switch>
    );
  }
}

export default AppRouter;
