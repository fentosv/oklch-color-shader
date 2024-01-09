import { parseHex, converter } from 'culori/fn'

const oklchConverter = converter('oklch')

export default function colors(color: string) {
  // console.log(color)
  // console.log(oklch(color))

  console.log(oklchConverter(parseHex(color)))
}
