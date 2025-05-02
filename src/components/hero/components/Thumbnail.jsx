import { Flex, Show } from "@chakra-ui/react"

const Iframe = ({ height }) => {
    return (
        <iframe
            height={height}
            width={'100%'}
            maxWidth={'800px'}
            src="https://www.youtube.com/embed/VNb_LawBBWU"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            aria-label="ChaiCode introduction video"
        />
    )
}

const Thumbnail = () => {
    return (
        <Flex 
            padding={{base: '12px', md: '24px'}} 
            backgroundColor={'rgba(254, 147, 50, 0.10)'} 
            border={'1px solid #FE9332'} 
            borderRadius={'12px'}
            id="video-section"
            scrollMarginTop={{ base: '75px', md: '100px', lg: '110px' }}
        >
            <Show above="md">
                <Iframe height={'471px'} />
            </Show>
            <Show below="md">
                <Iframe height={'190px'} />
            </Show>
        </Flex>
    )
}

export default Thumbnail