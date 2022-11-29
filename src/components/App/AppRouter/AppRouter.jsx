import React from 'react';
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
import ProtectedRoute from '../../Shared/ProtectedRoute/ProtectedRoute';

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/signin">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Register />
      </Route>
      <Route exact path="/">
        <Layout><Main /></Layout>
      </Route>
      <ProtectedRoute exact path="/movies">
        <Layout><Movies /></Layout>
      </ProtectedRoute>
      <ProtectedRoute exact path="/saved-movies">
        <Layout><SavedMovies /></Layout>
      </ProtectedRoute>
      <ProtectedRoute exact path="/profile">
        <LayoutWithoutFooter><Profile /></LayoutWithoutFooter>
      </ProtectedRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default AppRouter;
