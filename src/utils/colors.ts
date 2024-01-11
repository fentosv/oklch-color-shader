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

function formatOklchValue(num: number) {
  //Delete trailing 0 and only 3 decimals
  return parseFloat(num.toFixed(3))
}

export function formatOklch(color: Oklch) {
  const { l, c, h } = color
  return `oklch(${formatOklchValue(l)} ${formatOklchValue(c)} ${h ? formatOklchValue(h) : ''})`
}

export function formatToHex(color: Color) {
  const hexColor = formatHex(color)
  return hexColor
}

export function convertOklchToCss(color: Oklch) {
  const cssOklchColor = formatOklch(color)
  return cssOklchColor
}

export function convertToOklch(color: string) {
  const oklchColor = oklchConverter(color)
  return oklchColor
}
