import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import gsap from 'gsap';

const SocialIcons = () => {
  const iconStyle = 'text-boutonBase hover:text-brightColor p-2 transition-all cursor-pointer';

  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const twitterRef = useRef(null);

  useEffect(() => {
    const icons = [linkedinRef.current, githubRef.current, twitterRef.current];

    gsap.from(icons, {
      opacity: 1,
      x: -200,
      stagger: 1,
      duration: 5,
      ease: 'power5.out',
    });
  }, []); 

  return (
    <div className="social-icons flex items-center space-x-4 justify-center lg:justify-start mt-8 m-auto">
      <a href="lien-vers-votre-profil-linkedin" target="_blank" rel="noopener noreferrer" ref={linkedinRef}>
        <FaLinkedin size={56} className={iconStyle} />
      </a>
      <a href="lien-vers-votre-profil-github" target="_blank" rel="noopener noreferrer" ref={githubRef}>
        <FaGithub size={56} className={iconStyle} />
      </a>
      <a href="lien-vers-votre-profil-twitter" target="_blank" rel="noopener noreferrer" ref={twitterRef}>
        <FaTwitter size={56} className={iconStyle} />
      </a>
    </div>
  );
};

export default SocialIcons;
