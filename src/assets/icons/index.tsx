import { FC } from 'react';

interface Props {
	className?: string;
}

export const LineSvg: FC<Props> = ({ className, ...otherProps }) => {
	return (
		<svg
			className={className}
			{...otherProps}
			fill="none"
			height="2"
			viewBox="0 0 438 2"
			width="438"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 1H438" stroke="#C7D3FF" />
		</svg>
	);
};
