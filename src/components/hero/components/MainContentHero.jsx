import { Flex, Heading, Image, Show, Text, Box } from "@chakra-ui/react"
import trustedUsers from "../../../assets/trusted-users.svg"
import bounties from "../../../assets/bounties.svg"
import peerLearning from "../../../assets/peer-learning.svg"
import codeReviews from "../../../assets/reviews-nav-icon.svg"
import alumniNetwork from "../../../assets/alumni-network.svg"
import doubtSession from "../../../assets/doubt-session.svg"
import groupProjects from "../../../assets/group-projects.svg"
import virtualHostel from "../../../assets/virtual-hostel.svg"

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
                <Heading align={'center'} mt={'16px'}>
                    EMPOWER YOUR CODING JOURNEY
                </Heading>
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
                <Flex>

                </Flex>
            </Flex>
        </Flex>
    )
}

export default MainContentHero