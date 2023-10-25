import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import CricketerDetails from './components/CricketerDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    element: <CricketerDetails />,
  },
]);

root.render(
  <RouterProvider router={appRouter} />
);

reportWebVitals();
