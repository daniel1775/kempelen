import Svg, { Path } from 'react-native-svg';

type PlusIconProps = {
	width?: number;
	height?: number;
	color?: string;
};

export default function PlusIcon({
	width = 13,
	height = 13,
	color = '#F9AC52',
}: PlusIconProps) {
	return (
		<Svg
			width={width}
			height={height}
			viewBox='0 0 9 9'
			fill='none'
		>
			<Path
				d='M8.75 5H5V8.75H3.75V5H0V3.75H3.75V0H5V3.75H8.75V5Z'
				fill={color}
			/>
		</Svg>
	);
}
