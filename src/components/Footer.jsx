// footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import img from "../assets/img/loGr.png";

const Footer = () => {
    return (
        <footer className="bg-killsColor ">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full">
                {/* Adresse e-mail à gauche */}
                <div className="text-center md:text-left text-boutonBase hover:text-gray mb-2 md:mb-0">
                    <p>Email: sangarekady663@yahoo.fr</p>
                </div>

                {/* Logo au centre qui redirige vers la page d'accueil */}
                <div className="text-center mb-4 md:mb-0">
                    <a href="/" className="text-white font-bold text-xl">
                        <img src={img} alt="Logo" className="w-24 h-24 inline-block mr-2" />
                    </a>
                </div>

                {/* Icônes de réseaux sociaux à droite */}
                <div className="text-center md:text-right flex items-center">
                    <a href="lien-vers-github" target="_blank" rel="noopener noreferrer" className="mx-4 text-boutonBase hover:text-brightColor">
                        <FaGithub size={28} />
                    </a>
                    <a href="lien-vers-linkedin" target="_blank" rel="noopener noreferrer" className="mx-4 text-boutonBase hover:text-brightColor">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="lien-vers-twitter" target="_blank" rel="noopener noreferrer" className="mx-4 text-boutonBase hover:text-brightColor">
                        <FaTwitter size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
