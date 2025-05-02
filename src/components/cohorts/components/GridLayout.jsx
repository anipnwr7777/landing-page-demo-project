import { Grid, Box } from "@chakra-ui/react"
import CourseCard from "./CourseCard"

const GridLayout = () => {
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
            {/* Create 6 placeholder boxes */}
            {[...Array(6)].map((_, index) => (
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