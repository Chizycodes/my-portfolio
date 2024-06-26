import { LineSvg } from '@/assets/icons';
import { FC } from 'react';

interface TitleProps {
	title: string;
}

export const Title: FC<TitleProps> = ({ title }) => {
	return (
		<div className="flex items-center w-full mt-20 mb-10" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
			<h2 className="text-3xl md:text-4xl text-text">
				<span className="text-neon font-fira">{title}</span>
			</h2>
			<LineSvg className="relative md:w-96 hidden md:inline-flex !ml-10" />
		</div>
	);
};
