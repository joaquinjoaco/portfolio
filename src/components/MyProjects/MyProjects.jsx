import React from 'react'
import MouseImageTrailer from '../MouseImageTrailer/MouseImageTrailer'
import Project from './Project/Project'

export default function MyProjects() {
     return (
          <div className="my-projects">

               {/* Mouse Image Trailer */}
               <MouseImageTrailer />

               {/* MiFicha */}
               <Project
                    name={"Quitel"}
                    desc={"XLVI International Congress of Theoretical Chemists of Latin Expression. Made with Vite + React. Live site available (with functionality removed). Freelance project."}
                    background={"assets/images/quitel.png"}
                    repo={"https://github.com/joaquinjoaco/quitel-showcase"}
                    link={"https://quitelcongress-showcase.netlify.app"}
                    isPrototype={false}
                    imageId={"quitel"}
               />

               {/* MiFicha */}
               <Project
                    name={"MiFicha"}
                    desc={"React Native app, intended to store the medical record of an individual and be able to access it from other devices by scanning a QR code."}
                    background={"assets/images/ficha-medica.png"}
                    repo={"https://github.com/joaquinjoaco/ficha-medica"}
                    link={"https://www.figma.com/proto/3SFg9bdcpJPSaTUPAEBNPm/Ficha-m%C3%A9dica?node-id=93%3A248&scaling=min-zoom&page-id=65%3A292&starting-point-node-id=93%3A248"}
                    isPrototype={true}
                    imageId={"mificha"}
               />

               {/* Laundrify CRUD */}
               <Project
                    name={"Laundrify CRUD"}
                    desc={"CRUD React web app with FireAuth (Google authentication) and Firebase for storing clients and orders from a laundromat."}
                    background={"assets/images/laundrify-crud.png"}
                    repo={"https://github.com/joaquinjoaco/laundrify-crud"}
                    link={"https://laundrifycrudtest.netlify.app/"}
                    isPrototype={false}
                    imageId={"laundrifycrud"}

               />

               {/* sorvisLater */}
               <Project
                    name={"sorvisLater"}
                    desc={"Mockup of an incident management web app destined towards better incident management for gaming servers. Inspiration taken form ServiceNow. Made with React."}
                    background={"assets/images/sorvisLater.png"}
                    repo={"https://github.com/joaquinjoaco/sorvisLater"}
                    link={"https://sorvislater.netlify.app/login"}
                    isPrototype={false}
                    imageId={"sorvislater"}
               />

               {/* Eventyr Banlist */}
               <Project
                    name={"Eventyr Banlist"}
                    desc={"React firebase CRUD web app that utilizes firebase realtime database."}
                    background={"assets/images/eventyr-banlist.png"}
                    repo={"https://github.com/joaquinjoaco/eventyrbanlist"}
                    link={"https://eventyrbanlistfirebaserealtime.netlify.app/"}
                    isPrototype={false}
                    imageId={"eventyrbanlist"}
               />

               {/* Eventyr player guide */}
               <Project
                    name={"Eventyr guide"}
                    desc={"A website with useful information about Eventyr for new users. Made with react."}
                    background={"assets/images/eventyr-guia.png"}
                    repo={"https://github.com/joaquinjoaco/eventyr-player-guide-react"}
                    link={"https://guiaeventyr.netlify.app/"}
                    isPrototype={false}
                    imageId={"eventyrplayerguide"}
               />

               {/* Bandicoot Informatic Team */}
               <Project
                    name={"Bandicoot\nInformatic Team"}
                    desc={"Website of a fictional IT company."}
                    background={"assets/images/bandicoot.png"}
                    repo={"https://github.com/joaquinjoaco/bandicootproyecto"}
                    link={"https://bandicoot.netlify.app/"}
                    isPrototype={false}
                    imageId={"bandicoot"}
               />

               {/* Laundrify website */}
               <Project
                    name={"Laundrify"}
                    desc={"A Laundromat's website."}
                    background={"assets/images/laundrify-landing.png"}
                    repo={"https://github.com/joaquinjoaco/lavanderia"}
                    link={"https://lavanderialaundrify.netlify.app/"}
                    isPrototype={false}
                    imageId={"laundrifylanding"}
               />

               {/* La fisica segun dios */}
               <Project
                    name={"La física según\ndios"}
                    desc={"Friend's website quick redesign."}
                    background={"assets/images/lafisicasegundios.png"}
                    repo={"https://github.com/joaquinjoaco/la-fisica-segun-dios-redesign"}
                    link={"https://lafisicasegundios.netlify.app/"}
                    isPrototype={false}
                    imageId={"lafisicasegundios"}
               />



          </div>
     )
}
