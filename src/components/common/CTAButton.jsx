import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import rippleIcon from "../../assets/lottie/ripple.lottie"
import rightArrow from "../../assets/svg/right-arrow.svg"

const CTAButton = ({url, text}) => {
    return (
        <Button
            backgroundColor={'primary'}
            color={'white.0'}
            onClick={() => window.location.href = url}
            overflow={'hidden'}
            aria-label={text}
            role="link"
            _hover={{ backgroundColor: '#FF7D0C' }}
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
                    {text}
                </Text>
                <Image 
                    src={rightArrow} 
                    alt="Right arrow" 
                    aria-hidden="true"
                />
            </Flex>
        </Button>
    )
}

export default CTAButton