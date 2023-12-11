'use client';

import Link from 'next/link';
import React, { FC } from 'react';

interface INavOption {
	item: {
		name: string;
		href: string;
	};
}

const NavOption: FC<INavOption> = ({ item }) => {
	return (
		<p className="border-b-2 border-transparent cursor-pointer text-text hover:border-neon">
			<Link href={item.href}>{item.name}</Link>
		</p>
	);
};

export default NavOption;
