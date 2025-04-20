import { Flex, Heading, Image, Show, Text, Box, Button } from "@chakra-ui/react"
import trustedUsers from "../../../assets/svg/trusted-users.svg"
import bounties from "../../../assets/svg/bounties.svg"
import peerLearning from "../../../assets/svg/peer-learning.svg"
import codeReviews from "../../../assets/svg/reviews-nav-icon.svg"
import alumniNetwork from "../../../assets/svg/alumni-network.svg"
import doubtSession from "../../../assets/svg/doubt-session.svg"
import groupProjects from "../../../assets/svg/group-projects.svg"
import virtualHostel from "../../../assets/svg/virtual-hostel.svg"
import rightArrow from "../../../assets/svg/right-arrow.svg"
import playButton from "../../../assets/svg/play-button.svg"
import chaiIcon from "../../../assets/svg/chai-icon.svg"
import rippleIcon from "../../../assets/lottie/ripple.lottie"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import chartIcon from '../../../assets/lottie/chart.lottie'

const Usps = ({ iconSrc, name }) => {
    return (
        <Flex gap={'12px'}>
            <Image src={iconSrc} />
            <Text>{name}</Text>
        </Flex>
    )
}

const MainContentHero = () => {
    return (
        <Flex
            flexDirection={'column'}
            alignItems={{ base: 'flex-start', md: 'center' }}
        >
            <Flex gap={'8px'}>
                <Image src={trustedUsers} />
                <Text align={'center'}>
                    Trusted by 1.5M code Learners
                </Text>
                {/* <Box height={'48px'} width={'46px'}>
                    <DotLottieReact
                        src={chartIcon}
                        loop
                        autoplay
                        // style={{
                        //     width: '70px',
                        //     height: '50px',
                        // }}
                    />
                </Box> */}
            </Flex>
            <Show above="md">
                <Flex gap={'8px'} alignItems={'center'} mt={'16px'}>
                    <Heading align={'center'}>
                        EMPOWER YOUR CODING JOURNEY
                    </Heading>
                    <Image src={chaiIcon} />
                </Flex>
            </Show>
            <Show below="md">
                <Heading align={'left'} mt={'16px'}>
                    EMPOWER YOUR CODING JOURNEY
                </Heading>
            </Show>
            <Flex mt={'24px'} gap={'32px'} flexDirection={'column'} alignItems={{ base: 'flex-start', md: 'center' }}>
                <Show above="md">
                    <Heading align={'center'} mt={'16px'} variant={'h3'}>
                        AN UNMATCHED CODING COURSE EXPERIENCE YOU WON'T FIND ANYWHERE ELSE
                    </Heading>
                </Show>
                <Show below="md">
                    <Heading align={'left'} mt={'16px'} variant={'h3'}>
                        AN UNMATCHED CODING COURSE EXPERIENCE YOU WON'T FIND ANYWHERE ELSE
                    </Heading>
                </Show>
                <Show above="md">
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Flex gap={'24px'} alignItems={'center'}>
                            <Usps iconSrc={bounties} name="Bounties" />
                            <Usps iconSrc={peerLearning} name="Peer Learning" />
                            <Usps iconSrc={codeReviews} name="Code Reviews" />
                            <Usps iconSrc={virtualHostel} name="Virtual Hostel" />
                        </Flex>
                        <Flex gap={'24px'} mt={'24px'} alignItems={'center'}>
                            <Usps iconSrc={alumniNetwork} name="Alumni Network" />
                            <Usps iconSrc={doubtSession} name="Doubt Sessions" />
                            <Usps iconSrc={groupProjects} name="Group Projects" />
                        </Flex>
                    </Flex>
                </Show>
                <Show below="md">
                    <Flex flexDirection={'column'} alignItems={'flex-start'} gap={'16px'}>
                        <Flex gap={'24px'} alignItems={'flex-start'}>
                            <Usps iconSrc={bounties} name="Bounties" />
                            <Usps iconSrc={peerLearning} name="Peer Learning" />
                        </Flex>
                        <Flex gap={'24px'} alignItems={'flex-start'}>
                            <Usps iconSrc={codeReviews} name="Code Reviews" />
                            <Usps iconSrc={virtualHostel} name="Virtual Hostel" />
                        </Flex>
                        <Flex gap={'24px'} alignItems={'flex-start'}>
                            <Usps iconSrc={alumniNetwork} name="Alumni Network" />
                            <Usps iconSrc={doubtSession} name="Doubt Sessions" />
                        </Flex>
                        <Usps iconSrc={groupProjects} name="Group Projects" />
                    </Flex>
                </Show>
                <Flex gap={'16px'}>
                    <Button 
                        backgroundColor={'primary'} 
                        color={'white.0'}
                        onClick={() => window.location.href = 'https://courses.chaicode.com/learn/view-all?show=batch&type=17'}
                        overflow={'hidden'}
                    >
                        <Flex align={'center'} position={'relative'} gap={'8px'}>
                            <Box
                                width="40px"
                                height="40px"
                                position={'relative'}
                            >
                                <Box
                                    position={'absolute'}
                                    top={'-200%'}
                                    left={'-200%'}
                                >
                                    <DotLottieReact
                                        src={rippleIcon}
                                        loop
                                        autoplay
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                        }}
                                    />
                                </Box>
                            </Box>
                            <Text>
                                Check all Live Cohorts
                            </Text>
                            <Image src={rightArrow}/>
                        </Flex>
                    </Button>
                    <Button borderRadius={'24px'} border={'1px solid #FE9332'} padding={0} backgroundColor={'white.0'}>
                        <Flex justifyContent={'center'} alignItems={'center'}>
                            <Image src={playButton}/>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MainContentHero