import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal  text-neutral-content items-center p-4 container mx-auto ">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} -Developer by Mr osman Goni</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
     <div className="py-3 flex items-center gap-3">
                  <a href="https://github.com/osmanbybd" target="_blank"><FaGithub size={25} /></a>
                  <a href="https://web.facebook.com/osman8068" target="_blank"><FaFacebook className="text-blue-400" size={25} /></a>
                  <a href="https://web.facebook.com/osman8068" target="_blank"><FaInstagram className="text-red-400" size={25} /></a>
              </div>
  </nav>
</footer>
    );
};

export default Footer;