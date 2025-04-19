import { Box, Flex, Image } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BodyContent from "./components/BodyContent"
import bgVector from "./assets/bg-vector.svg"

const App = () => {
	return (
		<Flex
			height={'100vh'}
			flexDirection={'column'}
			alignItems={{ base: 'flex-start', md: 'center' }}
		>
			<Box
				position={'absolute'}
				top={{base: '-25vh', md: '-10vh'}}
				left={'-10vw'}
				overflow={'hidden'}
			>
				<Image
					src={bgVector}
					height={'150vh'}
					width={'200vh'}
				/>
			</Box>
			<Navbar />
			<BodyContent />
		</Flex>
	)
}

export default App
