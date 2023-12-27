'use client';
import data from '@/data';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

export const Intro = () => {
	return (
		<section className='min-h-screen flex items-center'>
			<motion.div animate={{ y: 0 }} className="space-y-5" initial={{ y: 60 }} transition={{ duration: 0.5 }}>
				<p className="text-3xl text-neon font-fira">Hi, my name is</p>
				<h1 className="text-5xl font-extrabold text-text md:text-8xl">{data.name}</h1>
				<h2 className="text-4xl text-textDark md:text-6xl">I am a Software Developer!</h2>
				<p className="w-4/5 md:w-3/5 text-textDark">
					I&rsquo;m a <span className="text-neon">{data.profession} </span>from Nigeria. {data.intro}
				</p>
				<div className="flex space-x-3">
					<Link href="/#projects">
						<button className="py-2 px-5 !mt-10 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded-lg">
							Check out my work!
						</button>
					</Link>

					<Link
						href="https://drive.google.com/file/d/1HxbVkhfSqL7sNhhqBoq3Bg430hgeb5zZ/view?usp=sharing"
						target="_blank"
					>
						<button className="py-2 px-5 !mt-10 text-darkerBlue bg-neon border-neon hover:bg-transparent duration-100 hover:text-neon border-2 rounded-lg">
							My Resume
						</button>
						
					</Link>
				</div>
			</motion.div>
		</section>
	);
};
