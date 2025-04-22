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
        },
        'h2': {
            fontSize: 'h2',
            color: 'accent-foreground',
            fontWeight: 'semibold',
            letterSpacing: 'h2',
        },
        'h4': {
            fontSize: 'h4',
            color: 'black',
            fontWeight: 'semibold',
            letterSpacing: 'h4',
            lineHeight: 'h4'
        }
    },
    // The default variant value
    defaultProps: {
        variant: 'h1',
    },
})

export default heading
