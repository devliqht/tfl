import React from "react";
import { AnimatedContainer } from "@/components/Containers";

const teamMembers = [
  { name: "Matt Erron Cabarrubias", img: "/matt.jpg" },
  { name: "Jhanell Mingo", img: "/jhanell.jpg" },
  { name: "Jeane Eritch Diputado", img: "/jeane.jpg" },
  { name: "Simon Gabriel Gementiza", img: "/simon.jpg" },
  { name: "Rean Coyacot", img: "/rean.jpg" },
  { name: "Atheena Arcena", img: "/atheena.jpg" },
  { name: "Derick Angelo Yu", img: "/derick.jpg" },
  { name: "Cris Lawrence Lucero", img: "/cris.jpg" },
  { name: "Jemuel Valencia", img: "/jemuel.jpg" },
];

const Introduction: React.FC = () => {  
  return (
    <div className="min-h-screen pb-12 pt-0 md:pt-6">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="font-bold text-gray-800 text-center">
            Group <span className="text-red-600">Adobe</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <AnimatedContainer delay={index * 55}>
            <div
              key={index}
              className="bg-gray-200 shadow-lg rounded-lg p-6 flex flex-col h-full items-center transition-transform transform hover:scale-105"
            >
              <div className="w-24 h-24 max-w-32 max-h-32 bg-gray-200 text-white flex items-center justify-center text-xl font-bold rounded-full">
                <img src={member.img} alt="Img" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-800 text-center">
                {member.name}
              </h3>
            </div>
            </AnimatedContainer>
          ))}
        </div>
        <AnimatedContainer delay={500}>
        <img className="h-auto w-96 mx-auto my-4" src="/qr.png" />
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Introduction;