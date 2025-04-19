import { extendTheme } from '@chakra-ui/react'
import heading from './configs/heading'
import tokens from './configs/tokens'
import text from './configs/text'

const theme = extendTheme({
    ...tokens,
    components: {
        Heading: heading,
        Text: text,
    },
})

export default theme
