'use client';
import { Title } from '../common/Title';
import React from 'react';
import Projects from './Projects';

export const ProjectsComp = () => {
	return (
		<section className="pt-5" id="projects">
			<Title title="My projects" />
			<div>
				<Projects />
			</div>
		</section>
	);
};
