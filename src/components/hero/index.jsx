import { Flex } from "@chakra-ui/react"
import MainContentHero from "./components/MainContentHero"
import Thumbnail from "./components/Thumbnail"

const Hero = () => {
    return (
        <Flex
            flexDirection={'column'}
            gap={'72px'}
            mt={'80px'}
        >
            <MainContentHero />
            <Thumbnail />
        </Flex>
    )
}

export default Hero