import { Box, Flex, Heading, Image, Show, Text } from "@chakra-ui/react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import chaiIcon from "../../assets/svg/chai-icon.svg"
import AboutHitesh from "./components/AboutHitesh"
import ChaiCodePros from "./components/ChaiCodePros"

const ButWhyChaiCode = () => {
    return (
        <Flex
            flexDirection={'column'}
            align={{ base: 'flex-start', md: 'center' }}
            py={{base: '32px', md: '64px'}}
            gap={'48px'}
            width={'100%'}
        >
            <Flex flexDir={'column'} gap={'16px'}>
                <Flex gap={'16px'} alignItems={{ base: 'flex-start', md: 'center' }} flexGrow={0}>
                    <Show above="md">
                        <Heading variant={'h2'} align={'center'} sx={{ whiteSpace: 'nowrap' }}>But Why ChaiCode?</Heading>
                    </Show>
                    <Show below="md">
                        <Heading variant={'h2'} align={'left'} sx={{ whiteSpace: 'nowrap' }}>But Why ChaiCode?</Heading>
                    </Show>
                    <Image src={chaiIcon} height={'40px'} width={'45px'} alt="An Icon: chai cup symbolizing the brand"></Image>
                </Flex>
                <Text variant={'p'}>
                    ChaiCode exists because we love tech and teaching
                </Text>
            </Flex>
            <Flex 
                gap={{base: '32px', md: '64px'}} 
                flexDirection={{base: 'column', lg: 'row'}}
            >
                <AboutHitesh />
                <ChaiCodePros />
            </Flex>
        </Flex>
    )
}

export default ButWhyChaiCode