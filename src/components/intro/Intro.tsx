"use client";
import data from "@/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const MotionImage = motion(Image);

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

const imageVariants = {
	hidden: { opacity: 0, scale: 0.95 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

export const Intro = () => {
	return (
		<section className="min-h-screen flex items-center mt-5 md:mt-0">
			<div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
				{/* TEXT SECTION */}
				<motion.div
					className="space-y-3 md:space-y-5 w-full md:w-3/5"
					variants={container}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
				>
					<motion.p className="text-xl text-neon font-fira" variants={item}>
						Hi, my name is
					</motion.p>

					<motion.h1 className="text-3xl font-extrabold text-text md:text-6xl" variants={item}>
						{data.name}
					</motion.h1>

					<motion.h2 className="text-2xl text-textDark md:text-5xl" variants={item}>
						I am a Software Developer!
					</motion.h2>

					<motion.p className="w-4/5 md:w-11/12 text-textDark text-base" variants={item}>
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

				{/* HERO IMAGE */}
				<motion.div
					className="hidden md:block w-full md:w-2/5"
					initial="hidden"
					whileInView="visible"
					variants={imageVariants}
					viewport={{ once: true, amount: 0.3 }}
				>
					<MotionImage src="/hero-image.svg" alt="Hero" width={500} height={500} className="object-contain mx-auto" />
				</motion.div>
			</div>
		</section>
	);
};
