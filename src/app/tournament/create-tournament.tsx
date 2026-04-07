import { ScrollView, View } from 'react-native';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreateTournamentForm from '@/src/UI/organisms/tournament/CreateTournamentForm';

export default function CreateTournament() {
	return (
		<ScreenLayout title='Initial settings'>
			<ScrollView>
				<View className='mt-16' />
				<CreateTournamentForm />
			</ScrollView>
		</ScreenLayout>
	);
}
