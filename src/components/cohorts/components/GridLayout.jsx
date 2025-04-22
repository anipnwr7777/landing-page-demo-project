import { Grid, Box } from "@chakra-ui/react"
import CourseCard from "./CourseCard"

const GridLayout = () => {
    return (
        <Grid
            templateColumns={{
                base: "300px",           // 1 column with fixed width
                md: "repeat(2, 436px)",  // 2 columns with fixed width
                lg: "repeat(3, 436px)"   // 3 columns with fixed width
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
                    height="550px"
                    width="436px"
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