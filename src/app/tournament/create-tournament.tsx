import { ScrollView, View } from 'react-native';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';
import CreateTournamentForm from '@/src/UI/organisms/tournament/CreateTournamentForm';

export default function CreateTournament() {
	return (
		<ScreenLayout title='Initial settings'>
			<ScrollView>
				<CreateTournamentForm />
			</ScrollView>
		</ScreenLayout>
	);
}
