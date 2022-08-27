// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: undefined,
  ParserRules: [
    {"name": "dqstring$ebnf$1", "symbols": []},
    {"name": "dqstring$ebnf$1", "symbols": ["dqstring$ebnf$1", "dstrchar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "dqstring", "symbols": [{"literal":"\""}, "dqstring$ebnf$1", {"literal":"\""}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "sqstring$ebnf$1", "symbols": []},
    {"name": "sqstring$ebnf$1", "symbols": ["sqstring$ebnf$1", "sstrchar"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "sqstring", "symbols": [{"literal":"'"}, "sqstring$ebnf$1", {"literal":"'"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "btstring$ebnf$1", "symbols": []},
    {"name": "btstring$ebnf$1", "symbols": ["btstring$ebnf$1", /[^`]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "btstring", "symbols": [{"literal":"`"}, "btstring$ebnf$1", {"literal":"`"}], "postprocess": function(d) {return d[1].join(""); }},
    {"name": "dstrchar", "symbols": [/[^\\"\n]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": 
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "sstrchar", "symbols": [/[^\\'\n]/], "postprocess": id},
    {"name": "sstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess": function(d) { return JSON.parse("\""+d.join("")+"\""); }},
    {"name": "sstrchar$string$1", "symbols": [{"literal":"\\"}, {"literal":"'"}], "postprocess": (d) => d.join('')},
    {"name": "sstrchar", "symbols": ["sstrchar$string$1"], "postprocess": function(d) {return "'"; }},
    {"name": "strescape", "symbols": [/["\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess": 
        function(d) {
            return d.join("");
        }
        },
    {"name": "start$ebnf$1", "symbols": []},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["G04"]},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["G01"]},
    {"name": "start$ebnf$1", "symbols": ["start$ebnf$1", "start$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "start", "symbols": ["start$ebnf$1", "M02"], "postprocess": d => [...d[0].flatMap(v => v), d[1]]},
    {"name": "str$ebnf$1", "symbols": [/[^*]/]},
    {"name": "str$ebnf$1", "symbols": ["str$ebnf$1", /[^*]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "str", "symbols": ["str$ebnf$1"], "postprocess": ([d]) => d.join("")},
    {"name": "G04$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"4"}], "postprocess": (d) => d.join('')},
    {"name": "G04", "symbols": ["G04$string$1", "str", {"literal":"*"}], "postprocess": ([command_code, comment]) => ({ command_code, comment })},
    {"name": "M02$string$1", "symbols": [{"literal":"M"}, {"literal":"0"}, {"literal":"2"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "M02", "symbols": ["M02$string$1"], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "G01$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"1"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "G01", "symbols": ["G01$string$1"], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "G02$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"2"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "G02", "symbols": ["G02$string$1"], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "G03$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"3"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "G03", "symbols": ["G03$string$1"], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "G75$string$1", "symbols": [{"literal":"G"}, {"literal":"7"}, {"literal":"5"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "G75", "symbols": ["G75$string$1"], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "number$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "number", "symbols": ["number$ebnf$1"], "postprocess": d => parseInt(d[0].join(""))}
  ],
  ParserStart: "start",
};

export default grammar;
