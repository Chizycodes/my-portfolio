'use client';
import { About } from '@/components/about';
import { Intro } from '@/components/intro/Intro';
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
		</>
	);
}
