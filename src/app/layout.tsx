import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/nav/Header';
import SideBar from '@/components/nav/Sidebar';
import data from '@/data';

export const metadata: Metadata = {
	title: data.name,
	description: data.about1,
	keywords: data.keywords,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body>
				<Header />
				<SideBar />
				<div id="intro" className="max-w-7xl w-full mx-auto p-5 md:px-8 md:py-10">
					<div className="w-64 h-64 rounded-full bg-neon fixed mx-auto my-auto blur-xl inset-0 opacity-20" />
					{children}
				</div>
			</body>
		</html>
	);
}
