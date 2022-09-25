import Image from "next/image";
import { useContext } from "react";
import { Box, Flex, Icon } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowCircleLeft}
                onClick={() => scrollPrev()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Flex justifyContent='center' alignItems='center' marginRight='1'>
            <Icon 
                as={FaArrowCircleRight}
                onClick={() => scrollNext()}
                fontSize='2xl'
                cursor='pointer'
            />
        </Flex>
    )
}

const ImageScrollbar = ({data}) => (
    <ScrollMenu 
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        style={{overflow: 'hidden'}}
    >
        {data.map((image) => (
            <Box width='910px' key={image.id} itemID={image.id} overflow='hidden' p='1'>
                <Image 
                    alt='property'
                    placeholder='blur' 
                    blurDataURL={image.url} 
                    src={image.url} 
                    width={1000} 
                    height={500}
                    sizes='(max-width:500px) 100px, (max-width:1023px) 400px, 1000px'
                />
            </Box>
        ))}
    </ScrollMenu>
)

export default ImageScrollbar;