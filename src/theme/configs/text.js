import { defineStyleConfig } from '@chakra-ui/react'

const text = defineStyleConfig({
    baseStyle: {
        fontFamily: 'Urbanist',
        fontWeight: 'light',
    },
    variants: {
        'body-desktop': {
            fontSize: 'body-desktop',
            letterSpacing: 'body-desktop',
            lineHeight: 'body-desktop',
            color: 'white.80',
        }
    },
    defaultProps: {
        variant: 'body-desktop',
    },
})

export default text
