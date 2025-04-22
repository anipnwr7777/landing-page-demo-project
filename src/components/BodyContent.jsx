import { Flex } from "@chakra-ui/react"
import Hero from "./hero"
import OrgScroll from "./orgScroll"
import TweetLove from "./tweet-love"
import Cohorts from "./cohorts"

const BodyContent = () => {
    return (
        <Flex width={'100%'} justifyContent={'center'}>
            <Flex
                width={'100%'}
                flexDirection={'column'}
                height={'100vh'}
                maxWidth={'1312px'}
                mx={{ base: '24px', md: '48px', lg: '64px' }}
            >
                <Hero />
                <OrgScroll />
                <TweetLove />
                <Cohorts />
            </Flex>
        </Flex>
    )
}

export default BodyContent