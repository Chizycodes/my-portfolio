'use client';

import Link from 'next/link';
import React, { FC } from 'react';
import { usePathname, useParams } from 'next/navigation';

interface INavOption {
	item: {
		name: string;
		href: string;
	};
}

const NavOption: FC<INavOption> = ({ item }) => {
	let pathname = usePathname();

	const isActive = pathname.includes(item.name.toLowerCase());
	return (
		<p
			className={`border-b-2 cursor-pointer text-text hover:border-neon ${
				isActive ? 'border-neon' : 'border-transparent'
			}`}
		>
			<Link href={item.href}>{item.name}</Link>
		</p>
	);
};

export default NavOption;
