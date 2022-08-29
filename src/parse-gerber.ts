import nearley from "nearley"
import grammar from "./nearley/gerber"

export const parseGerber = (input: string) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(input.replace(/\n/g, ""))
  return parser.results[0]
}

export default parseGerber
