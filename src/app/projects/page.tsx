import ProjectCard from '@/components/projects/ProjectCard';
import data from '@/data';
import React from 'react';

const Projects = () => {
	const projectsList = data?.projects;
	return (
		<div className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-10">
			<h1 className='text-text'>Projects</h1>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
				{projectsList.map((item) => {
					return <ProjectCard key={item.id} project={item} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
