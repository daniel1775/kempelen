import Svg, { Path } from 'react-native-svg';

type DotsIconProps = {
	width?: number;
	height?: number;
	color?: string;
};

export default function DotsIcon({
	width = 13,
	height = 10,
	color = '#F9AC52',
}: DotsIconProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 13 10'
			fill='none'
		>
			<Path
				d='M3.95958 7.49417L1.00583 4.54042L0 5.53917L3.95958 9.49875L12.4596 0.99875L11.4608 0L3.95958 7.49417Z'
				fill={color}
			/>
		</Svg>
	);
}
