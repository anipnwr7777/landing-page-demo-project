import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import loveIcon from "../../assets/lottie/love.lottie"

const TweetLove = () => {
    return (
        <Flex
            flexDirection={'column'}
            align={'center'}
            py={'64px'}
        >
            <Flex gap={'16px'} alignItems={'center'}>
                <Box height={'32px'} width={'32px'}>
                    <DotLottieReact
                        src={loveIcon}
                        loop
                        autoplay
                    />
                </Box>
                <Heading variant={'h2'} align={'center'}>Tweet Love</Heading>
            </Flex>
            <Text variant={'lead'} mt={'8px'}>
                Love That We Are Getting From Our Community
            </Text>
        </Flex>
    )
}

export default TweetLove