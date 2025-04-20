import { Box, Flex, Image, Show, Text } from "@chakra-ui/react"
import Marquee from "react-fast-marquee";
import intuit from "../../assets/svg/intuit.svg"
import meta from '../../assets/svg/meta.svg';
import zoom from '../../assets/svg/zoom.svg';
import amazon from '../../assets/svg/amazon.svg';
import google from '../../assets/svg/google.svg';
import hubspot from '../../assets/svg/hubspot.svg';
import netflix from '../../assets/svg/netflix.svg';
import spotify from '../../assets/svg/spotify.svg';

const Logo = ({ src }) => {
    return (
        <Flex width={'160px'} height={'48px'} alignItems={'center'} justifyContent={'center'} mx={'20px'}>
            <Image src={src} maxHeight={'32px'} objectFit={'contain'} />
        </Flex>
    )
}

const OrgScroll = () => {
    return (
        <Flex
            flexDirection={'column'}
            mt={'96px'}
            width={'100%'}
            align={'center'}
            gap={'32px'}
            py={{base: '32px', md: '64px'}}
        >
            <Show above="md">
                <Text align={'center'} variant={'lead'}>
                    Our students are not only working in big tech companies
                    but are now founders of funded startups and product creators
                </Text>
            </Show>
            <Show below="md">
                <Text align={'left'} variant={'lead'}>
                    Our students are not only working in big tech companies
                    but are now founders of funded startups and product creators
                </Text>
            </Show>
            <Box width={{ base: '70vw', md: '70vw' }} overflow={'hidden'}>
                <Marquee
                    speed={40}
                    gradient={true}
                    gradientColor={'white'}
                    gradientWidth={50}
                    pauseOnHover={true}
                >
                    <Logo src={meta} />
                    <Logo src={zoom} />
                    <Logo src={amazon} />
                    <Logo src={google} />
                    <Logo src={hubspot} />
                    <Logo src={netflix} />
                    <Logo src={spotify} />
                    <Logo src={intuit} />
                </Marquee>
            </Box>
        </Flex>
    )
}

export default OrgScroll