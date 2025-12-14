import { TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, View } from 'react-native';

import KempelenIcon from '@/assets/svg/Kempelen';
import PlayerIcon from '@/assets/svg/Player';
import SettingsIcon from '@/assets/svg/Settings';
import StatisticsIcon from '@/assets/svg/Statistics';
import TournamentIcon from '@/assets/svg/Tournament';

type TypeTabButtonProps = {
	iconType: 'tournament' | 'player' | 'statistics' | 'settings' | 'kempelen';
} & TabTriggerSlotProps;

const TabButton = ({ isFocused, iconType, ...props }: TypeTabButtonProps) => {
	const activeTabItemStyles =
		'absolute top-[-10] bottom-[-10] left-[-10] right-[-10] rounded-full bg-orange opacity-20';
	const iconsMeasures = {
		width: 25,
		height: 25,
	};

	const renderIcon = () => {
		switch (iconType) {
			case 'tournament':
				return (
					<TournamentIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				);
			case 'player':
				return (
					<PlayerIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				);
			case 'statistics':
				return (
					<StatisticsIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				);
			case 'settings':
				return (
					<SettingsIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				);
			case 'kempelen':
				return (
					<KempelenIcon
						height={iconsMeasures.height}
						width={iconsMeasures.width}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<Pressable
			{...props}
			hitSlop={8}
		>
			{isFocused && <View className={activeTabItemStyles} />}
			{renderIcon()}
		</Pressable>
	);
};

export default TabButton;
