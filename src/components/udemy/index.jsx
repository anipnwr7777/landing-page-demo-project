import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react"
import { useState, useRef } from "react"
import udemy from "../../assets/svg/udemy-bg.svg"
import leftIcon from "../../assets/svg/left-arrow.svg"
import rightIcon from "../../assets/svg/right-arrow-test.svg"
import buyCohort from "../../assets/webp/buy-cohort.webp"
import rating from "../../assets/svg/rating.svg"

const courseData = [
    {
        id: 1,
        title: "Complete JavaScript Course",
        students: "150,000+ students",
        rating: "4.8",
        description: "Master modern JavaScript from basics to advanced concepts with practical projects."
    },
    {
        id: 2,
        title: "React.js Mastery",
        students: "100,000+ students",
        rating: "4.9",
        description: "Learn React.js by building real-world applications with modern best practices."
    },
    {
        id: 3,
        title: "Python Programming",
        students: "200,000+ students",
        rating: "4.7",
        description: "Comprehensive Python course covering everything from basics to advanced topics."
    }
]

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
            direction={{ base: 'column', md: 'row' }}
            gap={'24px'}
        >
            <Image
                src={buyCohort}
                alt="An Image: course content thumbnail"
                loading="lazy"
                width={{ md: '50%' }}
            />
            <Flex gap={'12px'} flexDirection={'column'} width={{ md: '50%' }}>
                <Flex flexDirection={'column'} gap={'4px'}>
                    <Text variant={'detail'} color={'#288934'}>Top Rated</Text>
                    <Flex gap={'4px'} align={'center'}>
                        <Image src={rating} height={'24px'} width={'24px'} alt="An Icon: rating star"/>
                        <Text variant={'large'} color={'#008110'}>4.5</Text>
                    </Flex>
                </Flex>
                <Flex flexDirection={'column'} gap={'0.5rem'}>
                    <Heading variant={'h4'}>
                        Complete Web Development Course
                    </Heading>
                    <Text variant={'p-ui'} align={'left'}>
                        Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc
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
                    <Button backgroundColor={'primary'} width={'100%'} _hover={{ backgroundColor: '#FF7D0C', cursor: 'pointer' }}>
                        <Text
                            color={'white.0'}
                            fontSize={'16px'}
                            fontFamily={'Public Sans'}
                            fontWeight={'700'}
                            lineHeight={'24px'}
                        >Check Out Udemy</Text>
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

const Udemy = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollRef = useRef(null)

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
            scrollRef.current?.children[currentIndex - 1]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }
    }

    const handleNext = () => {
        if (currentIndex < courseData.length - 1) {
            setCurrentIndex(currentIndex + 1)
            scrollRef.current?.children[currentIndex + 1]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            })
        }
    }

    return (
        <Flex
            direction={"column"}
            py={{ base: '32px', md: '48px', lg: '96px' }}
            align={{ base: 'flex-start', md: "center" }}
            justify="center"
            position={'relative'}
            width={'100%'}
            id="udemy"
        >
            <Box
                width={'100%'}
                height={'100%'}
                zIndex={'-1'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                bgImage={`url(${udemy})`}
                bgRepeat="repeat"
            />
            <Flex flexDirection={'column'} gap={'24px'} align={{ base: 'flex-start', md: 'center' }} width={'100%'}>
                <Heading variant={'h2'}>We Are On Udemy Too</Heading>
                <Text variant={'p-ui'}>We are global leaders in tech education, expanding our presence outside India.</Text>

                <Flex
                    gap={'19px'}
                    flexDirection={'column'}
                    width={'100%'}
                    maxWidth={'1024px'}
                >
                    <Flex justify="flex-end">
                        <Button
                            onClick={handlePrev}
                            isDisabled={currentIndex === 0}
                            variant={'unstyled'}
                            aria-label="View previous course"
                            _hover={{ cursor: 'pointer' }}
                        >
                            <Flex border={'1px solid #A0AEC0'} borderRadius={'24px'} align={'center'} justify={'center'} height={'24px'} width={'24px'} padding={'4px'} background={'rgba(255, 255, 255, 0.64)'}>
                                <Image
                                    src={leftIcon}
                                    alt="Previous course"
                                    loading="lazy"
                                />
                            </Flex>
                        </Button>
                        <Button
                            onClick={handleNext}
                            isDisabled={currentIndex === courseData.length - 1}
                            variant={'unstyled'}
                            aria-label="View next course"
                            _hover={{ cursor: 'pointer' }}
                        >
                            <Flex border={'1px solid #A0AEC0'} borderRadius={'24px'} align={'center'} justify={'center'} height={'24px'} width={'24px'} padding={'4px'} background={'rgba(255, 255, 255, 0.64)'} zIndex={'2'}>
                                <Image
                                    src={rightIcon}
                                    alt="Next course"
                                    loading="lazy"
                                />
                            </Flex>
                        </Button>
                    </Flex>

                    <Flex
                        ref={scrollRef}
                        overflow="hidden"
                        gap={4}
                        width={'100%'}
                    >
                        {courseData.map((course, index) => (
                            <Flex
                                key={course.id}
                                flexShrink={0}
                                scrollSnapAlign="center"
                                opacity={currentIndex === index ? 1 : 0.5}
                                transform={currentIndex === index ? 'scale(1)' : 'scale(0.95)'}
                                transition="all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                                width={'100%'}
                                role="article"
                                aria-label={`Course: ${course.title}`}
                            >
                                <CourseCard data={course} />
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
                <Button 
                    border={'1px solid #FF7D0C'} 
                    bg={'#ffffff'} 
                    borderRadius={'4px'} 
                    py={'12px'} 
                    px={'30px'} 
                    mt={'16px'} 
                    _hover={{ backgroundColor: '#FF7D0C', color: 'white', cursor: 'pointer' }}
                    onClick={() => window.open('https://www.udemy.com/user/hitesh-choudharycom/?srsltid=AfmBOoqvSTWjJXbrEkp3Esy31kQf9VaJXQ5yisRcBFdwrDLSXE8hH3re', '_blank')}
                >
                    <Text color={'#FE9332'} fontWeight={'700'} _hover={{ color: 'white' }}>
                        View All Courses on Udemy
                    </Text>
                </Button>
            </Flex>
        </Flex>
    )
}

export default Udemy