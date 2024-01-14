import {
  converter,
  formatHex,
  useMode,
  modeOklch,
  modeRec2020,
  modeOklab,
  modeXyz65,
  modeRgb,
  modeLch,
  modeHsl,
  modeLab,
  modeP3,
  type Oklch,
  type Color,
  filterInvert,
} from 'culori/fn'

export const oklch = useMode(modeOklch)
export const rec2020 = useMode(modeRec2020)
export const oklab = useMode(modeOklab)
export const xyz65 = useMode(modeXyz65)
export const rgb = useMode(modeRgb)
export const lch = useMode(modeLch)
export const hsl = useMode(modeHsl)
export const lab = useMode(modeLab)
export const p3 = useMode(modeP3)

const oklchConverter = converter('oklch')
const rgbConverter = converter('rgb')

function round(num: number) {
  //Delete trailing 0 and only 3 decimals
  return parseFloat(num.toFixed(3))
}

export function formatOklchToCss(color: Oklch) {
  const { l, c, h, alpha } = color
  return `oklch(${round(l)} ${round(c)}${h ? ' ' + round(h) : ''}${
    alpha && alpha !== 1 ? ' ' + round(alpha) : ''
  })`
}

export function formatToHex(color: Color) {
  const hexColor = formatHex(color)
  return hexColor
}

export function colorToRgb(color: Color) {
  const rgbColor = rgbConverter(color)
  return rgbColor
}

export function convertToOklch(color: string) {
  const oklchColor = oklchConverter(color)
  return oklchColor
}

export function getOpacityShades(color: Oklch) {
  const { l, c, h, alpha } = color
  // console.log({ l, c, h, alpha })
  // const parsedColor = parse(color)
  // console.log(parsedColor)
}

export function invertColor(color: Color) {
  const filterFunction = filterInvert(1, color.mode)
  const contrastColor = filterFunction(color)
  return formatHex(contrastColor)
}
