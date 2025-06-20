const data = {
	name: "Joy Okwudire",
	image: "/avatar2.png",
	username: "chizycodes",
	resumeUrl: "https://drive.google.com/file/d/1LGbGdAFTqqqMzH9z3sHyQOIEpKAa4i8j/view?usp=drive_link",
	keywords:
		"Joy, Okwuidre, Chisom, Joy Okwudire, Joy Chisom Okwuidre web developer, Frontend developer, frontend engineer, backend developer, software developer",
	profession: "Software developer",
	intro:
		"I specialize in building clean, efficient frontend and backend solutions that turn ideas into real, user-focused products. I enjoy working across the stack, from crafting responsive UIs to developing scalable APIs. Let’s build something amazing together! 🚀",
	about: [
		`Hi, I’m Joy Okwudire — a software developer with over four years of experience building web and mobile applications. I enjoy turning ideas into useful, user-friendly products through clean, efficient code. My experience covers a range of projects, from e-commerce platforms to ERP systems, where I’ve focused on creating smooth and responsive user interfaces.`,

		`I specialize in frontend development using tools like React.js, React Native, Next.js and Vue.js, but I also have working knowledge of backend technologies like Node.js, Express and MongoDB, which allows me to understand and contribute to full-stack workflows when needed. I’ve collaborated with cross-functional teams to build reusable components, optimize performance, and integrate APIs — delivering complete, user-ready features.`,

		`I’m comfortable working in agile teams and enjoy learning from every project I take on. I’m also a certified AWS Cloud Practitioner, and I’m always open to learning new technologies and growing as a developer.`,

		`When I’m not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good book. I’m passionate about using technology to solve real-world problems and am always looking for opportunities to collaborate on exciting projects. If you’re interested in working together or just want to chat about tech, feel free to reach out!`,
	],

	badges: [
		{
			name: "AWS Cloud Practitioner",
			image: "/images/aws-certified-cloud-practitioner.png",
			link: "https://www.credly.com/badges/07a7666c-c210-4d88-b80c-4f4bcd3874b7/public_url",
		},
	],

	skills: [
		{
			src: "/images/skills/react.svg",
			name: "React.js",
		},
		{
			src: "/images/skills/nextJS.svg",
			name: "Next.js",
		},
		{
			src: "/images/skills/javascript.svg",
			name: "Javascript",
		},
		{
			src: "/images/skills/vue.svg",
			name: "Vue.js",
		},
		{
			src: "/images/skills/typescript.svg",
			name: "Typescript",
		},
		{
			src: "/images/skills/node.svg",
			name: "Node.js",
		},
		{
			src: "/images/skills/express.png",
			name: "Express",
		},
		{
			src: "/images/skills/mongoDB.svg",
			name: "MongoDB",
		},
		{
			src: "/images/skills/aws.svg",
			name: "AWS",
		},
		{
			src: "/images/skills/bootstrap.svg",
			name: "Bootstrap",
		},
		{
			src: "/images/skills/materialui.svg",
			name: "Material UI",
		},
		{
			src: "/images/skills/tailwind.svg",
			name: "Tailwind",
		},
		{
			src: "/images/skills/mysql.svg",
			name: "MySQL",
		},
		{
			src: "/images/skills/python.svg",
			name: "Python",
		},
		{
			src: "/images/skills/html.svg",
			name: "HTML",
		},
		{
			src: "/images/skills/css.svg",
			name: "CSS",
		},
	],
	projects: [
		{
			title: "Yaraa.io",
			img: "/images/yaraa2.png",
			about:
				"An ERP system for managing projects, sales, procurement, and contracts. I built the project management module and integration feature for ERPs like QuickBooks and Xero.",
			tags: ["React", "Next.js", "TailwindCSS", "SCSS", "Ant Design", "Jira"],
			links: {
				live: "https://www.yaraa.io",
			},
			role: "Frontend Developer",
			id: 7,
		},
		{
			title: "Wallpaper App",
			img: "/images/wallpaper_app.png",
			about:
				"A mobile app for browsing, filtering, sharing, and downloading high-quality wallpapers using the Pixabay API.",
			tags: ["React Native", "Expo", "Pixabay API", "StyleSheet", "Android", "iOS"],
			links: {
				github: "https://github.com/Chizycodes/react-native-wallpaper-app",
				live: "https://expo.dev/preview/update?message=First%20eas%20update&updateRuntimeVersion=1.0.0&createdAt=2024-09-30T21%3A11%3A04.063Z&slug=exp&projectId=dccb92dd-64b2-4425-a786-a3fa70fd7885&group=a1944d0c-8a0c-4ef9-b6b9-c53834e43382",
			},
			role: "Mobile Developer",
			id: 6,
		},
		{
			title: "Swiftwaze",
			img: "/images/swiftwaze.png",
			about: "A fintech app for sending and receiving money, data, gift cards and airtime across borders.",
			tags: ["React.js", "Redux", "MUI", "React Query"],
			links: {
				live: "https://demo.swiftwaze.com/",
			},
			role: "Frontend developer",
			id: 5,
		},

		{
			title: "Feegor",
			img: "/images/feegor.png",
			about: "An e-commerce platform where retailers can source goods directly from suppliers/manufacturers.",
			tags: ["Next.js", "React Native", "TailwindCSS", "Daisy UI", "Mobile"],
			links: {
				live: "https://www.feegor.com/",
			},
			role: "Frontend Developer",
			id: 4,
		},
		{
			title: "DiagnoSync AI",
			img: "/images/diagnosync.png",
			about:
				"Developed during the 7-day Klusterthon 2023 Hackathon. DiagnoSync provides answers to health related questions and concerns",
			tags: ["Next.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "OpenAI API"],
			links: {
				github: "https://github.com/Chizycodes/klusterthon-326",
				live: "https://klusterthon-326.vercel.app",
			},
			role: "FullStack Developer",
			id: 3,
		},
		{
			title: "Avatar AI",
			img: "/images/avatarai.png",
			about: "A web app for creating AI generated avatars, built as a final project in the HNGi9 Internship.",
			tags: ["React.js", "Vite", "TailwindCSS", "Daisy UI", "Jest", "Storybook"],
			links: {
				github: "https://github.com/Chizycodes/avatarai.web",
				live: "https://avatarai-web-eight.vercel.app/",
			},
			role: "Frontend Developer",
			id: 2,
		},
		{
			title: "Game Info Site",
			img: "/images/ignite.png",
			about:
				"Game site leveraging the Rawg API, allows users to explore, search, and access detailed information about various games.",
			tags: ["React.js", "Redux", "Styled Components", "Rawg API"],
			links: {
				github: "https://github.com/Chizycodes/react-game_site",
				live: "https://ignite-game-site.vercel.app/",
			},
			role: "Frontend Developer",
			id: 1,
		},
	],
	Experience: [
		{
			company: "Pericius Technologies",
			jobtitle: "Frontend Developer",
			startYear: "Feb 2023",
			endYear: "present",
		},
		{
			company: "Startup Builder",
			jobtitle: "Frontend Developer",
			startYear: "Jul 2022",
			endYear: "Nov 2023",
		},
		{
			company: "VasitiDotCom (now Feegor)",
			jobtitle: "Frontend Developer",
			startYear: "Apr 2022",
			endYear: "Jan 2023",
		},
		{
			company: "Genesys Tech Hub",
			jobtitle: "Frontend Developer",
			startYear: "May 2022",
			endYear: "Sep 2021",
		},
	],
	links: [
		{
			name: "GitHub",
			icon: "github.svg",
			link: "https://github.com/chizycodes",
		},
		{
			name: "Mail me",
			icon: "mail.svg",
			link: "mailto:okwudirejoy@gmail.com",
		},
		{
			name: "LinkedIn",
			icon: "linkedin.svg",
			link: "https://www.linkedin.com/in/joyokwudire",
		},
		// {
		// 	name: 'Twitter',
		// 	icon: 'twitter.svg',
		// 	link: 'https://twitter.com/chizycodes',
		// },
	],
};

export default data;
