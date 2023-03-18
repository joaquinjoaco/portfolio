import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './components/Preloader/Preloader.css';
import './assets/App.css';
import './components/MouseTrailer/MouseTrailer.css';
import './components/MouseImageTrailer/MouseImageTrailer.css';
import './assets/Hero.css';
import './components/ContactBtn/ContactBtn.css';
import './components/Header/Header.css';
import './components/MyProjectsCTA/MyProjectsCTA.css';
import './components/MyProjects/MyProjects.css';
import './components/MyProjects/Project/Project.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
