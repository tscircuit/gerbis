// import ebnfParser from "ebnf-parser"
import gerberEBNF from "./gerber-ebnf"
import { Grammars } from "ebnf"

async function main() {
  // ebnfParser.parse(gerberEBNF)
  const bnfParser = new Grammars.W3C.Parser(gerberEBNF)
}

main()
