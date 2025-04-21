import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import loveIcon from "../../assets/lottie/love.lottie"
import tweetLoveBg from "../../assets/svg/tweet-love-bg.svg"

const TweetLove = () => {
    return (
        <Flex
            flexDirection={'column'}
            align={'center'}
            py={'64px'}
            position={'relative'}
        >
            <Box
                zIndex={'-2'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                width={'100%'}
                height={'100%'}
                bgImage={`url(${tweetLoveBg})`}
                bgRepeat="repeat"
                bgSize="50px"
            />
            <Box
                zIndex={'-1'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                width={'100%'}
                height={'100%'}
                background={'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0) 100%)'}
            />
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