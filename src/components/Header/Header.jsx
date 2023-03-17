import React, { useEffect } from 'react'
import { isElementInViewport } from '../../hooks/isElementInViewport';

export default function Header() {

     useEffect(() => {
          // Checks if the header text has to be black or white
          isElementInViewport();
     }, [])

     return (
          <header>

               <div className="header-text hoverable-opacity interactable" onClick={() => { alert("Joaquín Gómez") }}>Joaquín Gómez</div>
               <div className="header-buttons">
                    <div className="header-text hoverable-opacity interactable" onClick={() => { alert("About") }}>About</div>
                    <div className="header-text hoverable-opacity interactable" onClick={() => { alert("Resume") }}>Resume</div>
               </div>

          </header>
     )
}
