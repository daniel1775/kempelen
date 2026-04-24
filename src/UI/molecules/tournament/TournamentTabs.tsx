import { Pressable, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';

type TypeTab = 'rounds' | 'standings';

type TypeTournamentTabsProps = {
	activeTab: TypeTab;
	onTabChange: (tab: TypeTab) => void;
};

const TournamentTabs = ({
	activeTab,
	onTabChange,
}: TypeTournamentTabsProps) => {
	const { t } = useTranslation();
	const tabStyles = 'flex-1 py-2 rounded-md border ';

	return (
		<View className='flex-row justify-between gap-4 mt-6'>
			<Pressable
				onPress={() => onTabChange('rounds')}
				testID='tab-rounds'
				className={`${tabStyles} ${
					activeTab === 'rounds'
						? 'bg-orange border-orange'
						: 'border-neutral-gray'
				}`}
			>
				<Text
					className={`text-center text-xl ${
						activeTab === 'rounds' ? 'text-gray' : 'text-orange'
					}`}
				>
					{t('rounds')}
				</Text>
			</Pressable>
			<Pressable
				onPress={() => onTabChange('standings')}
				testID='tab-standings'
				className={`${tabStyles} ${
					activeTab === 'standings'
						? 'bg-orange border-orange'
						: 'border-neutral-gray'
				}`}
			>
				<Text
					className={`text-center text-xl ${
						activeTab === 'standings' ? 'text-gray' : 'text-orange'
					}`}
				>
					{t('standings')}
				</Text>
			</Pressable>
		</View>
	);
};

export default TournamentTabs;
