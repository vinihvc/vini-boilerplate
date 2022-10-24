import { useState } from 'react'

import NextImage from 'next/image'

import { HTMLChakraProps } from '@chakra-ui/system'

import { Box } from 'components/layout'

type ImageProps = {
  src: string
  alt: string
} & HTMLChakraProps<'div'>

export const Image = (props: ImageProps) => {
  const { src, alt, ...rest } = props

  const [isLoading, setLoading] = useState(true)

  return (
    <Box
      position="relative"
      width="full"
      height="full"
      overflow="hidden"
      transition="normal"
      className="image"
      {...rest}
    >
      <Box
        as={NextImage}
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        transitionTimingFunction="cubic-bezier(.2, 0, .2, 1)"
        transitionDuration="0.3s"
        {...(isLoading
          ? {
              filter: 'blur(10px)',
            }
          : {
              filter: 'blur(0px)',
            })}
        onLoadingComplete={() => setLoading(false)}
      />
    </Box>
  )
}
