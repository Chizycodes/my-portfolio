"use client";
import data from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const container = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const Intro = () => {
	return (
		<section className="min-h-screen flex items-center mt-5 md:mt-0">
			<motion.div
				className="space-y-5"
				variants={container}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
			>
				<motion.p className="text-3xl text-neon font-fira" variants={item}>
					Hi, my name is
				</motion.p>

				<motion.h1 className="text-5xl font-extrabold text-text md:text-8xl" variants={item}>
					{data.name}
				</motion.h1>

				<motion.h2 className="text-4xl text-textDark md:text-6xl" variants={item}>
					I am a Software Developer!
				</motion.h2>

				<motion.p className="w-4/5 md:w-3/5 text-textDark" variants={item}>
					{data.intro}
				</motion.p>

				<motion.div className="flex flex-wrap gap-3 pt-5 md:pt-10" variants={item}>
					<Link href="/#projects">
						<button className="py-2 px-5 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded-lg">
							Check out my work!
						</button>
					</Link>

					<Link href={data.resumeUrl} target="_blank">
						<button className="py-2 px-5 text-darkerBlue bg-neon border-neon hover:bg-transparent duration-100 hover:text-neon border-2 rounded-lg">
							My Resume
						</button>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};
