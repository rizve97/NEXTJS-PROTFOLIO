import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/currency.PNG"
          title="Currency Converter"
          description="Built with React, my currency converter app seamlessly converts currencies in real-time, providing users with accurate exchange rates. The intuitive user interface ensures a smooth experience, allowing users to effortlessly switch between different currencies."
        />
        <ProjectCard
          src="/blog.PNG"
          title="React-Blog-App"
          description="Dive into the world of blogging with this React-based Blog App. Enjoy an intuitive interface, dynamic post creation, and responsive design. Elevate your content creation journey with the power of React."
        />
      
      </div>
    </div>
  );
};

export default Projects;