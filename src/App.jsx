import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/Restaurants">Restaurants</Link>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
}
