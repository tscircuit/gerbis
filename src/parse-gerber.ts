import nearley from "nearley"
import grammar from "./nearley/gerber"

export const parseGerber = (input: string) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(input.replace(/\n/g, ""))
  if (parser.results.length > 1) {
    // TODO comment out in prod
    throw new Error(
      `Ambiguous parse (${parser.results.length}), this is an issue with the gerbis library`
    )
  }
  return parser.results[0]
}

export default parseGerber
