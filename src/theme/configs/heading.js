import { defineStyleConfig } from '@chakra-ui/react'

const heading = defineStyleConfig({
    baseStyle: {
        fontFamily: 'Public Sans',
    },
    // https://v2.chakra-ui.com/docs/styled-system/theme
    variants: {
        'h1': {
            fontSize: 'h1',
            color: 'accent-foreground',
            fontWeight: 'extrabold',
            letterSpacing: 'h1',
        },
        'h3': {
            fontSize: 'h3',
            color: 'accent-foreground',
            fontWeight: 'semibold',
            letterSpacing: 'h3',
        }
    },
    // The default variant value
    defaultProps: {
        variant: 'h1',
    },
})

export default heading
