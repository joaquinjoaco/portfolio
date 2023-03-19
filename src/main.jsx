import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from './App';
import About from './Pages/About';
import Home from './Pages/Home';
import ErrorElement from './components/ErrorElement/ErrorElement';
import './App.css';
import './Hero.css';
import './components/MouseTrailer/MouseTrailer.css';
import './components/MouseImageTrailer/MouseImageTrailer.css';
import './components/ContactBtn/ContactBtn.css';
import './components/Header/Header.css';
import './components/MyProjectsCTA/MyProjectsCTA.css';
import './components/MyProjects/MyProjects.css';
import './components/MyProjects/Project/Project.css';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/portfolio/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/portfolio/about" element={<About />} />
    <Route path="*" element={<ErrorElement />} />
  </Route>
)
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
