import { Flex } from "@chakra-ui/react"
import TweetCard from "./TweetCard"

const TweetCards = () => {
    return (
        <Flex
            gap={'32px'}
            align={'center'}
            mt={'32px'}
            width={'80vw'}
            overflow={'scroll'}
        >
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
        </Flex>
    )
}

export default TweetCards