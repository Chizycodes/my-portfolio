'use client';
import React from 'react';
import data from '@/data';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { HiMiniArrowRightCircle } from 'react-icons/hi2';

function Projects() {
	const projectsList = data?.projects;
	return (
		<div>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
				{projectsList.slice(0, 3).map((item) => {
					return <ProjectCard key={item.id} project={item} />;
				})}
			</div>
			{projectsList.length > 3 && (
				<Link href="/projects">
					<div className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer">
						View All
					</div>
				</Link>
			)}
		</div>
	);
}

export default Projects;
