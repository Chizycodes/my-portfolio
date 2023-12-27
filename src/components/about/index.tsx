'use client';

import { Title } from '../common/Title';
import data from '@/data';
import Image from 'next/image';
import React from 'react';

export const About = () => {
	return (
		<div className="pt-5" id="about">
			<Title title="About me" />

			<div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start md:gap-20 w-full">
				<div className="md:mt-0 mx-auto">
					<Image
						alt={data.name}
						className="object-contain relative border-2 rounded-full w-80 h-80 border-neon"
						height={300}
						src={data.image}
						width={300}
					/>
				</div>
				<div className="mt-10 md:w-4/6 px-3">
					<p className="text-xl text-textDark max-w-3xl">{data.about1}</p>
					<p className="text-xl text-textDark max-w-3xl mt-4">{data.about2}</p>
				</div>
			</div>
		</div>
	);
};
