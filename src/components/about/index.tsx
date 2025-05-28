"use client";

import { Title } from "../common/Title";
import data from "@/data";
import Image from "next/image";
import React from "react";

export const About = () => {
	return (
		<div className="pt-5" id="about">
			<Title title="About me" />

			<div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start md:gap-20 w-full">
				<div className="md:mt-0 mx-auto">
					<div className="relative border-2 rounded-xl w-96 h-96 border-neon">
						<Image
							src={data.image}
							alt={data.name}
							className="w-full h-full rounded-xl scale-90"
							height={250}
							width={250}
						/>
					</div>
				</div>
				<div className="mt-10 md:w-4/6 px-3">
					<p className="text-xl text-textDark max-w-3xl">{data.about1}</p>
					<p className="text-xl text-textDark max-w-3xl mt-4">{data.about2}</p>
				</div>
			</div>
		</div>
	);
};
