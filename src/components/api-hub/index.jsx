import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react"
import device from "../../assets/svg/device.svg"
import rocket from "../../assets/svg/rocket.svg"
import buyCohort from "../../assets/webp/buy-cohort.webp"

const APIHub = () => {
    return (
        <Flex
            py={{ base: '32px', md: '48px', lg: '96px' }}
            justify={'center'}
            align={'center'}
        >
            <Flex
                border={'1px solid #CCC'}
                borderRadius={'24px'}
                p={{ base: '24px', md: '48px' }}
                gap={'48px'}
                flexDirection={{base: 'column', lg: 'row'}}
            >
                <Flex flexDir={'column'} gap={'24px'}>
                    <Heading variant={'h2'}>Unlock Your Potential with Our API Hub</Heading>
                    <Flex gap={'16px'} flexDir={'column'}>
                        <Text variant={'p-ui'}>
                            Our API Hub is designed to streamline your learning experience in API handling across various programming languages.
                        </Text>
                        <Flex gap={'16px'} align={'center'}>
                            <Image src={device} alt="Device icon representing web and mobile development" />
                            <Text variant={'p-ui'}>With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.</Text>
                        </Flex>
                        <Flex gap={'16px'} align={'center'}>
                            <Image src={rocket} alt="Rocket icon symbolizing skill advancement" />
                            <Text variant={'p-ui'}>Join us to enhance your skills and take your coding projects to the next level!</Text>
                        </Flex>
                    </Flex>
                    <Box>
                        <Button background={'#FE9332'} borderRadius={'4px'} py={'12px'} px={'30px'}>
                            <Text color={'#ffffff'} fontWeight={'700'} lineHeight={'24px'}>
                                Check Free API Docs
                            </Text>
                        </Button>
                    </Box>
                </Flex>
                <Image
                    src={buyCohort}
                    alt="An Image: course content thumbnail"
                    loading="lazy"
                />
            </Flex>
        </Flex>
    )
}

export default APIHub