import { Image, StyleSheet, Platform, View } from 'react-native';
import { HStack, Heading, VStack, Button, Text } from '@gluestack-ui/themed';
import { colors } from '@/assets/theme/theme';
import { router } from 'expo-router';

export default function HomeScreen() {
	return (
		<VStack
			w={'$full'}
			h={'$full'}
			bg={colors.darker_blue}
			alignItems="center"
			justifyContent="center"
			space="4xl"
		>
			<Heading color="$white">Welcome to Ruine de Joueur Game</Heading>
			<HStack width={'$3/4'} height={50} borderRadius={12}>
				<Button
					// href="/login"
					width={'$1/2'}
					height="$full"
					bgColor={colors.lighter_blue}
					onPress={() => {
						router.push('/login');
					}}
					style={{
						borderRadius: 0,
						borderTopLeftRadius: 8,
						borderBottomLeftRadius: 8,
					}}
				>
					<Text bold={true}>Login</Text>
				</Button>

				<Button
					// href="/signup"
					width={'$1/2'}
					height="$full"
					bgColor={colors.darker_blue}
					onPress={() => {
						router.push('/signup');
					}}
					style={{
						borderRadius: 0,
						borderTopRightRadius: 8,
						borderBottomRightRadius: 8,
					}}
				>
					<Text color="white" bold={true}>
						Sign Up
					</Text>
				</Button>
			</HStack>
		</VStack>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 8,
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
