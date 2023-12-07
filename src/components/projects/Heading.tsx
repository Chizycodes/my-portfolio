import Image from 'next/image';
import React from 'react';

type HeadingProps = {
	tag?: string;
};

function Heading({ tag }: HeadingProps) {
	return (
		<div className={`${tag ? 'pt-10 pb-4 sm:pt-24 sm:pb-20' : 'py-12 sm:py-20'} w-full text-center relative`}>
			{tag ? (
				<>
					<h1 className="text-3xl sm:text-4xl inline-block w-auto mx-auto mb-8 relative text-text">
						Projects built with <b>{tag}</b>
						<Image
							width={300}
							height={300}
							alt="tag"
							className="sqD w-8 sm:w-10 -top-6 -right-2 sm:-right-8 sm:-top-8 absolute"
							src="/static/doodles/hero/code.svg"
						/>
					</h1>
				</>
			) : (
				<h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative text-text">Projects</h1>
			)}
			{!tag && (
				<p className="text-xl max-w-3xl m-auto text-textDark">
					I&apos;ve built cool apps using a variety of technologies, from React/Next.js on the frontend to Node.js on
					the backend. Here are some of my favorites.
				</p>
			)}
		</div>
	);
}

export default Heading;
