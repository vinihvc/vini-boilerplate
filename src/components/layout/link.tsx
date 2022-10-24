import {
  HTMLChakraProps,
  ThemingProps,
  chakra,
  forwardRef,
  omitThemingProps,
  useStyleConfig,
} from '@chakra-ui/system'

export type LinkProps = {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
} & HTMLChakraProps<'a'> &
  ThemingProps<'Link'>

export const Link = forwardRef<LinkProps, 'a'>((props, ref) => {
  const styles = useStyleConfig('Link', props)

  const { isExternal, ...rest } = omitThemingProps(props)

  return (
    <chakra.a
      ref={ref}
      className="link"
      __css={styles}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener',
      })}
      {...rest}
    />
  )
})
