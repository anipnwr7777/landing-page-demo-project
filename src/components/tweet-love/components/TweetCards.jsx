import { Box, Flex, Show } from "@chakra-ui/react"
import TweetCard from "./TweetCard"
import Marquee from "react-fast-marquee"

const TweetCards = () => {
    return (
        <Flex
            gap={'32px'}
            align={'center'}
            mt={'32px'}
            width={'80vw'}
            maxWidth={'900%'}
            justifyContent={'center'}
            overflow={'scroll'}
        >
            <Show below="md">
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Companies spend $30,000+ and several weeks to build beautiful landing pages like@linear,@wopehq and lectnotes + I built@reactjs+@tailwindcss components for you to do the same in hours, starting at just $29 Pre-order link + demo below#buildinpublic@buildspace"}
                />
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Companies spend $30,000+ and several weeks to build beautiful landing pages like@linear,@wopehq and lectnotes + I built@reactjs+@tailwindcss components for you to do the same in hours, starting at just $29 Pre-order link + demo below#buildinpublic@buildspace"}
                />
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Companies spend $30,000+ and several weeks to build beautiful landing pages like@linear,@wopehq and lectnotes + I built@reactjs+@tailwindcss components for you to do the same in hours, starting at just $29 Pre-order link + demo below#buildinpublic@buildspace"}
                />
            </Show>
            <Show above="md">
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Companies spend $30,000+ and several weeks to build beautiful landing pages like@linear,@wopehq and lectnotes + I built@reactjs+@tailwindcss components for you to do the same in hours, starting at just $29 Pre-order link + demo below#buildinpublic@buildspace"}
                />
                <TweetCard
                    height={'517px'}
                    width={'456px'}
                    content={"Companies spend $30,000+ and several weeks to build beautiful landing pages like@linear,@wopehq and lectnotes + I built@reactjs+@tailwindcss components for you to do the same in hours, starting at just $29 Pre-order link + demo below#buildinpublic@buildspace"}
                />
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Companies spend $30,000+ and several weeks to build beautiful landing pages like@linear,@wopehq and lectnotes + I built@reactjs+@tailwindcss components for you to do the same in hours, starting at just $29 Pre-order link + demo below#buildinpublic@buildspace"}
                />
            </Show>
        </Flex>
    )
}

export default TweetCards