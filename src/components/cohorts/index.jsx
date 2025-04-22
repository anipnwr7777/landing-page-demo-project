import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import codingIcon from "../../assets/lottie/coding.lottie"
import GridLayout from "../common/GridLayout"

const Cohorts = () => {
    return (
        <Flex
            flexDirection={'column'}
            align={'center'}
            py={'64px'}
        >
            <Flex gap={'16px'} alignItems={'center'}>
                <Box height={'32px'} width={'32px'}>
                    <DotLottieReact
                        src={codingIcon}
                        loop
                        autoplay
                    />
                </Box>
                <Heading variant={'h2'} align={'center'}>COHORTS</Heading>
            </Flex>
            <Text variant={'lead'} mt={'8px'}>
                Live Training Classes
            </Text>
            <Box mt={'32px'} width={'100%'}>
                <GridLayout />
            </Box>
        </Flex>
    )
}

export default Cohorts