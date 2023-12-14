import Heading from '@/components/projects/Heading';
import ProjectCard from '@/components/projects/ProjectCard';
import data from '@/data';
import React from 'react';

const Projects = () => {
	const projectsList = data?.projects;
	return (
		<div className="">
			<Heading />
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
				{projectsList.map((item) => {
					return <ProjectCard key={item.id} project={item} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
