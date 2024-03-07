import React, { useState } from 'react';
import { IoCodeSlash, IoLogoGithub } from 'react-icons/io5';

const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-experience p-8">
      <div className="lg:w-5/6 flex flex-col lg:flex-row-reverse justify-around mb-8">
        {/* Container pour le contenu à gauche et les images à droite */}
        <div className="flex lg:flex-row flex-col lg:mx-2 items-center lg:items-start lg:w-3/4 mb-8 lg:mb-0">
          {/* Contenu à gauche des images */}
          <div className="lg:w-1/4">
            {/* Icône Code au centre */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-boutonBase text-8xl">
                <IoCodeSlash />
              </span>
            </div>
            {/* Titre centré */}
            <h1 className="text-3xl font-bold mb-3 text-center text-boutonBase hover:text-brightColor">Mes Projets</h1>
            
            <p className="mb-4 lg:mb-0 text-center text-black text-light lg:text-left w-5/9">
              Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
            </p>
          </div>
          {/* Trois images cliquables */}
          <div className="flex lg:ml-8 w-5/6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="mr-4 relative flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={`lien_projet${index + 1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`/src/assets/img/im${index + 1}.png`}
                    alt={`Projet ${index + 1}`}
                    className="w-96 h-96 object-cover rounded-lg shadow-lg shadow-nuanceBlack"
                  />
                </a>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-nuanceBlack shadow-lg shadow-nuanceBlack bg-opacity-50 transition duration-300 rounded-lg ">
                    <a
                      href={`https://github.com/Kady1991${index + 1}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-nuanceViolet text-5xl github-icon"  // Utilisez text-white pour la couleur du texte
                    >
                      <IoLogoGithub />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
