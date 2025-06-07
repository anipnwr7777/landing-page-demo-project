import { Box, Flex, Text, Card, CardBody, Button, useBreakpointValue, Image, Heading } from "@chakra-ui/react"
import trustedUsers from "../../assets/svg/trusted-users.svg"
import testimonialBg from "../../assets/svg/testimonial-bg.svg"
import community from "../../assets/lottie/community.lottie"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const Community = () => {
    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: '24px', md: '40px' }}
            py={{ base: '32px', md: '64px', lg: '96px' }}
            align={{ base: 'flex-start', md: "center" }}
            justify="center"
            position={'relative'}
            width={'100%'}
        >
            <Box
                width={'100%'}
                height={'100%'}
                zIndex={'-1'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                bgImage={`url(${testimonialBg})`}
                bgRepeat="repeat"
            />
            <Flex flexDirection={'column'} gap={'16px'} width={'100%'} maxWidth={'439px'}>
                <Flex gap={'8px'}>
                    <Image src={trustedUsers} alt="Trusted users icon" />
                    <Text variant={'p'}>
                        Community
                    </Text>
                </Flex>
                <Heading variant={'h2'}>
                    Join Our Community Where Creativity Thrives
                </Heading>
                <Text variant={'p'}>
                    80,000+ Active coders on Discord
                </Text>
                <Box>
                    <Button 
                        variant={'unstyled'} 
                        py={'12px'} 
                        px={'30px'} 
                        background={'#FE9332'} 
                        borderRadius={'4px'} 
                        color={'#ffffff'} 
                        height={'48px'} 
                        _hover={{ backgroundColor: '#FF7D0C', cursor: 'pointer' }}
                        onClick={() => window.open('https://anirudhpanwar.com', '_blank')}
                    >
                        <Text lineHeight={'24px'} fontWeight={'700'} fontSize={'16px'} fontFamily={'Public Sans'}>
                            Join Our Discord Community
                        </Text>
                    </Button>
                </Box>
            </Flex>
            <DotLottieReact
                src={community}
                loop
                autoplay
                style={{
                    'width': '300px',
                    'height': '300px'
                }}
            />
        </Flex>
    )
}

export default Community