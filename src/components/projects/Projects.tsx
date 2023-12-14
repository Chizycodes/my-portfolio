'use client';
import React from 'react';
import data from '@/data';
import ProjectCard from './ProjectCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Projects() {
	const projectsList = data?.projects;

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<div>
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start"
			>
				{projectsList.slice(0, 3).map((item) => {
					return (
						<motion.div key={item.id} variants={cardVariants}>
							<ProjectCard key={item.id} project={item} />
						</motion.div>
					);
				})}
			</motion.div>

			{projectsList.length > 3 && (
				<motion.div
					className="mt-8 max-w-sm md:max-w-2xl border border-fun-pink mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full text-fun-pink bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white transition-colors cursor-pointer"
					variants={cardVariants}
				>
					<Link href="/projects">View All</Link>
				</motion.div>
			)}
		</div>
	);
}

export default Projects;
