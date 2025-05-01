import { Box, Flex, Text, Card, CardBody, Button, useBreakpointValue, Image, Heading } from "@chakra-ui/react"
import { useState, useRef } from "react"
import trustedUsers from "../../assets/svg/trusted-users.svg"
import testimonialBg from "../../assets/svg/testimonial-bg.svg"
import leftIcon from "../../assets/svg/left-arrow.svg"
import rightIcon from "../../assets/svg/right-arrow-test.svg"
import quoteIcon from "../../assets/svg/quote.svg"
import microsoftIcon from "../../assets/svg/microsoft.svg"
import roosterIcon from "../../assets/svg/rooster.svg"

const testimonialData = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Software Engineer",
        company: "Tech Corp",
        testimonial: "The mentorship and guidance I received was invaluable. It helped me land my dream job!"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager",
        company: "Innovation Labs",
        testimonial: "The practical approach to learning made all the difference. Highly recommended!"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Full Stack Developer",
        company: "StartUp Inc",
        testimonial: "The community support and real-world projects prepared me well for my career transition."
    }
]

const TestimonialCard = ({ data }) => {
    return (
        <Flex
            border={'1px solid #FE9332'} 
            borderRadius={'12px'} 
            p={'24px'}
            width={'100%'} 
            maxWidth={'650px'} 
            bg={'rgba(255, 255, 255, 0.80)'}
            flexDirection={'column'}
            gap={'24px'}
            align={'flex-start'}
        >
            <Image src={quoteIcon} alt="Quote" />
            <Text variant={'p-ui'}>{'"Thanks to Chaicode, I was able to enhance my coding skills significantly! I used to struggle with building landing pages, but now I can create stunning designs in just a few hours. The resources provided made it easy to learn and implement new technologies like React and Tailwind CSS. I highly recommend it to anyone looking to level up their coding game!"'}
            </Text>
            <Flex align={'flex-end'} justifyContent={'space-between'} width={'100%'}>
                <Flex gap={'16px'}>
                    <Image src={roosterIcon} alt="User avatar"/>
                    <Flex flexDirection={'column'}>
                        <Text variant={'p-ui'}>Rooster Babu</Text>
                        <Text variant={'detail'}>@roosterraj</Text>
                    </Flex>
                </Flex>
                <Image src={microsoftIcon} height={'50%'} maxWidth={'30%'} alt="Microsoft logo"/>
            </Flex>
        </Flex>
    )
}

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollRef = useRef(null)
    
    const isMobile = useBreakpointValue({ base: true, md: false })

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
        if (currentIndex < testimonialData.length - 1) {
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
            direction={{ base: "column", md: "row" }}
            gap={{base: '24px', md: '40px'}}
            py={{base: '32px', md: '64px', lg: '96px'}}
            align={{base: 'flex-start', md: "center"}}
            justify="center"
            position={'relative'}
            width={'100%'}
        >
            <Box
                width={'100%'}
                height={'100%'}
                zIndex={'-1'}
                position={'absolute'}
                top={'0'}
                left={'0'}
                bgImage={`url(${testimonialBg})`}
                bgRepeat="repeat"
            />
            <Flex flexDirection={'column'} gap={'16px'} width={'100%'} maxWidth={'439px'}>
                <Flex gap={'8px'}>
                    <Image src={trustedUsers} alt="Trusted users icon" />
                    <Text variant={'p'}>
                        Testimonials
                    </Text>
                </Flex>
                <Heading variant={'h2'}>
                    From Our Community
                </Heading>
                <Text variant={'p'}>
                    Explore the incredible advantages of enrolling in our courses and enhancing your skills
                </Text>
            </Flex>

            <Flex 
                gap={'19px'} 
                flexDirection={'column'} 
                width={'100%'}
                maxWidth={'602px'}
            >
                <Flex justify="flex-end">
                    <Button
                        onClick={handlePrev}
                        isDisabled={currentIndex === 0}
                        variant={'unstyled'}
                        aria-label="View previous testimonial"
                    >
                        <Flex border={'1px solid #A0AEC0'} borderRadius={'24px'} align={'center'} justify={'center'} height={'24px'} width={'24px'} padding={'4px'} background={'rgba(255, 255, 255, 0.64)'}>
                            <Image 
                                src={leftIcon} 
                                alt="Previous testimonial" 
                                loading="lazy"
                            />
                        </Flex>
                    </Button>
                    <Button
                        onClick={handleNext}
                        isDisabled={currentIndex === testimonialData.length - 1}
                        variant={'unstyled'}
                        aria-label="View next testimonial"
                    >
                        <Flex border={'1px solid #A0AEC0'} borderRadius={'24px'} align={'center'} justify={'center'} height={'24px'} width={'24px'} padding={'4px'} background={'rgba(255, 255, 255, 0.64)'} zIndex={'2'}>
                            <Image 
                                src={rightIcon} 
                                alt="Next testimonial" 
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
                    {testimonialData.map((testimonial, index) => (
                        <Flex
                            key={testimonial.id}
                            flexShrink={0}
                            scrollSnapAlign="center"
                            opacity={currentIndex === index ? 1 : 0.5}
                            transform={currentIndex === index ? 'scale(1)' : 'scale(0.95)'}
                            transition="all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                            width={'100%'}
                            role="article"
                            aria-label={`Testimonial from ${testimonial.name}`}
                        >
                            <TestimonialCard data={testimonial} />
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Testimonials