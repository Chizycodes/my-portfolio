"use client";
import React from "react";
import data from "@/data";
import { usePathname } from "next/navigation";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, y: 25 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Projects() {
	const pathname = usePathname();
	const projectsList = data?.projects;

	const showAllProjects = pathname === "/projects";

	return (
		<div>
			<motion.div
				className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start"
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false }}
			>
				{projectsList?.slice(0, showAllProjects ? undefined : 3).map((item) => {
					return (
						<motion.div key={item.id} variants={cardVariants}>
							<ProjectCard project={item} />
						</motion.div>
					);
				})}
			</motion.div>

			{projectsList.length > 3 && !showAllProjects && (
				<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className="mt-8">
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
