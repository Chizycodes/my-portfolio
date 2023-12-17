'use client';
import { About } from '@/components/about';
import { Intro } from '@/components/intro/Intro';
import { ProjectsComp } from '@/components/projects';
import { Skills } from '@/components/skills';
import Contact from "@/components/contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="space-y-20 md:justify-start md:items-start mb-10 w-full">
			<Intro />
			<About />
			<ProjectsComp />
			<Skills />
			<Contact/>
		</div>
	);
}
