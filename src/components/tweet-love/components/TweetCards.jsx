import { Box, Flex, Show } from "@chakra-ui/react"
import TweetCard from "./TweetCard"
import Marquee from "react-fast-marquee"
import hiteshPassport from "../../../assets/svg/hitesh-passport.svg"
import hiteshTweet from "../../../assets/svg/hitesh-tweet.svg"
import twitterAnUser from "../../../assets/svg/twitter-an-user.svg"
import jaaniPayment from "../../../assets/svg/jaani-payment.svg"
import prasenJit from "../../../assets/svg/prasenjit-image.svg"
import tweet1 from "../../../assets/webp/tweet-1.webp"
import tweet2 from "../../../assets/webp/tweet-2.webp"
import tweet3 from "../../../assets/webp/tweet-3.webp"

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
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, for the fantastic giveaway. This has doubled my motivation."}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={tweet1}
                    tweetUrl="https://x.com/jahanweee/status/1907045909394788416"
                />
                <TweetCard
                    height={'100%'}
                    width={{ base: '300px', sm: '378px' }}
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, for the fantastic giveaway. This has doubled my motivation."}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={tweet1}
                    tweetUrl="https://x.com/jahanweee/status/1907045909394788416"
                />
                <TweetCard
                    height={'100%'}
                    width={{ base: '300px', sm: '378px' }}
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, for the fantastic giveaway. This has doubled my motivation."}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={tweet1}
                    tweetUrl="https://x.com/jahanweee/status/1907045909394788416"
                />
            </Show>
            <Show above="md">
                <TweetCard
                    height={'429px'}
                    width={'378px'}
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, for the fantastic giveaway. This has doubled my motivation."}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={tweet1}
                    tweetUrl="https://x.com/jahanweee/status/1907045909394788416"
                />
                <TweetCard
                    height={'100%'}
                    width={{ base: '300px', sm: '378px' }}
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, for the fantastic giveaway. This has doubled my motivation."}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={tweet1}
                    tweetUrl="https://x.com/jahanweee/status/1907045909394788416"
                />
                <TweetCard
                    height={'100%'}
                    width={{ base: '300px', sm: '378px' }}
                    content={"Just won ₹10K in a giveaway! Feeling incredibly lucky and grateful. Thank you, for the fantastic giveaway. This has doubled my motivation."}
                    icon={twitterAnUser}
                    name={'Jaani'}
                    handle={'@jahanweee'}
                    tweetImage={tweet1}
                    tweetUrl="https://x.com/jahanweee/status/1907045909394788416"
                />
            </Show>
        </Flex>
    )
}

export default TweetCards