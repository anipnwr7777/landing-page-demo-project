import { Flex } from "@chakra-ui/react"

const BodyContent = () => {
    return (
        <Flex width={'100%'} justifyContent={'center'}>
            <Flex
                width={'100%'}
                flexDirection={'column'}
                height={'100vh'}
                border={'2px solid blue'}
                maxWidth={'800px'}
                mx={{ base: '24px', md: '48px', lg: '64px' }}
            >

            </Flex>
        </Flex>
    )
}

export default BodyContent