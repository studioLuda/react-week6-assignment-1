import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Header';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

function RestaurantsPage() {
  return (
    <div>
      <h2>Restaurants</h2>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
      </Switch>
    </div>
  );
}
