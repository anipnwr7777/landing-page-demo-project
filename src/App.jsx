import { Box, Flex, Image } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import BodyContent from "./components/BodyContent"
import bgVector from "./assets/svg/bg-vector.svg"
import Footer from "./components/Footer"

const App = () => {
	return (
		<main>
			<Flex
				flexDirection={'column'}
				alignItems={{ base: 'flex-start', md: 'center' }}
				width="100%"
				overflow="hidden"
			>
				<Box
					position={'absolute'}
					top={0}
					left={0}
					height={'150vh'}
					width={'100%'}
					overflow={'hidden'}
					zIndex={-1}
				>
					<Image
						position={'absolute'}
						src={bgVector}
						width={'180%'}
						height={'180%'}
						objectFit={'cover'}
						top={'-200px'}
						loading="lazy"
						alt="An Image: decorative background pattern"
					/>
				</Box>
				<Navbar />
				<BodyContent />
				<Footer />
			</Flex>
		</main>
	)
}

export default App
