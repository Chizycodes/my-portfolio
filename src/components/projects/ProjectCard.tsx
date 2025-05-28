"use client";
import React from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

function ProjectCard({ project }: any) {
	return (
		<div
			className="max-w-sm mx-auto flex flex-col md:justify-center"
			key={project.id}
		>
			<a
				href={project.links.live || project.links.github}
				target="_blank"
				className={`w-full relative rounded-xl border-neon border p-2 transition hover:-translate-y-2 hover:opacity-75`}
			>
				<Image width={300} height={200} className="w-full h-60 rounded-md" src={project.img} alt={project.title} />
			</a>

			<div className="w-full mt-5">
				<div className="flex justify-between">
					<a href={project.links.live || project.links.github} target="_blank">
						<h3 className="text-lg font-bold text-neon">{project.title}</h3>
					</a>
					<div className="space-x-2 flex gap-2 text-neon">
						{project.links.live && (
							<a href={project.links.live} target="_blank" rel="noreferrer">
								<FaExternalLinkAlt />
							</a>
						)}
						{project.links.github && (
							<a href={project.links.github} target="_blank" rel="noreferrer">
								<FiGithub />
							</a>
						)}
					</div>
				</div>

				<p className="text-textDark text-left text-sm">{project.about}</p>

				<ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
					{project.tags.map((tag: any) => {
						return (
							<li key={tag}>
								<Link href={`/projects/tag/${tag}`}>
									<div className="m-1 rounded-lg text-sm bg-darkerBlue py-1 px-2 cursor-pointer hover:opacity-75">
										{tag}
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default ProjectCard;
