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

const Item = ({icon, text}) => {
    return (
        <Flex gap={'12px'}>
            <Image src={icon} height={'24px'} width={'24px'}/>
            <Text color={'#ffffff'}>{text}</Text>
        </Flex>
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
                    <Image src={chaiLogo} height={'32px'} width={'142px'} />
                    <Show above="md">
                        <Flex flexDirection={'column'} gap={'16px'}>
                            <Flex gap={'12px'}>
                                <Link href="https://discord.gg/chaicode" isExternal>
                                    <Image src={discordIcon} alt="Discord" width="24px" height="24px" />
                                </Link>
                                <Link href="https://twitter.com/chaicode" isExternal>
                                    <Image src={twitterIcon} alt="Twitter" width="24px" height="24px" />
                                </Link>
                                <Link href="https://instagram.com/chaicode" isExternal>
                                    <Image src={instagramIcon} alt="Instagram" width="24px" height="24px" />
                                </Link>
                                <Link href="https://facebook.com/chaicode" isExternal>
                                    <Image src={facebookIcon} alt="Facebook" width="24px" height="24px" />
                                </Link>
                                <Link href="https://linkedin.com/company/chaicode" isExternal>
                                    <Image src={linkedinIcon} alt="LinkedIn" width="24px" height="24px" />
                                </Link>
                                <Link href="https://github.com/chaicode" isExternal>
                                    <Image src={githubIcon} alt="GitHub" width="24px" height="24px" />
                                </Link>
                                <Link href="https://youtube.com/@chaicode" isExternal>
                                    <Image src={youtubeIcon} alt="YouTube" width="24px" height="24px" />
                                </Link>
                            </Flex>
                            <Flex>
                                <Text variant={'detail'} color={'#71717A'}>© 2025 ChaiCode. All rights reserved.</Text>
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
                        />
                        <Item 
                            icon={coding}
                            text={'Cohorts'}
                        />
                        <Item 
                            icon={win}
                            text={'Coding Hero'}
                        />
                        <Item 
                            icon={connect}
                            text={'Free API'}
                        />
                        <Item 
                            icon={master}
                            text={'Masterji'}
                        />
                    </Flex>
                    <Flex flexDirection={'column'} gap={'16px'}>
                    <Text variant={'p-ui'} color={'#ffffff'}>Resources</Text>
                        <Item 
                            icon={docs}
                            text={'Docs'}
                        />
                        <Item 
                            icon={policy}
                            text={'Privacy Policy'}
                        />
                        <Item 
                            icon={terms}
                            text={'Terms of Service'}
                        />
                        <Item 
                            icon={price}
                            text={'Pricing Policy'}
                        />
                        <Item 
                            icon={refund}
                            text={'Refund Policy'}
                        />
                    </Flex>
                </Flex>
                    <Show below="md">
                <Flex flexDirection={'column'} justify={'space-between'} mt={{ base: '32px', md: '0px' }}>
                        <Flex flexDirection={'column'} gap={'16px'}>
                            <Flex gap={'12px'}>
                                <Link href="https://discord.gg/chaicode" isExternal>
                                    <Image src={discordIcon} alt="Discord" width="24px" height="24px" />
                                </Link>
                                <Link href="https://twitter.com/chaicode" isExternal>
                                    <Image src={twitterIcon} alt="Twitter" width="24px" height="24px" />
                                </Link>
                                <Link href="https://instagram.com/chaicode" isExternal>
                                    <Image src={instagramIcon} alt="Instagram" width="24px" height="24px" />
                                </Link>
                                <Link href="https://facebook.com/chaicode" isExternal>
                                    <Image src={facebookIcon} alt="Facebook" width="24px" height="24px" />
                                </Link>
                                <Link href="https://linkedin.com/company/chaicode" isExternal>
                                    <Image src={linkedinIcon} alt="LinkedIn" width="24px" height="24px" />
                                </Link>
                                <Link href="https://github.com/chaicode" isExternal>
                                    <Image src={githubIcon} alt="GitHub" width="24px" height="24px" />
                                </Link>
                                <Link href="https://youtube.com/@chaicode" isExternal>
                                    <Image src={youtubeIcon} alt="YouTube" width="24px" height="24px" />
                                </Link>
                            </Flex>
                            <Flex>
                                <Text variant={'detail'} color={'#71717A'}>© 2025 ChaiCode. All rights reserved.</Text>
                            </Flex>
                        </Flex>
                </Flex>
                    </Show>
            </Flex>
        </Flex>
    )
}

export default Footer