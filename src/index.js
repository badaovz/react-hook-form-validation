import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import PrivateRouter from './components/PrivateRouter';
import Home from './pages/Home';
import DefaultContent from './components/DefaultContent';
import Products from './pages/Products';
import About from './pages/About';
import Register from './pages/Register';
import { AuthProvider } from './contexts/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRouter><Home /></PrivateRouter>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DefaultContent />
      },
      {
        path: 'products',
        element: <Products />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

