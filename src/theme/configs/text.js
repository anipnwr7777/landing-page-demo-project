import { defineStyleConfig } from '@chakra-ui/react'

const text = defineStyleConfig({
    baseStyle: {
        fontFamily: 'Public Sans',
        fontWeight: 'light',
    },
    variants: {
        'lead': {
            fontSize: 'lead',
            letterSpacing: 'lead',
            lineHeight: 'lead',
            color: '#18181B',
            fontWeight: 400
        }
    },
    defaultProps: {
        // variant: 'lead',
    },
})

export default text
