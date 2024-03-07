import React, { useEffect } from "react";
import img from "../assets/img/moi.png";
import SocialIcons from "../layouts/SocialIcons";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const textElement = document.querySelector(".text-animation");
    const imageElement = document.querySelector(".image-animation");

    // Initialiser l'opacité à 0
    gsap.set([textElement, imageElement], { opacity: 0 });

    // Animation de l'image
    gsap.fromTo(
      imageElement,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: Power3.easeOut,
      }
    );

    // Animation du texte
    gsap.fromTo(
      textElement,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 3,
        ease: Power3.easeOut,
      }
    );
  }, []); // Le tableau de dépendances est vide, donc ce useEffect s'exécute une seule fois à l'initialisation.

  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-white">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-1/2 space-y text-animation m-20">
        <h1 className="text-5xl font-semibold leading-tight mt-24">
          Je suis Kady
          <span className="block text-brightColor"> Front-end Developer</span>
        </h1>
        <p className="text-animation m-auto">
          J'ai opté pour la passionnante démarche de me former en développement
          frontend, nourrissant mon intérêt pour la création d'expériences
          utilisateur exceptionnelles.
          Je suis prêt(e) à relever de nouveaux défis. J'ai opté pour la
          passionnante démarche de me former en développement frontend,
          nourrissant mon intérêt pour la création d'expériences.
        </p>
        <SocialIcons />
      </div>

      <div className="flex items-center justify-center mt-50 image-animation">
        <img className="rounded-full" width={470} src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
