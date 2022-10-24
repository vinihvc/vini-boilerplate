import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  forwardRef,
  omitThemingProps,
} from '@chakra-ui/system'

export type LinkProps = {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
} & HTMLChakraProps<'a'> &
  ThemingProps<'Link'>

export const Link = forwardRef<LinkProps, 'a'>((props, ref) => {
  const { isExternal, ...rest } = omitThemingProps(props)

  return (
    <chakra.a
      ref={ref}
      className="link"
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener',
      })}
      {...rest}
    />
  )
})
