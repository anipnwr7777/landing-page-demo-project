import { Grid, Box, useBreakpointValue } from "@chakra-ui/react"
import CourseCard from "./CourseCard"

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
            {[...Array(numberOfCards)].map((_, index) => (
                <Box
                    key={index}
                    height="100%"
                    width="100%"
                    // bg="primary"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white.0"
                >
                    <CourseCard />
                </Box>
            ))}
        </Grid>
    )
}

export default GridLayout 