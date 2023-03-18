import React from 'react';

export default function Project({ name, desc, background, repo, link, isPrototype, imageId }) {

     return (
          <div className="project-container outside" id="projects">
               <div className="content-container">
                    <div className="column">
                         <h1 className="hoverable-title-opacity">{name}</h1>
                         <p className="project-desc">{desc}</p>
                         {isPrototype ?
                              <a href={link} target="_blank" className="project-link hoverable-opacity">Figma prototype</a>
                              :
                              <a href={link} target="_blank" className="project-link hoverable-opacity">Live site</a>
                         }

                         <a href={repo} target="_blank" className="project-link hoverable-opacity">Repository</a>
                    </div>
                    <div className="column">
                         <div className="project-image image-interactable" id={imageId} style={{ backgroundImage: "url(" + background + ")" }}></div>
                    </div>
               </div>
          </div>
     )
}
