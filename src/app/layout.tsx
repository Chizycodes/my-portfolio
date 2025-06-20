import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/nav/Header";
import SideBar from "@/components/nav/Sidebar";
import data from "@/data";
import Script from "next/script";

export const metadata: Metadata = {
	title: data.name,
	description: data.intro,
	keywords: data.keywords,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body>
				{/* <!-- Google tag (gtag.js) --> */}
				<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-HVDXX026ZQ"></Script>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-HVDXX026ZQ');
					`}
				</Script>

				<Header />
				<SideBar />
				<div id="intro" className="px-8 md:px-24 w-full max-w-[100vw]">
					<div className="w-full max-w-7xl mx-auto">
						<div className="w-64 h-64 rounded-full bg-neon fixed mx-auto my-auto blur-xl inset-0 opacity-20" />
						{children}
					</div>
				</div>
			</body>
		</html>
	);
}
