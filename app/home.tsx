import { Text, VStack, Button, HStack } from '@gluestack-ui/themed';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useState, useRef } from 'react';

let randomFortune = () => {
	let fortune = Math.floor(Math.random() * 90) + 10;
	return fortune;
};

let getDiceName = (result: number) => {
	switch (result) {
		case 1:
			return 'dice-one';
		case 2:
			return 'dice-two';
		case 3:
			return 'dice-three';
		case 4:
			return 'dice-four';
		case 5:
			return 'dice-five';
		case 6:
			return 'dice-six';
		default:
			return 'dice';
	}
};

const HomePage = () => {
	const [playerFortune, setPlayerFortune] = useState(randomFortune());
	const [casinoFortune, setCasinoFortune] = useState(100);
	const [diceResult, setDiceResult] = useState(0);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

	let diceRoll = () => {
		let result = Math.floor(Math.random() * 6) + 1;
		return result;
	};

	let lanceDice = () => {
		let result = diceRoll();
		setDiceResult(result);
		if (result === 2 || result === 3) {
			setCasinoFortune((casinoFortune) => casinoFortune - 1);
			setPlayerFortune((playerFortune) => playerFortune + 1);
		} else {
			setCasinoFortune((casinoFortune) => casinoFortune + 1);
			setPlayerFortune((playerFortune) => playerFortune - 1);
		}
	};

	let startGame = () => {
		let id = setTimeout(() => {
			lanceDice();
		}, 1000);
		setTimeoutId(id);
	};

	let stopGame = () => {
		clearTimeout(timeoutId);
		setTimeoutId(undefined);
	};

	if (playerFortune <= 0 || casinoFortune <= 0) {
		return (
			<VStack
				bg="$white"
				w={'$full'}
				h={'$full'}
				alignItems="center"
				justifyContent="center"
				padding={40}
				space="md"
			>
				<Text size="xl" color={'black'}>
					{playerFortune <= 0 ? 'Vous avez perdu' : 'Vous avez gagné'}
				</Text>
			</VStack>
		);
	} else
		return (
			<VStack
				bg="$white"
				w={'$full'}
				h={'$full'}
				alignItems="center"
				justifyContent="center"
				padding={40}
				space="md"
			>
				<VStack space="md" w="$full">
					<Text size="xl" color={'black'}>
						Fortune de Joueur :{playerFortune}
					</Text>
					<Text size="xl" color={'black'}>
						Fortune de Casino :{casinoFortune}
					</Text>
				</VStack>
				<Button onPress={startGame}>
					<Text bold={true} color="$white" size="lg">
						Lancer le dé
					</Text>
				</Button>
				<HStack alignItems="center" space="md">
					<Text size="xl" color={'black'}>
						Résultat du dé :
					</Text>
					<FontAwesome5 name={getDiceName(diceResult)} size={64} color="black" />
				</HStack>
				<Button onPress={stopGame}>
					<Text bold={true} color="$white" size="lg">
						Terminer le jeu
					</Text>
				</Button>
			</VStack>
		);
};

export default HomePage;
