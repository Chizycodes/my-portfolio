'use client';
import React from 'react';
import data from '@/data';
import { usePathname } from 'next/navigation';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Projects() {
	const pathname = usePathname();
	const projectsList = data?.projects;

	const showAllProjects = pathname === '/projects';

	return (
		<div>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
				{projectsList?.slice(0, showAllProjects ? undefined : 3).map((item) => {
					return (
						<motion.div key={item.id} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 4 }}>
							<ProjectCard project={item} />
						</motion.div>
					);
				})}
			</div>

			{projectsList.length > 3 && !showAllProjects && (
				<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 3 }} className="mt-8">
					<Link href="/projects">
						<div className='max-w-sm md:max-w-2xl border border-neon mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-neon hover:bg-fun-pink hover:text-white transition-colors cursor-pointer"'>
							View All
						</div>
					</Link>
				</motion.div>
			)}
		</div>
	);
}

export default Projects;
