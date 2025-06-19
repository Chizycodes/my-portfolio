"use client";
import React from "react";
import { LineSvg } from "@/assets/icons";
import data from "@/data";
import ContactButtons from "./ContactButtons";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
	return (
		<section className="pt-5">
			<div className="z-50 flex flex-col items-center justify-center w-full" id="contact">
				<motion.div
					className="flex items-center justify-center mt-10 space-x-5"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: false, amount: 0.2 }}
				>
					<LineSvg className="relative w-20 h-1 md:w-60" />
					<h2 className="text-xl text-text md:text-4xl whitespace-nowrap">Get in Touch</h2>
					<LineSvg className="relative w-20 h-1 md:w-60" />
				</motion.div>

				<motion.div
					className="flex flex-wrap items-center justify-center mx-auto mt-8"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.2 }}
				>
					{data.links.map(({ icon, link, name }, i) => (
						<motion.div key={name} variants={itemVariants}>
							<ContactButtons icon={icon} link={link} marginLeft={i === 0 ? "ml-0" : "ml-6 md:ml-10"} name={name} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
