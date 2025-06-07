import { Box, Button, Flex, Image, Show, Hide, Text, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerHeader, IconButton } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import chaiCodeNavbarLogo from "../assets/svg/chaicode-nav-logo.svg"
import cohortNavIcon from "../assets/svg/cohorts-nav-icon.svg"
import docsNavIcon from "../assets/svg/docs-nav-icon.svg"
import reviewsNavIcon from "../assets/svg/reviews-nav-icon.svg"
import udemyNavIcon from "../assets/svg/udemy-nav-icons.svg"
import hamburgerIcon from "../assets/svg/hamburger.svg"

const NavItem = ({iconSrc, name, href, target, onClose}) => {
    const handleClick = (e) => {
        // Only handle internal links (starting with #)
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (onClose) {
                    onClose();
                }
            }
        }
    };

    return (
        <Box as="a" href={href} target={target} onClick={handleClick} _hover={{ textDecoration: 'none' }}>
            <Flex gap={'12px'}>
                <Image src={iconSrc} alt={`An Icon: ${name} navigation item`} height={'24px'} width={'24px'}/>
                <Text size={'12px'} color={'black'}>{name}</Text>
            </Flex>
        </Box>
    )
}

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

    const handleDrawerOpen = () => setIsDrawerOpen(true);
    const handleDrawerClose = () => setIsDrawerOpen(false);

    return (
        <Flex
            width="100%"
            justify="center"
            position={'sticky'}
            top={'0'}
            backgroundColor={isScrolled ? 'rgba(255, 255, 255, 0.7)' : 'transparent'}
            backdropFilter={isScrolled ? 'blur(10px)' : 'none'}
            transition="all 0.3s ease"
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
                    alt="ChaiCode Logo"
                />
                <Show above="md">
                    <Flex
                        alignItems={'center'}
                        gap={'32px'}
                    >
                        <NavItem iconSrc={cohortNavIcon} name="Cohorts" href="#cohorts" />
                        <NavItem iconSrc={docsNavIcon} name="Docs" href="https://anirudhpanwar.com" target="_blank" />
                        <NavItem iconSrc={reviewsNavIcon} name="Reviews" href="#testimonial" />
                        <NavItem iconSrc={udemyNavIcon} name="Udemy" href="#udemy" />
                    </Flex>
                </Show>
                <Flex gap={'24px'} align={'center'}>
                    <Button 
                        padding={'12px 30px'} 
                        backgroundColor={'primary'} 
                        color={'white.0'}
                        onClick={() => window.location.href = 'https://anirudhpanwar.com'}
                        _hover={{ backgroundColor: '#FF7D0C', cursor: 'pointer' }}
                    >
                        Log In
                    </Button>
                    <Hide above="md">
                        <Image 
                            src={hamburgerIcon} 
                            width={'24px'} 
                            height={'24px'} 
                            cursor={'pointer'}
                            onClick={handleDrawerOpen}
                            alt="An Icon: menu toggle button"
                        />
                    </Hide>
                </Flex>
            </Flex>

            <Drawer
                isOpen={isDrawerOpen}
                placement="right"
                onClose={handleDrawerClose}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader
                        p="16px"
                        borderBottomWidth="1px"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        bg={'white'}
                    >
                        <IconButton
                            variant="ghost"
                            onClick={handleDrawerClose}
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            }
                            aria-label="Close menu"
                            _hover={{ backgroundColor: '#FF7D0C', color: 'white', cursor: 'pointer' }}
                        />
                    </DrawerHeader>
                    <DrawerBody p={0}>
                        <Flex
                            height="100%"
                            width="100%"
                            flexDirection="column"
                            bg="white"
                        >
                            <Flex
                                flexDirection="column"
                                gap="32px"
                                p="24px"
                            >
                                <NavItem iconSrc={cohortNavIcon} name="Cohorts" href="#cohorts" onClose={handleDrawerClose} />
                                <NavItem iconSrc={docsNavIcon} name="Docs" href="https://anirudhpanwar.com" target="_blank" onClose={handleDrawerClose} />
                                <NavItem iconSrc={reviewsNavIcon} name="Reviews" href="#testimonial" onClose={handleDrawerClose} />
                                <NavItem iconSrc={udemyNavIcon} name="Udemy" href="#udemy" onClose={handleDrawerClose} />
                            </Flex>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    )
}

export default Navbar