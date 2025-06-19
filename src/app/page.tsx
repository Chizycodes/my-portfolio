'use client';
import { About } from '@/components/about';
import { Intro } from '@/components/intro/Intro';
import { ProjectsComp } from '@/components/projects';
import { Skills } from '@/components/skills';
import Contact from '@/components/contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="pb-40 md:pb-20 w-full">
			<Intro />
			<div className="space-y-16">
				<About />
				<ProjectsComp />
				<Skills />
				<Contact />
			</div>
		</div>
	);
}
