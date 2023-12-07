'use client';
import { About } from '@/components/about';
import { Intro } from '@/components/intro/Intro';
import { ProjectsComp } from '@/components/projects';
import { Skills } from '@/components/skills';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<Intro />
			<About />
			<ProjectsComp />
			<Skills />
		</>
	);
}
