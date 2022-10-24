import { Route, Routes } from 'react-router-dom';

import { Details } from 'pages/Details';
import { DetailsTv } from 'pages/DetailsTv';
import { Homepage } from 'pages/Home';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Details />} />
      <Route path="/series/:id" element={<DetailsTv />} />
    </Routes>
  );
}
