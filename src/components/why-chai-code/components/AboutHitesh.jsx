import { Box, Flex, Heading, Image, Text, Link } from "@chakra-ui/react"
import linkedin from "../../../assets/svg/linkedin.svg"
import twitter from "../../../assets/svg/twitter.svg"
import map from "../../../assets/svg/map.svg"
import star from "../../../assets/svg/star.svg"
import fallingStar from "../../../assets/svg/falling-star.svg"
import yt from "../../../assets/svg/yt.svg"
import divider from "../../../assets/svg/divider.svg"
import hiteshImage from "../../../assets/webp/image_hitesh.webp"
import nodejs from "../../../assets/png/nodejs-frameworks.png"

const points = [
    {
        icon: yt,
        text: 'Full time YouTuber & 2 YT channels (950k & 470k)'
    },
    {
        icon: star,
        text: 'Ex founder of ABCD'
    },
    {
        icon: fallingStar,
        text: 'Ex CTO, @ABCD'
    },
    {
        icon: map,
        text: 'Stepped into 43 countries'
    }
]

const Point = ({ icon, text }) => {
    return (
        <Flex gap={'16px'} align={'center'}>
            <Image src={icon} width={'32px'} height={'32px'} alt={`An Icon: ${text} feature illustration`} />
            <Text variant={'p-ui'}>{text}</Text>
        </Flex>
    )
}

const AboutHitesh = () => {
    return (
        <Box>
            <Flex
                minWidth={'300px'}
                flexDirection={{base: 'column', md: 'row', lg: 'column'}}
                padding={'24px'} 
                gap={'24px'}
                border={'1px solid #FE9332'}
                background={'rgba(254, 147, 50, 0.04)'}
                borderRadius={'12px'}
            >
                <Image src={nodejs} alt="A photograph: Hitesh Choudhary, founder of ChaiCode" />
                <Flex flexDirection={'column'} gap={'24px'}>
                    <Flex
                        flexDirection={'column'}
                        gap={'16px'}
                    >
                        <Flex justify={'space-between'}>
                            <Heading variant={'h3'}>We are</Heading>
                            <Flex gap={'16px'}>
                                <Link href="https://x.com/Hiteshdotcom" isExternal>
                                    <Image src={twitter} height={'32px'} width={'32px'} alt="An Icon: Twitter social media profile" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={linkedin} height={'32px'} width={'32px'} alt="An Icon: LinkedIn professional network profile" />
                                </Link>
                            </Flex>
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
                    <Image src={divider} alt="An Icon: decorative section divider" />
                    <Flex gap={'16px'} flexDirection={'column'}>
                        <Text variant={'large'}>
                            Approach
                        </Text>
                        <Text variant={'p-ui'}>Project based courses with peer
                            learning and bouties with many
                            activities</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    )
}

export default AboutHitesh