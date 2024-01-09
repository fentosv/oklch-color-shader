import { parseHex, converter, useMode, modeOklch } from 'culori/fn'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const oklch = useMode(modeOklch)
const oklchConverter = converter('oklch')

export default function colors(color: string) {
  // console.log(color)
  // console.log(oklch(color))

  console.log(oklchConverter(parseHex(color)))
}
