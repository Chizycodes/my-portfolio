'use client';
import React from 'react';
import { LineSvg } from '@/assets/icons';
import { Title } from '../common/Title';
import data from '@/data';
import ContactButtons from './ContactButtons';

const Contact = () => {
	return (
		<section>
			{/* <Title title="Get in Touch" /> */}
			<div className="z-50 flex flex-col items-center justify-center w-full" id="contact">
				<div className="flex items-center justify-center mt-10 space-x-5">
					<LineSvg className="relative w-20 h-1 md:w-60" />
					<h2 className="text-xl text-text md:text-4xl whitespace-nowrap">Get in Touch</h2>
					<LineSvg className="relative w-20 h-1 md:w-60" />
				</div>

				<div className="flex flex-wrap items-center justify-center mx-auto">
					{data.links.map(({ icon, link, name }, i) => (
						<div key={name}>
							<ContactButtons icon={icon} link={link} marginLeft={i === 0 ? 'ml-0' : 'ml-6 md:ml-10'} name={name} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Contact;
