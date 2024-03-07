import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiWordpress, SiReact, SiTailwindcss, SiBootstrap, SiGithub } from 'react-icons/si';
import { FaPhp } from 'react-icons/fa';


const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-experience p-4 md:p-8">
      <div className="text-center w-full md:w-3/4">
        <h1 className="text-3xl font-bold mb-4 m-auto font-ligth mb-8 text-boutonBase hover:text-brightColor text-center md:w-1/2 mt-20">
          Compétences
        </h1>
        
        <p className="w-full m-auto text-black">
          Le composant Skills est une représentation visuelle de mes compétences en développement web. Chaque compétence, telles
          que HTML, CSS, JavaScript, WordPress, React, Tailwind CSS, Bootstrap et GitHub, est illustrée par une icône
          reconnaissable. Les barres de progression colorées indiquent le niveau de maîtrise de chaque compétence, offrant
          ainsi une vue rapide et informative de mes compétences techniques. Cette section vise à donner un aperçu clair de
          mon profil professionnel et de mes capacités dans le domaine du développement web.
        </p>
      </div>
      <div className=" md:w-5/6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mx-0">
          <SkillItem icon={<SiHtml5 size={50} className="text-boutonBase" />} label="HTML" percentage={80} />
          <SkillItem icon={<SiCss3 size={50} className="text-boutonBase" />} label="CSS" percentage={75} />
          <SkillItem icon={<SiJavascript size={50} className="text-boutonBase" />} label="JavaScript" percentage={70} />
          <SkillItem icon={<SiWordpress size={50} className="text-boutonBase" />} label="WordPress" percentage={65} />
          <SkillItem icon={<SiReact size={50} className="text-boutonBase" />} label="React" percentage={85} />
          <SkillItem icon={<SiTailwindcss size={50} className="text-boutonBase" />} label="Tailwind CSS" percentage={60} />
          <SkillItem icon={<SiBootstrap size={50} className="text-boutonBase" />} label="Bootstrap" percentage={70} />
          <SkillItem icon={<FaPhp size={50} className="text-boutonBase" />} label="PHP" percentage={60} />
          <SkillItem icon={<SiGithub size={50} className="text-boutonBase" />} label="GitHub" percentage={75} />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ icon, label, percentage }) => {
  return (
    <div className="flex flex-col items-center animate__animated animate__fadeIn">
      {icon}
      <span className="mt-2 text-boutonBase">{label}</span>
      <div className="bg-white h-4 mt-2 relative w-full">
        <div className="bg-brightColor h-full animate__animated animate__fadeIn" style={{ width: `${percentage}%` }}></div>
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-boutonBase">{percentage}%</span>
      </div>
    </div>
  );
};

export default Skills;
