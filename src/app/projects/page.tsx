import Heading from '@/components/projects/Heading';
import React from 'react';
import ProjectComp from '@/components/projects/Projects';

const Projects = () => {
	return (
		<div className="mb-10">
			<Heading />
			<div>
				<ProjectComp />
			</div>
		</div>
	);
};

export default Projects;
