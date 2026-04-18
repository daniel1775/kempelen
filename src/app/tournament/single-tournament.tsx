import { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import TournamentHeader from '@/src/UI/molecules/tournament/TournamentHeader';
import TournamentInfo from '@/src/UI/organisms/tournament/TournamentInfo';
import TournamentTabs from '@/src/UI/molecules/tournament/TournamentTabs';

export default function SingleTournament() {
	const [activeTab, setActiveTab] = useState<'rounds' | 'standings'>('standings');

	// Mock data - in a real app these would come from props or a hook
	const tournamentData = {
		title: 'Current-tournament',
		description: 'description of the tournament lorem ipsum dolor allk sj doij kdjkds skdljf skdjfljk',
		status: 'in progress',
		imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop', // A space/rocket themed image
	};

	return (
		<ScrollView className='flex-1 bg-gray'>
			<TournamentHeader imageUrl={tournamentData.imageUrl} />
			
			<TournamentInfo
				title={tournamentData.title}
				description={tournamentData.description}
				status={tournamentData.status}
				onEdit={() => console.log('Edit pressed')}
				onDelete={() => console.log('Delete pressed')}
				onMoreInfo={() => console.log('More info pressed')}
			/>

			<View className='px-6'>
				<TournamentTabs
					activeTab={activeTab}
					onTabChange={setActiveTab}
				/>

				{/* Tab Content */}
				<View className='mt-8 mb-10'>
					{activeTab === 'rounds' ? (
						<Text className='text-light-gray text-center text-lg italic'>
							Rounds content will appear here
						</Text>
					) : (
						<Text className='text-light-gray text-center text-lg italic'>
							Standings content will appear here
						</Text>
					)}
				</View>
			</View>
		</ScrollView>
	);
}
