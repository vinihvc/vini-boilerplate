import {
  chakra,
  forwardRef,
  ResponsiveValue,
  SystemProps,
  HTMLChakraProps,
} from '@chakra-ui/system'
import { mapResponsive } from '@chakra-ui/utils'

type GridProps = Omit<HTMLChakraProps<'div'>, keyof GridOptions> & GridOptions

export const Grid = forwardRef<GridProps, 'div'>((props, ref) => {
  const {
    templateAreas,
    gap,
    rowGap,
    columnGap,
    column,
    row,
    autoFlow,
    autoRows,
    templateRows,
    autoColumns,
    templateColumns,
    ...rest
  } = props

  const styles = {
    display: 'grid',
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns,
  }

  return <chakra.div ref={ref} className="grid" __css={styles} {...rest} />
})

type GridOptions = {
  templateColumns?: SystemProps['gridTemplateColumns']
  gap?: SystemProps['gridGap']
  rowGap?: SystemProps['gridRowGap']
  columnGap?: SystemProps['gridColumnGap']
  autoFlow?: SystemProps['gridAutoFlow']
  autoRows?: SystemProps['gridAutoRows']
  autoColumns?: SystemProps['gridAutoColumns']
  templateRows?: SystemProps['gridTemplateRows']
  templateAreas?: SystemProps['gridTemplateAreas']
  column?: SystemProps['gridColumn']
  row?: SystemProps['gridRow']
}

type GridItemProps = {
  area?: SystemProps['gridArea']
  colSpan?: ResponsiveValue<number | 'auto'>
  colStart?: ResponsiveValue<number | 'auto'>
  colEnd?: ResponsiveValue<number | 'auto'>
  rowStart?: ResponsiveValue<number | 'auto'>
  rowEnd?: ResponsiveValue<number | 'auto'>
  rowSpan?: ResponsiveValue<number | 'auto'>
} & HTMLChakraProps<'div'>

const spanFn = (span?: ResponsiveValue<number | 'auto'>) => {
  return mapResponsive(span, (value) =>
    value === 'auto' ? 'auto' : `span ${value}/span ${value}`,
  )
}

export const GridItem = forwardRef<GridItemProps, 'div'>((props, ref) => {
  const {
    area,
    colSpan,
    colStart,
    colEnd,
    rowEnd,
    rowSpan,
    rowStart,
    ...rest
  } = props

  const styles = {
    gridArea: area,
    gridColumn: spanFn(colSpan),
    gridRow: spanFn(rowSpan),
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd,
  }

  return (
    <chakra.div ref={ref} className="grid__item" __css={styles} {...rest} />
  )
})
