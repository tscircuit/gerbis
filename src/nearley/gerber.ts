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
    {"name": "start$ebnf$1", "symbols": []},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["G04"]},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["G01"]},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["MO"]},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["FS"]},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["TF"]},
    {"name": "start$ebnf$1$subexpression$1", "symbols": ["D01"]},
    {"name": "start$ebnf$1", "symbols": ["start$ebnf$1", "start$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "start", "symbols": ["start$ebnf$1", "M02"], "postprocess": d => [...d[0].flatMap(v => v), d[1]]},
    {"name": "str$ebnf$1", "symbols": [/[^*]/]},
    {"name": "str$ebnf$1", "symbols": ["str$ebnf$1", /[^*]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "str", "symbols": ["str$ebnf$1"], "postprocess": ([d]) => d.join("")},
    {"name": "G04$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"4"}], "postprocess": (d) => d.join('')},
    {"name": "G04", "symbols": ["G04$string$1", "str", {"literal":"*"}], "postprocess": ([command_code, comment]) => ({ command_code, comment })},
    {"name": "M02$string$1", "symbols": [{"literal":"M"}, {"literal":"0"}, {"literal":"2"}], "postprocess": (d) => d.join('')},
    {"name": "M02", "symbols": ["M02$string$1", {"literal":"*"}], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "MO$string$1", "symbols": [{"literal":"M"}, {"literal":"O"}], "postprocess": (d) => d.join('')},
    {"name": "MO$subexpression$1$string$1", "symbols": [{"literal":"M"}, {"literal":"M"}], "postprocess": (d) => d.join('')},
    {"name": "MO$subexpression$1", "symbols": ["MO$subexpression$1$string$1"]},
    {"name": "MO$subexpression$1$string$2", "symbols": [{"literal":"I"}, {"literal":"N"}], "postprocess": (d) => d.join('')},
    {"name": "MO$subexpression$1", "symbols": ["MO$subexpression$1$string$2"]},
    {"name": "MO$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "MO", "symbols": [{"literal":"%"}, "MO$string$1", "MO$subexpression$1", "MO$string$2"], "postprocess": ([,command_code, [unit]]) => ({ command_code, unit })},
    {"name": "FS$string$1", "symbols": [{"literal":"F"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "FS$string$2", "symbols": [{"literal":"L"}, {"literal":"A"}], "postprocess": (d) => d.join('')},
    {"name": "FS$string$3", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "FS", "symbols": [{"literal":"%"}, "FS$string$1", "FS$string$2", {"literal":"X"}, /[1-6]/, /[56]/, {"literal":"Y"}, /[1-6]/, /[56]/, "FS$string$3"], "postprocess": 
        ([,command_code, m, , xid, xfd, , yid, yfd]) =>
          ({
              command_code,
              x_integer_digits: parseInt(xid), x_fractional_digits: parseInt(yid),
              y_integer_digits: parseInt(yid), y_fractional_digits: parseInt(yfd) })
        },
    {"name": "user_name$ebnf$1", "symbols": []},
    {"name": "user_name$ebnf$1", "symbols": ["user_name$ebnf$1", /[._a-zA-Z0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "user_name", "symbols": [/[_a-zA-Z$]/, "user_name$ebnf$1"], "postprocess": ([f, rest]) => f + rest.join("")},
    {"name": "file_attribute_name$string$1", "symbols": [{"literal":"."}, {"literal":"P"}, {"literal":"a"}, {"literal":"r"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$1"]},
    {"name": "file_attribute_name$string$2", "symbols": [{"literal":"."}, {"literal":"F"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":"F"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$2"]},
    {"name": "file_attribute_name$string$3", "symbols": [{"literal":"."}, {"literal":"F"}, {"literal":"i"}, {"literal":"l"}, {"literal":"e"}, {"literal":"P"}, {"literal":"o"}, {"literal":"l"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$3"]},
    {"name": "file_attribute_name$string$4", "symbols": [{"literal":"."}, {"literal":"S"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}, {"literal":"C"}, {"literal":"o"}, {"literal":"o"}, {"literal":"r"}, {"literal":"d"}, {"literal":"i"}, {"literal":"n"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"s"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$4"]},
    {"name": "file_attribute_name$string$5", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"D"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$5"]},
    {"name": "file_attribute_name$string$6", "symbols": [{"literal":"."}, {"literal":"G"}, {"literal":"e"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}, {"literal":"S"}, {"literal":"o"}, {"literal":"f"}, {"literal":"t"}, {"literal":"w"}, {"literal":"a"}, {"literal":"r"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$6"]},
    {"name": "file_attribute_name$string$7", "symbols": [{"literal":"."}, {"literal":"P"}, {"literal":"r"}, {"literal":"o"}, {"literal":"j"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"I"}, {"literal":"d"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$7"]},
    {"name": "file_attribute_name$string$8", "symbols": [{"literal":"."}, {"literal":"M"}, {"literal":"D"}, {"literal":"5"}], "postprocess": (d) => d.join('')},
    {"name": "file_attribute_name", "symbols": ["file_attribute_name$string$8"]},
    {"name": "file_attribute_name", "symbols": ["user_name"]},
    {"name": "field$ebnf$1", "symbols": []},
    {"name": "field$ebnf$1", "symbols": ["field$ebnf$1", /[^%*,]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "field", "symbols": ["field$ebnf$1"], "postprocess": ([d]) => d.join("")},
    {"name": "TF$string$1", "symbols": [{"literal":"T"}, {"literal":"F"}], "postprocess": (d) => d.join('')},
    {"name": "TF$ebnf$1", "symbols": []},
    {"name": "TF$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "field"]},
    {"name": "TF$ebnf$1", "symbols": ["TF$ebnf$1", "TF$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "TF$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "TF", "symbols": [{"literal":"%"}, "TF$string$1", "file_attribute_name", "TF$ebnf$1", "TF$string$2"], "postprocess": ([,command_code, [name], values]) => ({ command_code, name, values: values.map(v => v[1]) })},
    {"name": "G01$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"1"}], "postprocess": (d) => d.join('')},
    {"name": "G01", "symbols": ["G01$string$1", {"literal":"*"}], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "G02$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"2"}], "postprocess": (d) => d.join('')},
    {"name": "G02", "symbols": ["G02$string$1", {"literal":"*"}], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "G03$string$1", "symbols": [{"literal":"G"}, {"literal":"0"}, {"literal":"3"}], "postprocess": (d) => d.join('')},
    {"name": "G03", "symbols": ["G03$string$1", {"literal":"*"}], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "G75$string$1", "symbols": [{"literal":"G"}, {"literal":"7"}, {"literal":"5"}], "postprocess": (d) => d.join('')},
    {"name": "G75", "symbols": ["G75$string$1", {"literal":"*"}], "postprocess": ([command_code]) => ({ command_code })},
    {"name": "D01$string$1", "symbols": [{"literal":"D"}, {"literal":"0"}, {"literal":"1"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "D01", "symbols": [/["X" integer]/, /["Y" integer]/, /["I" integer "J" integer]/, "D01$string$1"], "postprocess": 
        ([x, y, i, j]) => ({ x, y, i, j }) },
    {"name": "integer$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "integer$ebnf$1", "symbols": ["integer$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "integer", "symbols": ["integer$ebnf$1"], "postprocess": d => parseInt(d[0].join(""))}
  ],
  ParserStart: "start",
};

export default grammar;
