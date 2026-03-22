import { View } from 'react-native';
import { useEffect } from 'react';
import { auth } from '@/src/lib/firebase';
import { signInAnonymously } from 'firebase/auth';

import ScreenLayout from '@/src/UI/layouts/ScreenLayout';

export default function Home() {
	useEffect(() => {
		/* 
		const auth = getAuth();
		signInAnonymously(auth)
			.then(() => {})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			}); */
	}, []);

	return (
		<ScreenLayout title='Home'>
			<View></View>
		</ScreenLayout>
	);
}
