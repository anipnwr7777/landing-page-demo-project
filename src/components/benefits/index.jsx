import { Flex, Text, SimpleGrid, VStack, Box, Heading, Grid, Image } from "@chakra-ui/react"
import medalIcon from "../../assets/svg/medal.svg"
import peerCodeReviews from "../../assets/svg/peer-code-reviews.svg"
import revisionClasses from "../../assets/svg/revision-classes.svg"
import leetLab from "../../assets/svg/leet-lab.svg"
import codingHostel from "../../assets/svg/coding-hostel.svg"
import bounties from "../../assets/svg/bounties-1.svg"


const BenefitCard = ({ icon, title, description }) => (
    <Flex 
        flexDirection={'column'} 
        gap={'12px'} 
        align={{base: 'flex-start', md: 'center'}} 
        padding={{base: '32px', md: '48px'}} 
        border={'1px solid #E4E4E4'}
        marginRight={'-1px'}
        marginBottom={'-1px'}
    >
        <Box width={'48px'} height={'48px'}>
            <Image src={icon} alt={`${title} icon`} />
        </Box>
        <Flex gap={'8px'} flexDirection={'column'} align={{base: 'flex-start', md: 'center'}}>
            <Text variant={'large'}>
                {title}
            </Text>
            <Text variant={'detail'} align={{md: 'center'}} color={'#000000'}>
                {description}
            </Text>
        </Flex>

    </Flex>
)

const benefitsData = [
    { icon: medalIcon, title: "Taught by Professionals", description: "Our cohorts are being taught by top industry experts and educators." },
    { icon: bounties, title: "Bounties", description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard." },
    { icon: codingHostel, title: "Coding Hostels", description: "There is nothing like late night discussion with fellow learners and solving bugs." },
    { icon: peerCodeReviews, title: "Peer Code Reviews", description: "With our internal tools like Masterji, every code assignment receives valuable feedback to enhance your coding skills." },
    { icon: leetLab, title: "Leet Lab", description: "Our in-house built LeetCode-style platform helps you understand the foundations of programming languages." },
    { icon: revisionClasses, title: "Revision Classes", description: "Our peer classes offer plenty of opportunities to learn from each other on various topics." },
]

const Benefits = () => {
    return (
        <Flex direction="column" gap={'32px'} py={'96px'} alignItems={'center'}>
            <Flex gap={'16px'} flexDirection={'column'}>
                <Heading variant={'h2'} textAlign={{ base: "start", md: "center" }}>
                    Key Benefits of Cohorts
                </Heading>

                <Text variant={'p'} textAlign={{ base: "start", md: "center" }}>
                    Cohorts are the best way to learn because you complete the course on schedule.
                </Text>
            </Flex>

            <Grid
                templateColumns={{
                    base: "1fr",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)"
                }}
                width="100%"
                justifyContent={{
                    base: "flex-start",
                    md: "center"
                }}
            >
                {benefitsData.map((benefit, index) => (
                    <BenefitCard
                        key={index}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))}
            </Grid>
        </Flex>
    )
}

export default Benefits