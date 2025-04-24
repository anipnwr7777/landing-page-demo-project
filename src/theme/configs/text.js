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
        },
        'p-ui': {
            fontSize: 'p-ui',
            letterSpacing: 'p-ui',
            lineHeight: 'p-ui',
            color: '#000000',
            fontWeight: 400
        },
        'token': {
            fontSize: 'token',
            letterSpacing: 'token',
            lineHeight: 'token',
            color: '#000000',
            fontWeight: 500
        },
        'body': {
            fontSize: 'body',
            letterSpacing: 'body',
            lineHeight: 'body',
            color: 'muted-foreground',
            fontWeight: 400
        },
        'p-ui-medium': {
            fontSize: 'p-ui-medium',
            letterSpacing: 'p-ui-medium',
            lineHeight: 'p-ui-medium',
            color: 'success',
            fontWeight: 500
        },
        'p': {
            fontSize: 'p',
            letterSpacing: 'p',
            lineHeight: 'p',
            color: '#000000',
            fontWeight: 400
        },
        'detail': {
            fontSize: 'detail',
            letterSpacing: 'detail',
            lineHeight: 'detail',
            color: '#808080',
            fontWeight: 500
        }
    },
    defaultProps: {
        // variant: 'lead',
    },
})

export default text
