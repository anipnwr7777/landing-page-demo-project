import { Flex } from "@chakra-ui/react"
import Hero from "./hero"
import OrgScroll from "./orgScroll"
import TweetLove from "./tweet-love"
import Cohorts from "./cohorts"
import Testimonials from "./testimonials"
import Benefits from "./benefits"
import AlumniNetwork from "./alumni-network"
import ButWhyChaiCode from "./why-chai-code"
import Community from "./community"
import AppDownload from "./app-download"
import TopicCloud from "./topic-cloud"

const BodyContent = () => {
    return (
        <Flex width={'100%'} justifyContent={'center'}>
            <Flex
                width={'100%'}
                flexDirection={'column'}
                maxWidth={'1312px'}
                px={{ base: '24px', md: '48px', lg: '64px' }}
            >
                <Hero />
                <OrgScroll />
                <TweetLove />
                <Cohorts />
                <Testimonials />
                <Benefits />
                <AlumniNetwork />
                <ButWhyChaiCode />
                <TopicCloud />
                <Community />
                <AppDownload />
            </Flex>
        </Flex>
    )
}

export default BodyContent