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
      className="image"
      position="relative"
      overflow="hidden"
      transitionDuration="0.3s"
      transitionTimingFunction="cubic-bezier(.2, 0, .2, 1)"
      filter={isLoading ? 'blur(10px)' : 'blur(0px)'}
      {...rest}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        onLoadingComplete={() => setLoading(false)}
      />
    </Box>
  )
}
