import { Box, Flex, Image } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BodyContent from "./components/BodyContent"
import bgVector from "./assets/bg-vector.svg"

const App = () => {
	return (
		<Flex
			height={'200vh'}
			flexDirection={'column'}
			alignItems={{ base: 'flex-start', md: 'center' }}
		>
			<Box
				position={'absolute'}
				top={0}
				left={0}
				height={'100vh'}
				width={'100vw'}
				overflow={'hidden'}
			>
				<Image
					position={'absolute'}
					src={bgVector}
					width={'180%'}
					height={'180%'}
					objectFit={'cover'}
					top={'-200px'}
				/>
			</Box>
			<Navbar />
			<BodyContent />
		</Flex>
	)
}

export default App
