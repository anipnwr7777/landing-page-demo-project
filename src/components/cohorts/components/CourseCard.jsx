import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import buyCohort from "../../../assets/webp/buy-cohort.webp"
import calendarIcon from "../../../assets/svg/calendar.svg"
import timeIcon from "../../../assets/svg/time.svg"

const Tag = ({ children }) => (
    <Box borderRadius={'9999px'} border={'1px solid #E4E4E7'} px={'10px'} py={'2px'}>
        <Text color={'muted-foreground'} fontSize={'12px'} fontWeight={'600'} lineHeight={'16px'}>
            {children}
        </Text>
    </Box>
);

const CourseCard = ({
    title = 'Full Stack Data Science 1.0',
    description = 'Explore everything from foundational Python skills to deploying real-world data science projects',
    discountedPrice = '6,999',
    originalPrice = '8,999',
    savePercent = '21%',
    startDate = 'April 12, 2025',
    duration = '6 months',
    icon = buyCohort,
    tags = ['Python', 'TensorFlow', 'Pandas'],
    buyNowLink = 'https://courses.chaicode.com/learn/batch/about?bundleId=227817'
}) => {
    return (
        <Flex
            border={'1px solid #CCC'}
            borderRadius={'24px'}
            p={'24px'}
            direction={'column'}
            gap={'24px'}
            height={'100%'}
            justify={'space-between'}
        >
            <Flex flexDirection={'column'} gap={'24px'}>    
                <Image
                    src={icon}
                    alt="An Image: course content thumbnail"
                    loading="lazy"
                />
                <Flex gap={'12px'} flexDirection={'column'}>
                    <Flex justifyContent={'space-between'}>
                        {duration !== 'NA' && <Flex gap={'16px'}>
                            <Flex gap={'12px'}>
                                <Image
                                    src={calendarIcon}
                                    alt="An Icon: calendar showing course schedule"
                                    loading="lazy"
                                />
                                <Text variant={'token'}>{`Starts ${startDate}`}</Text>
                            </Flex>
                            <Flex gap={'12px'}>
                                <Image
                                    src={timeIcon}
                                    alt="An Icon: clock showing course duration"
                                    loading="lazy"
                                />
                                <Text variant={'token'}>{duration}</Text>
                            </Flex>
                        </Flex>}
                        <Flex gap={'12px'}>
                            <Image
                                src={calendarIcon}
                                alt="An Icon: live session schedule indicator"
                                loading="lazy"
                            />
                            <Text variant={'token'}>{duration !== 'NA' ? 'Live' : 'Always Running'}</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'} gap={'0.5rem'}>
                        <Heading variant={'h4'}>
                            {title}
                        </Heading>
                        <Text variant={'p-ui'} align={'left'}>
                            {description}
                        </Text>
                        <Flex gap={'4px'}>
                            {
                                tags.map((tag) =>
                                    <Tag
                                        key={tag}
                                    >
                                        {tag}
                                    </Tag>
                                )
                            }
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection={'column'} gap={'16px'}>
                <Flex gap={'16px'} align={'center'}>
                    <Heading variant={'h4'}>{`₹ ${discountedPrice}`}</Heading>
                    <Text variant={'body'} textDecoration={'line-through'}>{`₹ ${originalPrice}`}</Text>
                    <Text variant={'p-ui-medium'}>{`Save ${savePercent}`}</Text>
                </Flex>
                <Flex gap={'16px'} width={'100%'}>
                    <Button
                        backgroundColor={'primary'}
                        _hover={{ backgroundColor: '#FF7D0C', cursor: 'pointer' }}
                        width={'100%'}
                        onClick={() => window.open(buyNowLink, '_blank')}
                    >
                        <Text
                            color={'white.0'}
                            fontSize={'16px'}
                            fontFamily={'Public Sans'}
                            fontWeight={'700'}
                            lineHeight={'24px'}
                        >Buy Now</Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CourseCard