'use client';
import { Title } from '../common/Title';
import React from 'react';
import Projects from './Projects';

export const ProjectsComp = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-10" id="projects">
			<Title title="My projects" />
			<div >
				<Projects />
			</div>
		</div>
	);
};
