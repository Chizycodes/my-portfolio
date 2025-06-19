"use client";

import { Title } from "../common/Title";
import data from "@/data";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const About = () => {
	return (
		<div className="pt-5" id="about">
			<Title title="About me" />

			<div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start md:gap-20 w-full">
				{/* IMAGE + BADGES */}
				<motion.div
					className="mx-auto w-full md:w-96"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.3 }}
				>
					<div className="relative border-2 rounded-xl w-full max-w-[24rem] h-96 border-neon">
						<Image
							src={data.image}
							alt={data.name}
							className="w-full h-full rounded-xl scale-90"
							height={250}
							width={250}
						/>
					</div>

					<motion.div
						className="w-full flex gap-4 flex-wrap mt-8"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: false }}
						variants={{
							visible: { transition: { staggerChildren: 0.15 } },
						}}
					>
						{data.badges?.map((badge: { link: string; image: string; name: string }, idx) => (
							<motion.a
								key={idx}
								href={badge?.link}
								target="_blank"
								rel="noopener noreferrer"
								variants={{
									hidden: { opacity: 0, scale: 0.9 },
									visible: { opacity: 1, scale: 1 },
								}}
								transition={{ duration: 0.4 }}
							>
								<Image src={badge?.image} alt={badge?.name} width={100} height={100} className="rounded" />
							</motion.a>
						))}
					</motion.div>
				</motion.div>

				{/* TEXT PARAGRAPHS WITH STAGGERED ANIMATION */}
				<motion.div
					className="md:w-4/6 px-3 mt-8 md:mt-0"
					initial="hidden"
					whileInView="visible"
					variants={{
						visible: {
							transition: {
								staggerChildren: 0.2,
							},
						},
					}}
					viewport={{ once: false }}
				>
					{data.about.map((paragraph, index) => (
						<motion.p
							key={index}
							className="text-xl text-textDark max-w-3xl mb-4"
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
							transition={{ duration: 0.5 }}
						>
							{paragraph}
						</motion.p>
					))}
				</motion.div>
			</div>
		</div>
	);
};
