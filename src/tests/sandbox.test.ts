import test from "ava"
import { parseGerber } from "../parse-gerber"
import nearley from "nearley"
import grammar from "../nearley/gerber"

const parse = (input: string) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(input.replace(/\n/g, ""))
  return parser.results
}

test("sandbox", (t) => {
  const res = parseGerber(`%AMTHERMAL80*2,0*%`)
})
