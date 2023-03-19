import React from 'react';

import { Link } from 'react-router-dom';
import { switchTheme } from '../../hooks/SwitchTheme';

export default function Header({ darkTheme, setDarkTheme }) {

     return (
          <header>

               <Link to="/portfolio/" className="header-text hoverable-opacity interactable">Joaquín Gómez</Link>
               <div className="header-buttons">
                    {/* about link */}
                    <Link to="/portfolio/about" className="header-text hoverable-opacity interactable">About</Link>
                    {/* resume link */}
                    <a href="https://drive.google.com/file/d/1z3wG_oBuzhRWHJNweGId3dgk9AtOx8xK/view?usp=sharing" target="_blank" className="header-text hoverable-opacity interactable">Resume</a>
                    {/* theme switch */}
                    <div className="header-text interactable theme-switch" onClick={() => switchTheme(darkTheme, setDarkTheme)}>{darkTheme ? "🌞" : "🌙"}</div>
               </div>

          </header>
     )
}
