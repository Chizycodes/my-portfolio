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
							className="shadow shadow-neon border-neon border-2 border-opacity-20 rounded-md w-40 h-40 m-4 flex flex-col items-center justify-center gap-2 p-6 transition-transform transform hover:scale-110"
							key={id}
						>
							<Image src={skill.src} alt={skill.name} width={50} height={50} className="max-h-14" />
							<h3 className="text-text text-center">{skill.name}</h3>
						</div>
					))}
				</Marquee>
			</div>
		</div>
	);
};
