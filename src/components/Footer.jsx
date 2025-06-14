import { Flex, Image, Text, Link, Show } from "@chakra-ui/react"
import chaiLogo from "../assets/svg/chaicode-nav-logo-white.svg"
import discordIcon from "../assets/svg/discord-greyed.svg"
import twitterIcon from "../assets/svg/twitter-greyed.svg"
import instagramIcon from "../assets/svg/instagram-greyed.svg"
import facebookIcon from "../assets/svg/facebook-greyed.svg"
import linkedinIcon from "../assets/svg/linkedin-greyed.svg"
import githubIcon from "../assets/svg/github-greyed.svg"
import youtubeIcon from "../assets/svg/youtube-greyed.svg"
import programming from "../assets/svg/programming.svg"
import coding from "../assets/svg/code.svg"
import win from "../assets/svg/win.svg"
import connect from "../assets/svg/connect.svg"
import master from "../assets/svg/master.svg"
import docs from "../assets/svg/docs-nav-icon.svg"
import policy from "../assets/svg/policy.svg"
import terms from "../assets/svg/terms-of-service.svg"
import price from "../assets/svg/price.svg"
import refund from "../assets/svg/refund.svg"

const Item = ({icon, text, href}) => {
    return (
        <Link href={href} isExternal>
            <Flex gap={'12px'}>
                <Image src={icon} height={'24px'} width={'24px'} alt={`An Icon: ${text} navigation item`}/>
                <Text color={'#ffffff'}>{text}</Text>
            </Flex>
        </Link>
    )
}

const Footer = () => {
    return (
        <Flex
            background={'#080F17'}
            width="100%"
            justify="center"
        >
            <Flex
                width={'100%'}
                maxWidth={'1312px'}
                py={{ base: "32px", md: '64px' }}
                px={{ base: '24px', md: '96px' }}
                justifyContent={'space-between'}
                flexDirection={{base: 'column', md: 'row'}}
            >

                <Flex flexDirection={'column'} justify={'space-between'} mb={{base: '32px', md: '0px'}}>
                    <Image src={coding} height={'32px'} width={'142px'} alt="An Icon: ChaiCode logo in white" />
                    <Show above="md">
                        <Flex flexDirection={'column'} gap={'16px'}>
                            <Flex gap={'12px'}>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={discordIcon} alt="An Icon: Discord social platform" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={twitterIcon} alt="An Icon: Twitter social platform" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={instagramIcon} alt="An Icon: Instagram social platform" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={githubIcon} alt="An Icon: GitHub code repository" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={linkedinIcon} alt="An Icon: LinkedIn professional network" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={youtubeIcon} alt="An Icon: YouTube video platform" width="24px" height="24px" />
                                </Link>
                            </Flex>
                            <Flex>
                                <Text variant={'detail'} color={'#71717A'}>© 2025 Code. All rights reserved.</Text>
                            </Flex>
                        </Flex>
                    </Show>
                </Flex>
                <Flex gap={{base: '32px', md: '48px'}} flexDirection={{base: 'column', md: 'row'}}>
                    <Flex flexDirection={'column'} gap={'16px'}>
                        <Text variant={'p-ui'} color={'#ffffff'}>Company</Text>
                        <Item 
                            icon={programming}
                            text={'Courses'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={coding}
                            text={'Cohorts'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={win}
                            text={'Coding Hero'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={connect}
                            text={'Free API'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={master}
                            text={'Masterji'}
                            href={'https://anirudhpanwar.com'}
                        />
                    </Flex>
                    <Flex flexDirection={'column'} gap={'16px'}>
                    <Text variant={'p-ui'} color={'#ffffff'}>Resources</Text>
                        <Item 
                            icon={docs}
                            text={'Docs'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={policy}
                            text={'Privacy Policy'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={terms}
                            text={'Terms of Service'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={price}
                            text={'Pricing Policy'}
                            href={'https://anirudhpanwar.com'}
                        />
                        <Item 
                            icon={refund}
                            text={'Refund Policy'}
                            href={'https://anirudhpanwar.com'}
                        />
                    </Flex>
                </Flex>
                    <Show below="md">
                <Flex flexDirection={'column'} justify={'space-between'} mt={{ base: '32px', md: '0px' }}>
                        <Flex flexDirection={'column'} gap={'16px'}>
                            <Flex gap={'12px'}>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={discordIcon} alt="An Icon: Discord social platform" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={twitterIcon} alt="An Icon: Twitter social platform" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={instagramIcon} alt="An Icon: Instagram social platform" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={githubIcon} alt="An Icon: GitHub code repository" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={linkedinIcon} alt="An Icon: LinkedIn professional network" width="24px" height="24px" />
                                </Link>
                                <Link href="https://anirudhpanwar.com" isExternal>
                                    <Image src={youtubeIcon} alt="An Icon: YouTube video platform" width="24px" height="24px" />
                                </Link>
                            </Flex>
                            <Flex>
                                <Text variant={'detail'} color={'#71717A'}>© 2025 Code. All rights reserved.</Text>
                            </Flex>
                        </Flex>
                </Flex>
                    </Show>
            </Flex>
        </Flex>
    )
}

export default Footer