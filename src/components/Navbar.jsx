import { Box, Button, Flex, Image, Show, Hide, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import chaiCodeNavbarLogo from "../assets/chaicode-nav-logo.svg"
import cohortNavIcon from "../assets/cohorts-nav-icon.svg"
import docsNavIcon from "../assets/docs-nav-icon.svg"
import reviewsNavIcon from "../assets/reviews-nav-icon.svg"
import udemyNavIcon from "../assets/udemy-nav-icons.svg"
import hamburgerIcon from "../assets/hamburger.svg"

const NavItem = ({iconSrc, name}) => {
    return (
        <Flex gap={'12px'}>
            <Image src={iconSrc}/>
            <Text size={'12px'} color={'black'}>{name}</Text>
        </Flex>
    )
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Flex
            width="100%"
            justify="center"
            borderBottom={'2px solid black'}
            position={'sticky'}
            top={'0'}
            backgroundColor={isScrolled ? 'white.0' : 'transparent'}
            transition="background-color 0.3s"
            zIndex={1000}
        >
            <Flex
                width="100%"
                maxWidth={'1312px'}
                height={{ base: '72px', md: '96px'}}
                align={'center'}
                justifyContent={'space-between'}
                px={4}
            >
                <Image 
                    src={chaiCodeNavbarLogo}
                    height={'32px'}
                    width={'142px'}
                />
                <Show above="md">
                    <Flex
                        alignItems={'center'}
                        gap={'32px'}
                    >
                        <NavItem iconSrc={cohortNavIcon} name="Cohorts" />
                        <NavItem iconSrc={docsNavIcon} name="Docs" />
                        <NavItem iconSrc={reviewsNavIcon} name="Reviews" />
                        <NavItem iconSrc={udemyNavIcon} name="Udemy" />
                    </Flex>
                </Show>
                <Flex gap={'24px'} align={'center'}>
                    <Button padding={'12px 30px'} backgroundColor={'primary'} color={'white.0'}>
                        Log In
                    </Button>
                    <Hide above="md">
                        <Image 
                            src={hamburgerIcon} 
                            width={'24px'} 
                            height={'24px'} 
                            cursor={'pointer'}
                        />
                    </Hide>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar