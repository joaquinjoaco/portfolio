import React from 'react';

export default function Project({ name, desc, background }) {

     return (
          <div className="project-container outside" id="projects">
               <div className="content-container">
                    <div className="column">
                         <h1 className="hoverable-title-opacity">{name}</h1>
                         <p>{desc}</p>
                    </div>
                    <div className="column">
                         <div className="project-image" style={{ backgroundImage: "url(" + background + ")" }}></div>
                    </div>
               </div>
          </div >
     )
}
