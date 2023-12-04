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
		<html lang="en">
			<body>
				<Header />
				<SideBar />
				<div className="flex flex-col items-center justify-center mt-40 space-y-10 md:justify-start md:items-start mb-10 w-full">
					<div className="w-64 h-64 rounded-full bg-neon fixed mx-auto my-auto blur-xl inset-0 opacity-20" />
					{children}
				</div>
			</body>
		</html>
	);
}
