import test from "ava"
import nearley from "nearley"
import grammar from "../nearley/gerber"

const exampleFile1 = `
G04 Ucamco ex. 1: Two square boxes*
%MOMM*%
%FSLAX26Y26*%
%TF.Part,Other,example*%
%LPD*%
%ADD10C,0.010*%
D10*
X0Y0D02*
G01*
X5000000Y0D01*
Y5000000D01*
X0D01*
Y0D01*
X6000000D02*
X11000000D01*
Y5000000D01*
X6000000D01*
Y0D01*
M02*
`.trim()

const parse = (input: string) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(
    input
      .split("\n")
      .map((s) => s.trim())
      .join("")
  )
  return parser.results
}

test("test example 1", async (t) => {
  const result = parse(exampleFile1)?.[0]
  console.dir(result, { depth: Infinity })
  for (let cmd of result) {
    if (cmd.length)
      t.fail(`non-command found\n\n${JSON.stringify(cmd, null, "  ")}`)
  }
  t.pass("parses")
})
