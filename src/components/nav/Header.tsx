'use client';

// import Logo from '../../Icons/Logo';
import NavOption from './NavOption';
import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';
import { navOptions } from './nav-utils';
import Link from 'next/link';

const Header = () => {
	const [handleShow, setHandleShow] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const listener = () => {
				if (window.scrollY > 80) {
					setHandleShow(true);
				} else {
					setHandleShow(false);
				}
			};
			window.addEventListener('scroll', listener);

			return () => {
				window.removeEventListener('scroll', listener);
			};
		}
	}, []);

	return (
		<nav
			className={`px-8 md:px-24 fixed md:py-4 py-6 bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full max-w-[100vw] top-0 z-20 flex justify-between items-center ${
				handleShow ? 'shadow-2xl' : ''
			}`}
		>
			<div className="flex justify-between items-center w-full max-w-7xl mx-auto">
				<Link href="/">
					{/* <Logo className="cursor-pointer" /> */}
					<h1 className="text-neon font-bold text-4xl font-sora">J.O</h1>
				</Link>

				<ol className="hidden space-x-8 md:flex">
					{navOptions.map((item, i) => (
						<NavOption item={item} key={i} />
					))}
				</ol>
			</div>
		</nav>
	);
};

export default Header;
