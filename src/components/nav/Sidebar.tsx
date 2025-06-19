'use client';
import NavOption from './NavOption';
import { navOptions } from './nav-utils';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoIosClose } from 'react-icons/io';

const SideBar = () => {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<>
			{!showSidebar && (
				<div
					className="cursor-pointer md:hidden fixed grid place-items-center right-8 top-6 z-50"
					onClick={() => setShowSidebar(true)}
				>
					<FiMenu color="#52DEE5" size="25" />
				</div>
			)}

			<div
				className={`bg-bgblue px-10 flex-col gap-4 flex md:hidden justify-center items-center fixed min-h-[100vh] top-0 right-0 z-50 shadow-xl max-w-xs w-full transition-all duration-500 ease-in-out ${
					showSidebar ? "translate-x-0 " : "translate-x-full"
				}`}
			>
				<div
					className="grid cursor-pointer absolute top-6 right-8 w-10"
					onClick={() => setShowSidebar(false)}
				>
					<IoIosClose color="#52DEE5" size="40" />
				</div>
				<div className="flex flex-col gap-4">
					{navOptions.map((option, i) => (
						<NavOption item={option} key={i} />
					))}
				</div>
			</div>
		</>
	);
};

export default SideBar;
