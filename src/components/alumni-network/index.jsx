import { Box, Flex, Heading, Image, Show, Text } from "@chakra-ui/react"
import winner from "../../assets/svg/winner.svg"
import bag from "../../assets/svg/bag.svg"
import alumniConnect from "../../assets/svg/alumni-connect.svg"
import alumniLottie from "../../assets/lottie/alumni-network-1.lottie"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const points = [
    {
        icon: alumniConnect,
        text: 'Connect with fellow alumni and expand your professional network.'
    },
    {
        icon: winner,
        text: 'Participate in thrilling hackathons, collaborate on exciting projects, start your own agencies.'
    },
    {
        icon: bag,
        text: 'Stay updated with regular job postings from our dedicated HR team and apply directly to job opportunities when you\'re ready to take the next step.'
    }
]

const Point = ({ icon, text }) => {
    return (
        <Flex gap={'16px'} align={'center'}>
            <Image src={icon} width={'32px'} height={'32px'} alt={`An Icon: ${text} alumni feature`}/>
            <Text variant={'p-ui'}>{text}</Text>
        </Flex>
    )
}

const AlumniNetwork = () => {
    return (
        <Flex gap={{base: '32px', md: '48px'}} flexDirection={{ base: 'column', md: 'row' }} py={{base: '32px', md: '64px', lg: '96px'}} align={{base: 'flex-start', md: 'center'}} justify={'center'}>
            <Show above="md">
            <Flex height={'320px'} maxWidth={'600px'} justify={'center'}>
                <Box height={'320px'} width={'320px'}>
                    <DotLottieReact
                        src={alumniLottie}
                        loop
                        autoplay
                    />
                </Box>
            </Flex>
            </Show>
            <Flex gap={'24px'} flexDirection={'column'} maxWidth={'640px'}>
                <Flex flexDirection={'column'} gap={'16px'}>
                    <Heading variant={'h2'}>
                        Alumni Network and job listings
                    </Heading>
                    <Text variant={'p'}>
                        The alumni Network that you always wished for in your
                        college.
                    </Text>
                </Flex>
                <Flex flexDirection={'column'} gap={'16px'}>
                    {
                        points.map((point) => {
                            return (
                                <Point
                                    key={point.text}
                                    icon={point.icon}
                                    text={point.text}
                                />
                            )
                        })
                    }
                </Flex>
            </Flex>
            <Show below="md">
            <Flex height={'320px'} maxWidth={'600px'} justify={'center'}>
                <Box height={'320px'} width={'320px'}>
                    <DotLottieReact
                        src={alumniLottie}
                        loop
                        autoplay
                    />
                </Box>
            </Flex>
            </Show>
        </Flex>
    )
}

export default AlumniNetwork