import { Flex, Avatar, Text, Box } from "@chakra-ui/react"

const TweetCard = ({height, width, content}) => {
    return (
        <Flex
            borderRadius={'24px'}
            height={height}
            width={width}
            padding={'24px'}
            flexDirection={'column'}
            gap={'24px'}
            border={'1px solid #CCC'}
            background={'white.0'}
        >
            <Flex alignItems={'center'} gap={'12px'}>
                <Avatar size={'md'} name={'John Doe'} />
                <Flex flexDirection={'column'}>
                    <Text fontWeight={'bold'}>John Doe</Text>
                    <Text color={'gray.500'}>@johndoe</Text>
                </Flex>
            </Flex>

            <Text variant={'p-ui'}>
                {content}
            </Text>

            <Box 
                borderRadius={'20px'} 
                flex={1} 
                bg={'gray.100'}
            />
        </Flex>
    )
}

export default TweetCard