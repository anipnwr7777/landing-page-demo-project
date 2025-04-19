import { Flex } from "@chakra-ui/react"

const BodyContent = () => {
    return (
        <Flex
            flexDirection={'column'}
            height={'100vh'}
            backgroundColor={'pink'}
            width={'600px'}
            mx={{base: '24px', md: '48px', lg: '64px'}}
        >

        </Flex>
    )
}

export default BodyContent