import Svg, { Path } from 'react-native-svg';

type TournamentIconProps = {
	width?: number;
	height?: number;
	color?: string;
};

export default function TournamentIcon({
	width = 27,
	height = 27,
	color = '#F9AC52',
}: TournamentIconProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 27 27'
			fill='none'
		>
			<Path
				d='M6 27V24H12V19.35C10.775 19.075 9.6815 18.5565 8.7195 17.7945C7.7575 17.0325 7.051 16.076 6.6 14.925C4.725 14.7 3.1565 13.8815 1.8945 12.4695C0.6325 11.0575 0.001 9.401 0 7.5V3H6V0H21V3H27V7.5C27 9.4 26.3685 11.0565 25.1055 12.4695C23.8425 13.8825 22.274 14.701 20.4 14.925C19.95 16.075 19.244 17.0315 18.282 17.7945C17.32 18.5575 16.226 19.076 15 19.35V24H21V27H6ZM6 11.7V6H3V7.5C3 8.45 3.275 9.3065 3.825 10.0695C4.375 10.8325 5.1 11.376 6 11.7ZM21 11.7C21.9 11.375 22.625 10.831 23.175 10.068C23.725 9.305 24 8.449 24 7.5V6H21V11.7Z'
				fill={color}
			/>
		</Svg>
	);
}
