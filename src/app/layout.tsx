import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/nav/Header';
import SideBar from '@/components/nav/Sidebar';
import data from '@/data';

export const metadata: Metadata = {
	title: data.name,
	description: data.about1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link href="/logo.svg" rel="icon" />
				<link href="/rss.xml" rel="alternate" title="RSS" type="application/rss+xml" />
				<meta content="/og-image.png" property="og:image" />
				<meta content={data.keywords} name="keywords" />
				<link href="/manifest.json" rel="manifest" />
				<link href="/icon.png" rel="apple-touch-icon" />
				<meta content="#fff" name="theme-color" />
			</head>
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
