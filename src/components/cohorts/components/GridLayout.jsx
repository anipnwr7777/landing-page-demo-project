import { Grid, Box, useBreakpointValue } from "@chakra-ui/react"
import CourseCard from "./CourseCard"
import buyCohort from "../../../assets/webp/buy-cohort.webp"
import devops from "../../../assets/webp/devops.webp"
import webdevCohort from "../../../assets/webp/web-dev-cohort.webp"
import codingHeros from "../../../assets/webp/coding-heroes.webp"
import genAI from "../../../assets/webp/genai.webp"
import nodejs from "../../../assets/png/nodejs-frameworks.png"

const courseData = [
    {
        title: 'Full Stack Data Science 1.0',
        description: 'Explore everything from foundational Python skills to deploying real-world data science projects',
        discountedPrice: '6,999',
        originalPrice: '8,999',
        savePercent: '22%',
        startDate: 'April 12, 2025',
        duration: '6 months',
        icon: nodejs,
        tags: ['Python', 'TensorFlow', 'Pandas'],
        buyNowLink: 'https://anirudhpanwar.com'
    },
    // Duplicating the same template 5 more times with slight variations
    {
        title: 'GenAI with Python | Concept to Deployment Projects 1.0',
        description: 'Explore the development aspects of AI applications in our GenAI with Python course',
        discountedPrice: '4,999',
        originalPrice: '7,999',
        savePercent: '38%',
        startDate: 'April 7, 2025',
        duration: '1-2 months',
        icon: nodejs,
        tags: ['Python', 'LLMs', 'Transformers'],
        buyNowLink: 'https://anirudhpanwar.com'
    },
    {
        title: 'DevOps for Developers 1.0',
        description: 'Your essential introduction to DevOps tailored for developers. Dive into DevOps for Developers 1.0 and elevate your skills!',
        discountedPrice: '4,999',
        originalPrice: '7,999',
        savePercent: '38%',
        startDate: 'April 15, 2025',
        duration: '1-2 months',
        icon: nodejs,
        tags: ['Docker', 'Kubernetes', 'CI/CD'],
        buyNowLink: 'https://anirudhpanwar.com'
    },
    {
        title: 'Web Dev Cohort 1.0',
        description: 'Join our Web Dev Cohort 1.0 for an ultimate guide to building software on the web!',
        discountedPrice: '6,999',
        originalPrice: '8,999',
        savePercent: '21%',
        startDate: 'April 12, 2025',
        duration: '6 months',
        icon: nodejs,
        tags: ['JavaScript', 'React', 'Node.js'],
        buyNowLink: 'https://anirudhpanwar.com'
    },
    {
        title: 'Coding Hero 2025',
        description: 'Join our Coding Hero 2025 program, designed to empower students with essential skills for the future.',
        discountedPrice: '299',
        originalPrice: '599',
        savePercent: '50%',
        startDate: 'NA',
        duration: 'NA',
        icon: nodejs,
        tags: ['HTML', 'CSS', 'JavaScript'],
        buyNowLink: 'https://anirudhpanwar.com'
    },
    {
        title: 'Coding Hero 2025',
        description: 'Join our Coding Hero 2025 program, designed to empower students with essential skills for the future.',
        discountedPrice: '299',
        originalPrice: '599',
        savePercent: '50%',
        startDate: 'NA',
        duration: 'NA',
        icon: nodejs,
        tags: ['HTML', 'CSS', 'JavaScript'],
        buyNowLink: 'https://anirudhpanwar.com'
    }
]

const GridLayout = () => {
    const numberOfCards = useBreakpointValue({ sm: 3, base: 3, md: 6, lg: 6 })

    return (
        <Grid
            templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)"
            }}
            gap="24px"
            width="100%"
            justifyContent={{
                base: "flex-start",
                md: "center"
            }}
        >
            {courseData.slice(0, numberOfCards).map((course, index) => (
                <Box
                    key={index}
                    height="100%"
                    width="100%"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white.0"
                >
                    <CourseCard {...course} />
                </Box>
            ))}
        </Grid>
    )
}

export default GridLayout 