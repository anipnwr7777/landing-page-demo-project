import { Flex, Heading, Image, Show, Text, Box, Button } from "@chakra-ui/react"
import trustedUsers from "../../../assets/trusted-users.svg"
import bounties from "../../../assets/bounties.svg"
import peerLearning from "../../../assets/peer-learning.svg"
import codeReviews from "../../../assets/reviews-nav-icon.svg"
import alumniNetwork from "../../../assets/alumni-network.svg"
import doubtSession from "../../../assets/doubt-session.svg"
import groupProjects from "../../../assets/group-projects.svg"
import virtualHostel from "../../../assets/virtual-hostel.svg"
import rightArrow from "../../../assets/right-arrow.svg"
import playButton from "../../../assets/play-button.svg"
import chaiIcon from "../../../assets/chai-icon.svg"
import rippleIcon from "../../../assets/ripple.lottie"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
                    >
                        <Flex align={'center'} position={'relative'}>
                            <Box 
                                position={'absolute'} 
                                left={'0px'}
                                // top={0} 
                                // width="100%" 
                                // height="100%" 
                                // overflow="hidden"
                                // pointerEvents="none"
                            >
                                {/* <DotLottieReact
                                    src={rippleIcon}
                                    loop
                                    autoplay
                                    // style={{
                                    //     width: '100%',
                                    //     height: '100%',
                                    //     // objectFit: 'cover'
                                    // }}
                                /> */}
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