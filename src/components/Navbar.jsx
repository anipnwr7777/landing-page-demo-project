import { Box, Button, Flex, Image, Show, Text } from "@chakra-ui/react"
import chaiCodeNavbarLogo from "../assets/chaicode-nav-logo.svg"
import cohortNavIcon from "../assets/cohorts-nav-icon.svg"
import docsNavIcon from "../assets/docs-nav-icon.svg"
import reviewsNavIcon from "../assets/reviews-nav-icon.svg"
import udemyNavIcon from "../assets/udemy-nav-icons.svg"

const NavItem = ({iconSrc, name}) => {
    return (
        <Flex gap={'12px'}>
            <Image src={iconSrc}/>
            <Text size={'12px'} color={'black'}>{name}</Text>
        </Flex>
    )
}

const Navbar = () => {
    return (
        <Flex
            width="100%"
            justify="center"
            borderBottom={'2px solid black'}
        >
            <Flex
                width="100%"
                maxWidth={'1312px'}
                height={'96px'}
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
                <Button padding={'12px 30px'} backgroundColor={'primary'} color={'white.0'}>
                    Log In
                </Button>
            </Flex>
        </Flex>
    )
}

export default Navbar