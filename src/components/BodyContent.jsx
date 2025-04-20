import { Flex } from "@chakra-ui/react"
import Hero from "./hero"

const BodyContent = () => {
    return (
        <Flex width={'100%'} justifyContent={'center'}>
            <Flex
                width={'100%'}
                flexDirection={'column'}
                height={'100vh'}
                maxWidth={'1312px'}
                mx={{ base: '24px', md: '48px', lg: '64px' }}
            >
                <Hero />
            </Flex>
        </Flex>
    )
}

export default BodyContent