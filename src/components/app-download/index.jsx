import { Flex, Heading, Image, Text, Link } from "@chakra-ui/react"
import playstore from "../../assets/svg/playstore.svg"
import appstore from "../../assets/svg/appstore.svg"
import downloadApp from "../../assets/lottie/download-app.lottie"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const Download = ({storeIcon, text, store, href}) => {
    return (
        <Link href={href} isExternal _hover={{ textDecoration: 'none' }}>
            <Flex background={'#000000'} border={'1px solid #A6A6A6'} borderRadius={'6px'} padding={'6px'} align={'center'} gap={'7px'} cursor={'pointer'} _hover={{ opacity: 0.8 }}>
                <Image src={storeIcon} height={'24px'} width={'24px'}/>
                <Flex gap={'3px'} flexDirection={'column'}>
                    <Text color={'#FFFFFF'} fontSize={'10px'} fontWeight={'400'}>{text}</Text>
                    <Text color={'#FFFFFF'} fontSize={'18px'} fontWeight={'500'} lineHeight={'18px'} letterSpacing={'-0.47px'}>{store}</Text>
                </Flex>
            </Flex>
        </Link>
    )
}

const AppDownload = () => {
    return (
        <Flex gap={{base: '0px', md: '120px'}} py={{base: '32px', md: '64px', lg: '96px'}} align={{base: 'flex-start', md: 'center'}} flexDirection={{base: 'column', md: 'row'}} justifyContent={'center'}>
            <DotLottieReact
                src={downloadApp}
                loop
                autoplay
                style={{
                    'min-width': '175px',
                    'min-height': '250px',
                    'max-width': '175px',
                    'max-height': '250px'
                }}
            />
            <Flex flexDirection={'column'} gap={'24px'} maxWidth={'680px'}>
                <Flex flexDirection={'column'} gap={'16px'}>
                    <Heading variant={'h2'}>Take your coding journey anywhere with the ChaiCode mobile app.</Heading>
                    <Text variant={'p-ui'}>Access courses, join live sessions, and connect with the community - all from your pocket.</Text>
                </Flex>
                <Flex gap={'16px'} flexDirection={'row'}>
                    <Download 
                        storeIcon={playstore}
                        text={'GET IT ON'}
                        store={'Google Play'}
                        href={'https://play.google.com/store/apps/details?id=com.chaicode.courses&hl=en_IN&pli=1'}
                    />
                    <Download 
                        storeIcon={appstore}
                        text={'Download On The'}
                        store={'App Store'}
                        href={'https://apps.apple.com/in/app/chaicode/id6504993143'}
                    />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default AppDownload