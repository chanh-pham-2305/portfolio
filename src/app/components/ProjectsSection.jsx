"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
const projectsData = [
    {
      id: 1,
      title: "React Portfolio Website",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Potography Portfolio Website",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "E-commerce Application",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Food Ordering Application",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      tag: ["All", "Mobile"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "React Firebase Template",
      description: "Authentication and CRUD operations",
      image: "/images/projects/5.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "Full-stack Roadmap",
      description: "Project 5 description",
      image: "/images/projects/6.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    // const ref = useRef(null);
    // const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
    setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
    );

    // const cardVariants = {
    // initial: { y: 50, opacity: 0 },
    // animate: { y: 0, opacity: 1 },
    // };

  return (
    <section id="projects" className='pt-16'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
            />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
            {
                //not error but not show data in screen (error syntax) {} => ()
                filteredProjects.map((p,index)=> (
                    <ProjectCard
                        key={p.id}
                        imgUrl={p.image}
                        title={p.title}
                        description={p.description}
                        gitUrl={p.gitUrl}
                        previewUrl={p.previewUrl}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default ProjectsSection