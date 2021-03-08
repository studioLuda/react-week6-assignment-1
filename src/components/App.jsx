import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './Header';

import HomePage from '../pages/HomePage';

import AboutPage from '../pages/AboutPage';

import RestaurantsPage from '../pages/RestaurantsPage';

import RestaurantPage from '../pages/RestaurantPage';

import NotFoundPage from '../pages/NotFoundPage';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}