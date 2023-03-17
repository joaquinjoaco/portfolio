import React, { useEffect, useState } from 'react'
import { isElementInViewport } from '../../hooks/isElementInViewport';
import { switchTheme } from '../../hooks/SwitchTheme';

export default function Header({ darkTheme, setDarkTheme }) {

     useEffect(() => {
          // Checks if the header text has to be black or white
          // isElementInViewport();
     }, [])

     return (
          <header>

               <div className="header-text hoverable-opacity interactable" onClick={() => { alert("Joaquín Gómez") }}>Joaquín Gómez</div>
               <div className="header-buttons">
                    {/* about link */}
                    <a href="/" className="header-text hoverable-opacity interactable">About</a>
                    {/* resume link */}
                    <a href="/" target="_blank" className="header-text hoverable-opacity interactable">Resume</a>
                    {/* theme switch */}
                    <div className="header-text hoverable-opacity interactable" onClick={() => switchTheme(darkTheme, setDarkTheme)}>{darkTheme ? "🌞" : "🌙"}</div>
               </div>

          </header>
     )
}
