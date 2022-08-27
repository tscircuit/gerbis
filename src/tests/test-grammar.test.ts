import test from "ava"
import nearley from "nearley"
import grammar from "../nearley/gerber"

const exampleFile1 = `
G04 Ucamco ex. 1: Two square boxes*
%MOMM*
%FSLAX26Y26*%fractional digits.
%TF.Part,Other,example*%
example
%LPD*%
%ADD10C,0.010*%
D10*
X0Y0D02*
G01*
X5000000Y0D01*
is the current point (0,0), end point is (5, 0)
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

test("test grammar", async (t) => {
  const result = parse(
    `

G04 Ucamco ex. 1: Two square boxes*
G01*
M02*

`.trim()
  )?.[0]
  console.dir(result, { depth: Infinity })
  t.deepEqual(result, [])
})
