import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				neon: '#52DEE5',
				text: '#C7D3FF',
				textDark: '#A1ABBF',
				bgblue: '#222E50',
				darkerBlue: '#0A192F',
			},
			fontFamily: {
				sora: ['Sora', 'sans-serif'],
				fira: ['Fira Code', 'monospace'],
			},
		},
	},
	plugins: [],
};
export default config;
