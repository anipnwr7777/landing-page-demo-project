import { Box, Flex, Image, Text } from "@chakra-ui/react"
import comprehensiveCurriculum from "../../../assets/svg/comprehensive-curriculum.svg"
import finishFlag from "../../../assets/svg/finish-flag.svg"
import calender from "../../../assets/svg/calendar.svg"
import code from "../../../assets/svg/code.svg"
import announcement from "../../../assets/svg/announcement.svg"
import bounties from "../../../assets/svg/bounties-1.svg"
import divider from "../../../assets/svg/divider.svg"

const points = [
    {
        icon: comprehensiveCurriculum,
        heading: 'Comprehensive Curriculum',
        content: 'Master key concepts and hands-on skills with clarity and confidence. Learn what truly matters, the right way, thorough, practical, and easy to understand.'
    },
    {
        icon: finishFlag,
        heading: 'You finish it',
        content: 'Our cohorts are a collaborative journey, students learn together, stay motivated, and complete the course on time as a community.'
    },
    {
        icon: calender,
        heading: 'Industry Guests',
        content: 'We\'re connected with industry experts and regularly bring them into our classes for engaging, fun, and insightful sessions with students.'
    },
    {
        icon: code,
        heading: 'Code and Chill',
        content: 'Coding should be fun, not frightening. It might feel tough at first, but with time and practice, everything starts to click and fall into place.'
    },
    {
        icon: announcement,
        heading: 'Improve Communication',
        content: 'One of the best ways to boost communication skills is through practice. Our peer classes make it happen where co-learners teach, share, and grow together.'
    },
    {
        icon: bounties,
        heading: 'Bounties',
        content: 'Every cohort comes with exciting cash prizes and some even feature a MacBook giveaway! It\'s our way of keeping the motivation high and the learning fun.'
    }
]

const ChaiCodePro = ({ icon, heading, content }) => {
    return (
        <Flex gap={'16px'} paddingY={'24px'} borderBottom={'1px dashed #CCC'}>
            <Image src={icon} height={'32px'} width={'32px'} />
            <Flex gap={'8px'} flexDirection={'column'}>
                <Text variant={'large'}>
                    {heading}
                </Text>
                <Text variant={'body'} color={'#000000'}>
                    {content}
                </Text>
            </Flex>
        </Flex>
    )
}

const ChaiCodePros = () => {
    return (
        <Flex flexDirection={'column'}>
            {
                points.map((point) => {
                    return (
                        <ChaiCodePro
                            key={point.heading}
                            icon={point.icon}
                            heading={point.heading}
                            content={point.content}
                        />
                    )
                })
            }
        </Flex>
    )
}

export default ChaiCodePros