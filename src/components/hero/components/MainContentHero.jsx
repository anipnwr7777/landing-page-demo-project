import { Flex, Heading, Image, Show, Text, Box, Button } from "@chakra-ui/react"
import { useState } from "react"
import trustedUsers from "../../../assets/svg/trusted-users.svg"
import bounties from "../../../assets/svg/bounties.svg"
import peerLearning from "../../../assets/svg/peer-learning.svg"
import codeReviews from "../../../assets/svg/reviews-nav-icon.svg"
import alumniNetwork from "../../../assets/svg/alumni-network.svg"
import doubtSession from "../../../assets/svg/doubt-session.svg"
import groupProjects from "../../../assets/svg/group-projects.svg"
import virtualHostel from "../../../assets/svg/virtual-hostel.svg"
import playButton from "../../../assets/svg/play-button.svg"
import playButtonWhite from "../../../assets/svg/playbutton-white.svg"
import chaiIcon from "../../../assets/svg/chai-icon.svg"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import chartIcon from '../../../assets/lottie/chart.lottie'
import CTAButton from "../../common/CTAButton"

const Usps = ({ iconSrc, name, alt }) => {
    return (
        <Flex gap={'12px'}>
            <Image src={iconSrc} alt={alt} />
            <Text>{name}</Text>
        </Flex>
    )
}

const MainContentHero = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Flex
            flexDirection={'column'}
            alignItems={{ base: 'flex-start', md: 'center' }}
        >
            <Flex gap={'8px'} width={'100%'} justifyContent={'center'} align={'center'}>
                <Image src={trustedUsers} alt="An Icon: trusted users badge" />
                <Text align={'center'}>
                    Trusted by 1.5M code Learners
                </Text>
                <Box height={'32px'} width={'32px'}>
                    <DotLottieReact
                        src={chartIcon}
                        loop
                        autoplay
                    />
                </Box>
            </Flex>
            <Show above="md">
                <Flex gap={'8px'} alignItems={'center'} mt={'16px'}>
                    <Heading align={'center'}>
                        EMPOWER YOUR CODING JOURNEY
                    </Heading>
                    <Image src={chaiIcon} alt="An Icon: ChaiCode brand symbol" />
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
                            <Usps iconSrc={bounties} name="Bounties" alt="An Icon: rewards and bounties feature" />
                            <Usps iconSrc={peerLearning} name="Peer Learning" alt="An Icon: collaborative learning feature" />
                            <Usps iconSrc={codeReviews} name="Code Reviews" alt="An Icon: code review process" />
                            <Usps iconSrc={virtualHostel} name="Virtual Hostel" alt="An Icon: virtual community space" />
                        </Flex>
                        <Flex gap={'24px'} mt={'24px'} alignItems={'center'}>
                            <Usps iconSrc={alumniNetwork} name="Alumni Network" alt="An Icon: graduate connection network" />
                            <Usps iconSrc={doubtSession} name="Doubt Sessions" alt="An Icon: question and answer sessions" />
                            <Usps iconSrc={groupProjects} name="Group Projects" alt="An Icon: collaborative project work" />
                        </Flex>
                    </Flex>
                </Show>
                <Show below="md">
                    <Flex flexDirection={'column'} alignItems={'flex-start'} gap={'16px'}>
                        <Flex gap={'24px'} alignItems={'flex-start'}>
                            <Usps iconSrc={bounties} name="Bounties" alt="An Icon: rewards and bounties feature" />
                            <Usps iconSrc={peerLearning} name="Peer Learning" alt="An Icon: collaborative learning feature" />
                        </Flex>
                        <Flex gap={'24px'} alignItems={'flex-start'}>
                            <Usps iconSrc={codeReviews} name="Code Reviews" alt="An Icon: code review process" />
                            <Usps iconSrc={virtualHostel} name="Virtual Hostel" alt="An Icon: virtual community space" />
                        </Flex>
                        <Flex gap={'24px'} alignItems={'flex-start'}>
                            <Usps iconSrc={alumniNetwork} name="Alumni Network" alt="An Icon: graduate connection network" />
                            <Usps iconSrc={doubtSession} name="Doubt Sessions" alt="An Icon: question and answer sessions" />
                        </Flex>
                        <Usps iconSrc={groupProjects} name="Group Projects" alt="An Icon: collaborative project work" />
                    </Flex>
                </Show>
                <Flex gap={'16px'}>
                    <CTAButton url={'https://courses.chaicode.com/learn/view-all?show=batch&type=17'} text={'Check all Live Cohorts'}/>
                    <Button 
                        borderRadius={'24px'} 
                        border={'1px solid #FE9332'} 
                        padding={0} 
                        backgroundColor={'white.0'} 
                        _hover={{ backgroundColor: '#FF7D0C', cursor: 'pointer' }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => {
                            const thumbnailSection = document.getElementById('video-section');
                            if (thumbnailSection) {
                                thumbnailSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <Flex justifyContent={'center'} alignItems={'center'}>
                            <Image src={isHovered ? playButtonWhite : playButton} alt="An Icon: video play control button"/>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default MainContentHero