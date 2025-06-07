import { Flex, Avatar, Text, Box, Image, Link } from "@chakra-ui/react"

const TweetCard = ({height, width, content, icon, name, handle, tweetImage, tweetUrl}) => {
    return (
        <Link 
            href={tweetUrl} 
            isExternal 
            _hover={{ textDecoration: 'none' }}
            width={width}
            height={height}
        >
            <Box
                borderRadius={'24px'}
                height={'100%'}
                width={'100%'}
                padding={'24px'}
                flexDirection={'column'}
                gap={'24px'}
                border={'1px solid #CCC'}
                background={'white.0'}
                minWidth={{ base: '300px', sm: '378px' }}
                display={'flex'}
                _hover={{
                    cursor: 'pointer'
                }}
            >
                <Flex alignItems={'center'} gap={'12px'}>
                    {/* <Avatar size={'md'} name={'John Doe'} /> */}
                    <Image src={icon} height={'48px'} width={'48px'} borderRadius={'24px'}/>
                    <Flex flexDirection={'column'}>
                        <Text fontWeight={'bold'}>{name}</Text>
                        <Text color={'gray.500'}>{handle}</Text>
                    </Flex>
                </Flex>

                <Text variant={'p-ui'}>
                    {content}
                </Text>

                <Box 
                    borderRadius={'20px'} 
                    flex={1} 
                    overflow={'hidden'}
                    position={'relative'}
                    width={'100%'}
                >
                    {/* <Image 
                        src={tweetImage} 
                        borderRadius={'20px'} 
                        height={'100%'} 
                        width={'100%'} 
                        objectFit={'cover'}
                        objectPosition={'center'}
                    /> */}
                </Box>
            </Box>
        </Link>
    )
}

export default TweetCard