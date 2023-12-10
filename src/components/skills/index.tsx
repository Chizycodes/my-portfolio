'use client';
import { Title } from '../common/Title';
import data from '@/data';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

export const Skills = () => {
	return (
		<div className="w-full" id="skills">
			<Title title="Skills" />

			<div className="">
				<Marquee
					gradient={false}
					speed={80}
					pauseOnHover={true}
					pauseOnClick={true}
					delay={0}
					play={true}
					direction="left"
				>
					{data?.skills.map((skill, id) => (
						<div
							className={`rounded-[10px] w-40 h-40 m-6 flex flex-col items-center justify-center py-8 px-4 transition-all transform duration-300 hover:scale-[1.15] skillsBox`}
							key={id}
						>
							<Image src={skill.src} alt={skill.name} width={50} height={50} className="max-h-14 h-14 w-14" />
							<h3 className="text-text text-center uppercase font-medium mt-4">{skill.name}</h3>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
};
