import { defineStyleConfig } from '@chakra-ui/react'

const heading = defineStyleConfig({
    baseStyle: {
        fontFamily: 'Urbanist',
    },
    variants: {
        'desktop-title': {
            fontSize: 'title-desktop',
            color: 'solitude',
            fontWeight: 'normal',
            letterSpacing: 'title-desktop',
        }
    },
    // The default variant value
    defaultProps: {
        variant: 'desktop',
    },
})

export default heading
