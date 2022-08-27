import test from "ava"
import nearley from "nearley"
import grammar from "../nearley/gerber"

const exampleFile1 = `
G04 Ucamco ex. 2: Shapes*
%FSLAX36Y36*%
%MOMM*%
%TF.FileFunction,Other,Sample*%
%LPD*%
G04 Define Apertures*
%AMTHERMAL80*
7,0,0,0.800,0.550,0.125,45*%
%ADD10C,0.1*%
%ADD11C,0.6*%
%ADD12R,0.6X0.6*%
%ADD13R,0.4X1.00*%
%ADD14R,1.00X0.4*%
%ADD15O,0.4X01.00*%
%ADD16P,1.00X3*%
%ADD19THERMAL80*%
G04 Start image generation*
D10*
X0Y2500000D02*
G01*
X0Y0D01*
X2500000Y0D01*
X10000000Y10000000D02*
X15000000D01*
X20000000Y15000000D01*
X25000000D02*
Y10000000D01*
D11*
X10000000Y10000000D03*
X20000000D03*
X25000000D03*
Y15000000D03*
X20000000D03*
D12*
X10000000Y15000000D03*
D13*
X30000000Y15000000D03*
D14*
Y12500000D03*
D15*
Y10000000D03*
D10*
X37500000Y10000000D02*
G75*
G03*
X37500000Y10000000I2500000J0D01*
D16*
X34000000Y10000000D03*
X35000000Y9000000D03*
G36*
X5000000Y20000000D02*
G01*
Y37500000D01*
X37500000D01*
Y20000000D01*
X5000000D01*
G37*
%LPC*%
G36*
X10000000Y25000000D02*
Y30000000D01*
G02*
X12500000Y32500000I2500000J0D01*
G01*
X30000000D01*
G02*
X30000000Y25000000I0J-3750000D01*
G01*
X10000000D01*
G37*
%LPD*%
D10*
X15000000Y28750000D02*
X20000000D01*
D11*
X15000000Y28750000D03*
X20000000D03*
D19*
X28750000Y28750000D03*
M02*
`.trim()

const parse = (input: string) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
  parser.feed(
    input
    // .split("\n")
    // .map((s) => s.trim())
    // .join("")
  )
  return parser.results
}

test("test example 2", async (t) => {
  const result = parse(
    `

G04 Ucamco ex. 2: Shapes*
%FSLAX36Y36*%
%MOMM*%
%TF.FileFunction,Other,Sample*%
%LPD*%
G04 Define Apertures*
%AMTHERMAL80*
M02*

  `.trim()
  )?.[0]
  console.dir(result, { depth: Infinity })
  for (let cmd of result) {
    if (cmd.length)
      t.fail(`non-command found\n\n${JSON.stringify(cmd, null, "  ")}`)
  }
  t.pass("parses")
})