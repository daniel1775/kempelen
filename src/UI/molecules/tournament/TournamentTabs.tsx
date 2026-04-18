import { Pressable, Text, View } from 'react-native';

type TypeTab = 'rounds' | 'standings';

type TypeTournamentTabsProps = {
	activeTab: TypeTab;
	onTabChange: (tab: TypeTab) => void;
};

const TournamentTabs = ({ activeTab, onTabChange }: TypeTournamentTabsProps) => {
	return (
		<View className='flex-row justify-between gap-4 mt-6'>
			<Pressable
				onPress={() => onTabChange('rounds')}
				testID='tab-rounds'
				className={`flex-1 py-4 rounded-md border ${
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
					Rounds
				</Text>
			</Pressable>
			<Pressable
				onPress={() => onTabChange('standings')}
				testID='tab-standings'
				className={`flex-1 py-4 rounded-md border ${
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
					Standings
				</Text>
			</Pressable>
		</View>
	);
};

export default TournamentTabs;
