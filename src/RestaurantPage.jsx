import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import {
  loadRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantPage({ params }) {
  const { restaurantId } = params || useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant(restaurantId));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return <p>식당 정보를 불러오고 있습니다...</p>;
  }

  return (
    <div>
      <h2>
        Restaurant
        {restaurantId}
      </h2>
      <h3>{restaurant.name}</h3>
      <p>
        주소:
        {restaurant.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {
          restaurant.menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
