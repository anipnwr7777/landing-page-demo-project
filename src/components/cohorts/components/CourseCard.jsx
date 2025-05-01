import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import buyCohort from "../../../assets/svg/buy-cohort.svg"
import calendarIcon from "../../../assets/svg/calendar.svg"
import timeIcon from "../../../assets/svg/time.svg"

const Tag = ({ children }) => (
    <Box borderRadius={'9999px'} border={'1px solid #E4E4E7'} px={'10px'} py={'2px'}>
        <Text color={'muted-foreground'} fontSize={'12px'} fontWeight={'600'} lineHeight={'16px'}>
            {children}
        </Text>
    </Box>
);

const CourseCard = () => {
    return (
        <Flex
            border={'1px solid #CCC'}
            borderRadius={'24px'}
            p={'24px'}
            direction={'column'}
            gap={'24px'}
        >
            <Image 
                src={buyCohort} 
                alt="Course thumbnail" 
                loading="lazy"
            />
            <Flex gap={'12px'} flexDirection={'column'}>
                <Flex justifyContent={'space-between'}>
                    <Flex gap={'16px'}>
                        <Flex gap={'12px'}>
                            <Image 
                                src={calendarIcon} 
                                alt="Calendar icon" 
                                loading="lazy"
                            />
                            <Text variant={'token'}>Starts April 12, 2025</Text>
                        </Flex>
                        <Flex gap={'12px'}>
                            <Image 
                                src={timeIcon} 
                                alt="Time icon" 
                                loading="lazy"
                            />
                            <Text variant={'token'}>6 months</Text>
                        </Flex>
                    </Flex>
                    <Flex gap={'12px'}>
                        <Image 
                            src={calendarIcon} 
                            alt="Live session icon" 
                            loading="lazy"
                        />
                        <Text variant={'token'}>Live</Text>
                    </Flex>
                </Flex>
                <Flex flexDirection={'column'} gap={'0.5rem'}>
                    <Heading variant={'h4'}>
                        Full Stack Data Science 1.0
                    </Heading>
                    <Text variant={'p-ui'} align={'left'}>
                        Explore everything from foundational Python skills to deploying real-world data science projects
                    </Text>
                    <Flex gap={'4px'}>
                        <Tag>Python</Tag>
                        <Tag>TensorFlow</Tag>
                        <Tag>Pandas</Tag>
                    </Flex>
                </Flex>
                <Flex flexDirection={'column'} gap={'16px'}>
                    <Flex gap={'16px'} align={'center'}>
                        <Heading variant={'h4'}>₹ 6,999</Heading>
                        <Text variant={'body'} textDecoration={'line-through'}>₹ 8,999</Text>
                        <Text variant={'p-ui-medium'}>Save 21%</Text>
                    </Flex>
                    <Flex gap={'16px'}>
                        <Button backgroundColor={'primary'}>
                            <Text
                                color={'white.0'}
                                fontSize={'16px'}
                                fontFamily={'Public Sans'}
                                fontWeight={'700'}
                                lineHeight={'24px'}
                            >Buy Now</Text>
                        </Button>
                        <Button backgroundColor={'white.0'} border={'1px solid #FF7D0C'} borderRadius={'4px'}>
                            <Text
                                color={'primary'}
                                fontSize={'16px'}
                                fontFamily={'Public Sans'}
                                fontWeight={'700'}
                                lineHeight={'24px'}
                            >More Details</Text>
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CourseCard