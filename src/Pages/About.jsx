import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { useHoverableOpacity } from '../functions/useHoverableOpacity';

export default function About() {

     const [text, setText] = useState("Copy mail?");


     useEffect(() => {
          let isNotMobile = window.matchMedia("only screen and (min-width: 1000px)").matches;
          if (isNotMobile) {
               useHoverableOpacity();
               // console.log("useeffect ran")
          }
     }, []);

     return (
          <div className="container outside">
               <h1 className="about-me-h1">About me
                    <p className="about-me-p">I graduated from Technological Secondary Education in Computer Science. I'm currently pursuing a technical degree in such field.
                         <br />
                         One of the things I love about this industry is the opportunity to be creative and come up with new ideas, especially when collaborating with others.
                         <br />
                         Over the past two years, I've been self-educating myself in the fields of front-end development and both User Experience and User Interface design.
                         <br />
                         I'm currently working with a range of technologies, including React/React Native, JavaScript, Firebase, Github, and Figma.
                         <br />
                         In the past, I've also used VueJS, Angular, PostgreSQL, MySQL, VB .NET, Java and C/C++.
                    </p>

                    {/* linkedin */}
                    <a href="https://www.linkedin.com/in/joaquingomezleites/" target="_blank" className="about-me-link">
                         <img src="assets/Linkedin.svg" alt="LinkedIn" />
                    </a>
                    {/* github */}
                    <a href="https://github.com/joaquinjoaco" target="_blank" className="about-me-link" id="secondImage">
                         <img src="assets/Github.svg" alt="GitHub" />
                    </a>

                    {/* email */}
                    <div className="email-container">
                         <CopyToClipboard text="joaquingomezleites@gmail.com">
                              <a href="mailto:joaquingomezleites@gmail.com" className="contact-btn"
                                   onClick={() => {
                                        setText("Mail copied");
                                        setTimeout(() => {
                                             setText("Copy mail?");
                                        }, 2500);
                                   }}
                                   onMouseLeave={() => setText("Copy mail?")}
                              >
                                   <p id="text">Email</p>
                                   <p id="text2">{text}</p>
                                   <span className="underline"></span>
                              </a>
                         </CopyToClipboard>
                    </div>

               </h1>
          </div>
     )
}
