import {
  converter,
  filterInvert,
  formatCss,
  formatHex,
  modeHsl,
  modeLab,
  modeLch,
  modeOklab,
  modeOklch,
  modeP3,
  modeRec2020,
  modeRgb,
  modeXyz65,
  useMode,
  type Color,
  type Oklch,
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

function toPercent(value: number): string {
  return `${clean(100 * value)}%`
}

//Delete trailing 0 and only 'precision' decimals
function round(num: number, precision: number) {
  return parseFloat(num.toFixed(precision))
}

export function formatOklchToCss(color: Oklch) {
  // TODO round values
  return formatCss(color)
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
