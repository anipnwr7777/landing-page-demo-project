import { Box, Flex, Show } from "@chakra-ui/react"
import TweetCard from "./TweetCard"
import Marquee from "react-fast-marquee"
import hiteshPassport from "../../../assets/svg/hitesh-passport.svg"
import hiteshTweet from "../../../assets/svg/hitesh-tweet.svg"
import twitterAnUser from "../../../assets/svg/twitter-an-user.svg"
import jaaniPayment from "../../../assets/svg/jaani-payment.svg"
import prasenJit from "../../../assets/svg/prasenjit-image.svg"

const TweetCards = () => {
    return (
        <Flex
            gap={'32px'}
            align={'center'}
            mt={'32px'}
            width={'100%'}
            maxWidth={'100%'}
            justifyContent={'center'}
            overflow={'auto'}
            px={{ base: '16px', md: '32px' }}
            sx={{
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                '-ms-overflow-style': 'none',
                'scrollbarWidth': 'none'
            }}
        >
            <Show below="md">
                <TweetCard
                    height={'100%'}
                    width={{ base: '300px', sm: '378px' }}
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, @Hiteshdotcom and @piyushgarg_dev for the fantastic giveaway. This has doubled my motivation. Also, thanks to @nirudhuuu @mukulpadwal @yntpdotme"}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={jaaniPayment}
                />
                <TweetCard
                    height={'100%'}
                    width={{ base: '300px', sm: '378px' }}
                    content={"Our cohorts are experience to have. When you learn from real world experienced folks, it's totally a game changer. These small talks can happen only in live classes. Check out #chaiCode for our new cohorts"}
                    icon={hiteshPassport}
                    name={'Hitesh Choudhary'}
                    handle={'@Hiteshdotcom'}
                    tweetImage={hiteshTweet}
                />
                <TweetCard
                    height={'100%'}
                    width={{ base: '300px', sm: '378px' }}
                    content={"Thank you will be a very small word for you all. I can't express my love and respect for you all in words. I had never heard or joined any bootcamp who gave away the fees of a student just to motivate other students and this can only be done in our WebDev Cohort-1 by Hitesh Sir"}
                    icon={twitterAnUser}
                    name={'prasenjit basu'}
                    handle={'@prasenjitbasu44'}
                    tweetImage={prasenJit}
                />
            </Show>
            <Show above="md">
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, @Hiteshdotcom and @piyushgarg_dev for the fantastic giveaway. This has doubled my motivation. Also, thanks to @nirudhuuu @mukulpadwal @yntpdotme"}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={jaaniPayment}                    
                />
                <TweetCard
                    height={'517px'}
                    width={'456px'}
                    content={"Our cohorts are experience to have. When you learn from real world experienced folks, it's totally a game changer. These small talks can happen only in live classes. Check out #chaiCode for our new cohorts"}
                    icon={hiteshPassport}
                    name={'Hitesh Choudhary'}
                    handle={'@Hiteshdotcom'}
                    tweetImage={hiteshTweet}
                />
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Thank you will be a very small word for you all. I can't express my love and respect for you all in words. I had never heard or joined any bootcamp who gave away the fees of a student just to motivate other students and this can only be done in our WebDev Cohort-1 by Hitesh Sir"}
                    icon={twitterAnUser}
                    name={'prasenjit basu'}
                    handle={'@prasenjitbasu44'}
                    tweetImage={prasenJit}
                />
            </Show>
        </Flex>
    )
}

export default TweetCards