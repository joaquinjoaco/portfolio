import React from 'react';

import { NavLink } from 'react-router-dom';
import { switchTheme } from '../../functions/SwitchTheme';

export default function Header({ darkTheme, setDarkTheme }) {

     return (
          <header>
               {/* header-text hoverable-opacity interactable */}
               <NavLink to="/portfolio/" className="header-text hoverable-opacity interactable">Joaquín Gómez</NavLink>
               <div className="header-buttons">
                    {/* about link */}
                    <NavLink to="/portfolio/about"
                         className={({ isActive, isPending }) =>
                              isPending ? "header-text hoverable-opacity interactable pending" : isActive ? "header-text hoverable-opacity interactable active" : "header-text hoverable-opacity interactable"}
                    >About me</NavLink>
                    {/* resume link */}
                    <a href="https://drive.google.com/file/d/1z3wG_oBuzhRWHJNweGId3dgk9AtOx8xK/view?usp=sharing" target="_blank" className="header-text hoverable-opacity interactable">Resume</a>
                    {/* theme switch */}
                    <div className="header-text interactable theme-switch" onClick={() => switchTheme(darkTheme, setDarkTheme)}>{darkTheme ? "🌞" : "🌙"}</div>
               </div>

          </header>
     )
}
