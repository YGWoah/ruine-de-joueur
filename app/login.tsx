import {
	VStack,
	HStack,
	Image,
	Text,
	Box,
	Pressable,
	Input,
	InputField,
	Button,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { colors } from '../assets/theme/theme';
import { Link } from 'expo-router';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

SplashScreen.preventAutoHideAsync();

const login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	let login = () => {
		if (username == 'admin' && password == 'admin') {
			console.log('Logged in');
			router.navigate('/home');
		}
	};

	return (
		<VStack
			h="$full"
			w="$full"
			px={12}
			py={10}
			bgColor={colors.darker_blue}
			justifyContent="center"
			space="2xl"
		>
			<Box justifyContent={'center'} alignItems={'center'}>
				<Text size="5xl" color={'white'}>
					Welcome
				</Text>
			</Box>

			<VStack space="2xl">
				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="username"
						onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
							setUsername(e.nativeEvent.text)
						}
					/>
				</Input>

				<Input
					variant="outline"
					size="md"
					isDisabled={false}
					isInvalid={false}
					isReadOnly={false}
				>
					<InputField
						placeholder="password"
						onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
							setPassword(e.nativeEvent.text)
						}
					/>
				</Input>
				<Button onPress={login}>
					<Text>Login</Text>
				</Button>
			</VStack>
			<VStack space={'sm'}>
				<Link href={'/forgotPassword'}>
					<Text color={colors.lighter_blue} bold={true}>
						Forgot Password
					</Text>
				</Link>
				<Pressable
					w="$full"
					bgColor={colors.lighter_blue}
					h="$10"
					borderRadius={10}
					justifyContent={'center'}
					alignItems={'center'}
				>
					<Text fontWeight={'$semibold'} bold={true}>
						Login
					</Text>
				</Pressable>
			</VStack>
		</VStack>
	);
};

export default login;
