import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default function ContactBtn() {

     const [text, setText] = useState("Copy mail?");

     return (
          <CopyToClipboard text="joaquingomezleites@gmail.com">
               <a href="mailto:joaquingomezleites@gmail.com" className="contact-btn interactable"
                    onClick={() => {
                         setText("Mail copied");
                         setTimeout(() => {
                              setText("Copy mail?");
                         }, 2500);
                    }}
                    onMouseLeave={() => setText("Copy mail?")}
               >
                    <p id="hand">👉</p>
                    <p id="text">Get in touch</p>
                    <p id="text2">{text}</p>
                    <span className="underline"></span>
               </a>
          </CopyToClipboard>
     )
}
