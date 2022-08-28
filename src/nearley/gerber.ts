// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

// If you wanted to introduce a lexer, you'd do it like this:
// const moo = require("moo")
// 
// const lexer = moo.compile({
  // ws: { match: /\n/, lineBreaks: true },
  // c: { match: /./ }
// })
// 
// lexer.next = (next => () => {   
  // let token;
  // while ((token = next.call(lexer)) && (
    // token.type === "ws"
  // )) {}
  // return token;
// })(lexer.next);

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
    {"name": "unsigned_int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_int$ebnf$1", "symbols": ["unsigned_int$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_int", "symbols": ["unsigned_int$ebnf$1"], "postprocess": 
        function(d) {
            return parseInt(d[0].join(""));
        }
        },
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"-"}]},
    {"name": "int$ebnf$1$subexpression$1", "symbols": [{"literal":"+"}]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "int$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "int$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$2", "symbols": ["int$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "int", "symbols": ["int$ebnf$1", "int$ebnf$2"], "postprocess": 
        function(d) {
            if (d[0]) {
                return parseInt(d[0][0]+d[1].join(""));
            } else {
                return parseInt(d[1].join(""));
            }
        }
        },
    {"name": "unsigned_decimal$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$1", "symbols": ["unsigned_decimal$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "unsigned_decimal$ebnf$2$subexpression$1", "symbols": [{"literal":"."}, "unsigned_decimal$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "unsigned_decimal$ebnf$2", "symbols": ["unsigned_decimal$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "unsigned_decimal$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "unsigned_decimal", "symbols": ["unsigned_decimal$ebnf$1", "unsigned_decimal$ebnf$2"], "postprocess": 
        function(d) {
            return parseFloat(
                d[0].join("") +
                (d[1] ? "."+d[1][1].join("") : "")
            );
        }
        },
    {"name": "decimal$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "decimal$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "decimal$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$2", "symbols": ["decimal$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "decimal$ebnf$3$subexpression$1$ebnf$1", "symbols": ["decimal$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "decimal$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "decimal$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "decimal$ebnf$3", "symbols": ["decimal$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "decimal$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "decimal", "symbols": ["decimal$ebnf$1", "decimal$ebnf$2", "decimal$ebnf$3"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "")
            );
        }
        },
    {"name": "percentage", "symbols": ["decimal", {"literal":"%"}], "postprocess": 
        function(d) {
            return d[0]/100;
        }
        },
    {"name": "jsonfloat$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "jsonfloat$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$2", "symbols": ["jsonfloat$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$3$subexpression$1$ebnf$1", "symbols": ["jsonfloat$ebnf$3$subexpression$1$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$3$subexpression$1", "symbols": [{"literal":"."}, "jsonfloat$ebnf$3$subexpression$1$ebnf$1"]},
    {"name": "jsonfloat$ebnf$3", "symbols": ["jsonfloat$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": [/[0-9]/]},
    {"name": "jsonfloat$ebnf$4$subexpression$1$ebnf$2", "symbols": ["jsonfloat$ebnf$4$subexpression$1$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "jsonfloat$ebnf$4$subexpression$1", "symbols": [/[eE]/, "jsonfloat$ebnf$4$subexpression$1$ebnf$1", "jsonfloat$ebnf$4$subexpression$1$ebnf$2"]},
    {"name": "jsonfloat$ebnf$4", "symbols": ["jsonfloat$ebnf$4$subexpression$1"], "postprocess": id},
    {"name": "jsonfloat$ebnf$4", "symbols": [], "postprocess": () => null},
    {"name": "jsonfloat", "symbols": ["jsonfloat$ebnf$1", "jsonfloat$ebnf$2", "jsonfloat$ebnf$3", "jsonfloat$ebnf$4"], "postprocess": 
        function(d) {
            return parseFloat(
                (d[0] || "") +
                d[1].join("") +
                (d[2] ? "."+d[2][1].join("") : "") +
                (d[3] ? "e" + (d[3][1] || "+") + d[3][2].join("") : "")
            );
        }
        },
    {"name": "start$ebnf$1", "symbols": []},
    {"name": "start$ebnf$1", "symbols": ["start$ebnf$1", "cmd"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "start", "symbols": ["start$ebnf$1", "M02"], "postprocess": d => [...d[0].flatMap(v => v), d[1]]},
    {"name": "cmd", "symbols": ["G04"]},
    {"name": "cmd", "symbols": ["MO"]},
    {"name": "cmd", "symbols": ["FS"]},
    {"name": "cmd", "symbols": ["AD"]},
    {"name": "cmd", "symbols": ["AM"]},
    {"name": "cmd", "symbols": ["Dnn"]},
    {"name": "cmd", "symbols": ["D01"]},
    {"name": "cmd", "symbols": ["D02"]},
    {"name": "cmd", "symbols": ["D03"]},
    {"name": "cmd", "symbols": ["G01"]},
    {"name": "cmd", "symbols": ["G02"]},
    {"name": "cmd", "symbols": ["G03"]},
    {"name": "cmd", "symbols": ["G75"]},
    {"name": "cmd", "symbols": ["LP"]},
    {"name": "cmd", "symbols": ["LM"]},
    {"name": "cmd", "symbols": ["LR"]},
    {"name": "cmd", "symbols": ["LS"]},
    {"name": "cmd", "symbols": ["region_statement"]},
    {"name": "cmd", "symbols": ["AB_statement"]},
    {"name": "cmd", "symbols": ["SR_statement"]},
    {"name": "cmd", "symbols": ["TF"]},
    {"name": "cmd", "symbols": ["TA"]},
    {"name": "cmd", "symbols": ["TO"]},
    {"name": "cmd", "symbols": ["TD"], "postprocess": d => d[0]},
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
        ([,command_code, m, , xid, xfd, , yid, yfd]) => {
          return ({
              command_code,
              x_integer_digits: parseInt(xid), x_fractional_digits: parseInt(yid),
              y_integer_digits: parseInt(yid), y_fractional_digits: parseInt(yfd) })
        }
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
    {"name": "LP$string$1", "symbols": [{"literal":"L"}, {"literal":"P"}], "postprocess": (d) => d.join('')},
    {"name": "LP$subexpression$1", "symbols": [{"literal":"C"}]},
    {"name": "LP$subexpression$1", "symbols": [{"literal":"D"}]},
    {"name": "LP$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "LP", "symbols": [{"literal":"%"}, "LP$string$1", "LP$subexpression$1", "LP$string$2"], "postprocess": ([,command_code, [setting]]) => ({ command_code, setting: setting === "C" ? "clear" : "dark"})},
    {"name": "LM$string$1", "symbols": [{"literal":"L"}, {"literal":"M"}], "postprocess": (d) => d.join('')},
    {"name": "LM$subexpression$1", "symbols": [{"literal":"N"}]},
    {"name": "LM$subexpression$1$string$1", "symbols": [{"literal":"X"}, {"literal":"Y"}], "postprocess": (d) => d.join('')},
    {"name": "LM$subexpression$1", "symbols": ["LM$subexpression$1$string$1"]},
    {"name": "LM$subexpression$1", "symbols": [{"literal":"Y"}]},
    {"name": "LM$subexpression$1", "symbols": [{"literal":"X"}]},
    {"name": "LM$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "LM", "symbols": [{"literal":"%"}, "LM$string$1", "LM$subexpression$1", "LM$string$2"]},
    {"name": "LR$string$1", "symbols": [{"literal":"L"}, {"literal":"R"}], "postprocess": (d) => d.join('')},
    {"name": "LR$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "LR", "symbols": [{"literal":"%"}, "LR$string$1", "decimal", "LR$string$2"]},
    {"name": "LS$string$1", "symbols": [{"literal":"L"}, {"literal":"S"}], "postprocess": (d) => d.join('')},
    {"name": "LS$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "LS", "symbols": [{"literal":"%"}, "LS$string$1", "decimal", "LS$string$2"]},
    {"name": "region_statement$ebnf$1$subexpression$1", "symbols": ["contour"]},
    {"name": "region_statement$ebnf$1", "symbols": ["region_statement$ebnf$1$subexpression$1"]},
    {"name": "region_statement$ebnf$1$subexpression$2", "symbols": ["contour"]},
    {"name": "region_statement$ebnf$1", "symbols": ["region_statement$ebnf$1", "region_statement$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "region_statement", "symbols": ["G36", "region_statement$ebnf$1", "G37"]},
    {"name": "contour$ebnf$1", "symbols": []},
    {"name": "contour$ebnf$1$subexpression$1", "symbols": ["D01"]},
    {"name": "contour$ebnf$1$subexpression$1", "symbols": ["G01"]},
    {"name": "contour$ebnf$1$subexpression$1", "symbols": ["G02"]},
    {"name": "contour$ebnf$1$subexpression$1", "symbols": ["G03"]},
    {"name": "contour$ebnf$1", "symbols": ["contour$ebnf$1", "contour$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "contour", "symbols": ["D02", "contour$ebnf$1"]},
    {"name": "G36$string$1", "symbols": [{"literal":"G"}, {"literal":"3"}, {"literal":"6"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "G36", "symbols": ["G36$string$1"]},
    {"name": "G37$string$1", "symbols": [{"literal":"G"}, {"literal":"3"}, {"literal":"7"}, {"literal":"*"}], "postprocess": (d) => d.join('')},
    {"name": "G37", "symbols": ["G37$string$1"]},
    {"name": "AD$string$1", "symbols": [{"literal":"A"}, {"literal":"D"}], "postprocess": (d) => d.join('')},
    {"name": "AD$subexpression$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "decimal"]},
    {"name": "AD$subexpression$1$subexpression$1$ebnf$1", "symbols": ["AD$subexpression$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AD$subexpression$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AD$subexpression$1$subexpression$1", "symbols": [{"literal":"C"}, {"literal":","}, "decimal", "AD$subexpression$1$subexpression$1$ebnf$1"]},
    {"name": "AD$subexpression$1", "symbols": ["AD$subexpression$1$subexpression$1"]},
    {"name": "AD$subexpression$1$subexpression$2$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "decimal"]},
    {"name": "AD$subexpression$1$subexpression$2$ebnf$1", "symbols": ["AD$subexpression$1$subexpression$2$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AD$subexpression$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AD$subexpression$1$subexpression$2", "symbols": [{"literal":"R"}, {"literal":","}, "decimal", {"literal":"X"}, "decimal", "AD$subexpression$1$subexpression$2$ebnf$1"]},
    {"name": "AD$subexpression$1", "symbols": ["AD$subexpression$1$subexpression$2"]},
    {"name": "AD$subexpression$1$subexpression$3$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "decimal"]},
    {"name": "AD$subexpression$1$subexpression$3$ebnf$1", "symbols": ["AD$subexpression$1$subexpression$3$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AD$subexpression$1$subexpression$3$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AD$subexpression$1$subexpression$3", "symbols": [{"literal":"O"}, {"literal":","}, "decimal", {"literal":"X"}, "decimal", "AD$subexpression$1$subexpression$3$ebnf$1"]},
    {"name": "AD$subexpression$1", "symbols": ["AD$subexpression$1$subexpression$3"]},
    {"name": "AD$subexpression$1$subexpression$4$ebnf$1$subexpression$1$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "decimal"]},
    {"name": "AD$subexpression$1$subexpression$4$ebnf$1$subexpression$1$ebnf$1", "symbols": ["AD$subexpression$1$subexpression$4$ebnf$1$subexpression$1$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AD$subexpression$1$subexpression$4$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AD$subexpression$1$subexpression$4$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "decimal", "AD$subexpression$1$subexpression$4$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "AD$subexpression$1$subexpression$4$ebnf$1", "symbols": ["AD$subexpression$1$subexpression$4$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "AD$subexpression$1$subexpression$4$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "AD$subexpression$1$subexpression$4", "symbols": [{"literal":"P"}, {"literal":","}, "decimal", {"literal":"X"}, "decimal", "AD$subexpression$1$subexpression$4$ebnf$1"]},
    {"name": "AD$subexpression$1", "symbols": ["AD$subexpression$1$subexpression$4"]},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$1", "symbols": []},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$1", "symbols": ["AD$subexpression$1$subexpression$5$ebnf$1", /[._a-zA-Z0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1$ebnf$1", "symbols": []},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "decimal"]},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1$ebnf$1", "symbols": ["AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1$ebnf$1", "AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1", "symbols": [{"literal":","}, "decimal", "AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$2", "symbols": ["AD$subexpression$1$subexpression$5$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "AD$subexpression$1$subexpression$5$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "AD$subexpression$1$subexpression$5", "symbols": [/[^CROP0-9]/, "AD$subexpression$1$subexpression$5$ebnf$1", "AD$subexpression$1$subexpression$5$ebnf$2"]},
    {"name": "AD$subexpression$1", "symbols": ["AD$subexpression$1$subexpression$5"]},
    {"name": "AD$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "AD", "symbols": [{"literal":"%"}, "AD$string$1", "aperture_identifier", "AD$subexpression$1", "AD$string$2"], "postprocess": 
        ([,command_code, aperture_identifier, [[ty,...dargs]]]) => {
          const type = ty === "C" ? "circle" : ty === "R" ? "rectangle" : ty === "O" ? "obround" : ty === "P" ? "polygon" : "named"
          let params = null
          switch(type) {
            case "circle": 
              params = {
                diameter: dargs[1],
                hole_diameter: dargs[2]?.[1]
              }
              break
            case "rectangle":
            case "obround": 
              params = {
                width: dargs[1],
                height: dargs[3],
                hole_diameter: dargs[4]?.[1]
              }
              break
            case "polygon": 
              params = {
                outer_diameter: dargs[1],
                num_vertices: dargs[3],
                rotation: dargs[4]?.[1],
                hole_diameter: dargs[4]?.[2]?.[1]
              }
              break
            case "named": {
              params = {
                name: ty + dargs[0].join(""),
                args: dargs[1]
                  .flatMap(a => a)
                  .filter(a => a!=="," && a!=="X")
                  .map(a => parseFloat(a))
              }
              break
            }
          }
        
          return {
            command_code,
            aperture_identifier,
            type,
            ...params
          }
        } },
    {"name": "D01$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "integer"]},
    {"name": "D01$ebnf$1", "symbols": ["D01$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "D01$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "D01$ebnf$2$subexpression$1", "symbols": [{"literal":"Y"}, "integer"]},
    {"name": "D01$ebnf$2", "symbols": ["D01$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "D01$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "D01$ebnf$3$subexpression$1", "symbols": [{"literal":"I"}, "integer", {"literal":"J"}, "integer"]},
    {"name": "D01$ebnf$3", "symbols": ["D01$ebnf$3$subexpression$1"], "postprocess": id},
    {"name": "D01$ebnf$3", "symbols": [], "postprocess": () => null},
    {"name": "D01$string$1", "symbols": [{"literal":"D"}, {"literal":"0"}, {"literal":"1"}], "postprocess": (d) => d.join('')},
    {"name": "D01", "symbols": ["D01$ebnf$1", "D01$ebnf$2", "D01$ebnf$3", "D01$string$1", {"literal":"*"}], "postprocess": 
        ([xd, yd, offset]) => ({ command_code: "D01", x: xd?.[1], y: yd?.[1], i: offset?.[1], j: offset?.[3] }) },
    {"name": "D02$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "integer"]},
    {"name": "D02$ebnf$1", "symbols": ["D02$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "D02$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "D02$ebnf$2$subexpression$1", "symbols": [{"literal":"Y"}, "integer"]},
    {"name": "D02$ebnf$2", "symbols": ["D02$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "D02$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "D02$string$1", "symbols": [{"literal":"D"}, {"literal":"0"}, {"literal":"2"}], "postprocess": (d) => d.join('')},
    {"name": "D02", "symbols": ["D02$ebnf$1", "D02$ebnf$2", "D02$string$1", {"literal":"*"}], "postprocess": 
        ([xt, yt]) => ({ command_code: "D02", x: xt?.[1], y: yt?.[1] }) },
    {"name": "D03$ebnf$1$subexpression$1", "symbols": [{"literal":"X"}, "integer"]},
    {"name": "D03$ebnf$1", "symbols": ["D03$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "D03$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "D03$ebnf$2$subexpression$1", "symbols": [{"literal":"Y"}, "integer"]},
    {"name": "D03$ebnf$2", "symbols": ["D03$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "D03$ebnf$2", "symbols": [], "postprocess": () => null},
    {"name": "D03$string$1", "symbols": [{"literal":"D"}, {"literal":"0"}, {"literal":"3"}], "postprocess": (d) => d.join('')},
    {"name": "D03", "symbols": ["D03$ebnf$1", "D03$ebnf$2", "D03$string$1", {"literal":"*"}], "postprocess": ([xt, yt]) => ({ command_code: "D03", x: xt?.[1], y: yt?.[1] })},
    {"name": "TA$string$1", "symbols": [{"literal":"T"}, {"literal":"A"}], "postprocess": (d) => d.join('')},
    {"name": "TA$ebnf$1", "symbols": []},
    {"name": "TA$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "field"]},
    {"name": "TA$ebnf$1", "symbols": ["TA$ebnf$1", "TA$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "TA$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "TA", "symbols": [{"literal":"%"}, "TA$string$1", "aperture_attribute_name", "TA$ebnf$1", "TA$string$2"]},
    {"name": "TO$string$1", "symbols": [{"literal":"T"}, {"literal":"O"}], "postprocess": (d) => d.join('')},
    {"name": "TO$ebnf$1", "symbols": []},
    {"name": "TO$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "field"]},
    {"name": "TO$ebnf$1", "symbols": ["TO$ebnf$1", "TO$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "TO$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "TO", "symbols": [{"literal":"%"}, "TO$string$1", "object_attribute_name", "TO$ebnf$1", "TO$string$2"]},
    {"name": "TD$string$1", "symbols": [{"literal":"T"}, {"literal":"D"}], "postprocess": (d) => d.join('')},
    {"name": "TD$ebnf$1$subexpression$1", "symbols": ["file_attribute_name"]},
    {"name": "TD$ebnf$1$subexpression$1", "symbols": ["aperture_attribute_name"]},
    {"name": "TD$ebnf$1$subexpression$1", "symbols": ["object_attribute_name"]},
    {"name": "TD$ebnf$1$subexpression$1", "symbols": ["user_name"]},
    {"name": "TD$ebnf$1", "symbols": ["TD$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "TD$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "TD$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "TD", "symbols": [{"literal":"%"}, "TD$string$1", "TD$ebnf$1", "TD$string$2"]},
    {"name": "aperture_attribute_name$string$1", "symbols": [{"literal":"."}, {"literal":"A"}, {"literal":"p"}, {"literal":"e"}, {"literal":"r"}, {"literal":"F"}, {"literal":"u"}, {"literal":"n"}, {"literal":"c"}, {"literal":"t"}, {"literal":"i"}, {"literal":"o"}, {"literal":"n"}], "postprocess": (d) => d.join('')},
    {"name": "aperture_attribute_name", "symbols": ["aperture_attribute_name$string$1"]},
    {"name": "aperture_attribute_name$string$2", "symbols": [{"literal":"."}, {"literal":"D"}, {"literal":"r"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":"T"}, {"literal":"o"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": (d) => d.join('')},
    {"name": "aperture_attribute_name", "symbols": ["aperture_attribute_name$string$2"]},
    {"name": "aperture_attribute_name$string$3", "symbols": [{"literal":"."}, {"literal":"F"}, {"literal":"l"}, {"literal":"a"}, {"literal":"s"}, {"literal":"h"}, {"literal":"T"}, {"literal":"e"}, {"literal":"x"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "aperture_attribute_name", "symbols": ["aperture_attribute_name$string$3"]},
    {"name": "aperture_attribute_name", "symbols": ["user_name"]},
    {"name": "object_attribute_name$string$1", "symbols": [{"literal":"."}, {"literal":"N"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$1"]},
    {"name": "object_attribute_name$string$2", "symbols": [{"literal":"."}, {"literal":"P"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$2"]},
    {"name": "object_attribute_name$string$3", "symbols": [{"literal":"."}, {"literal":"C"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$3"]},
    {"name": "object_attribute_name$string$4", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"R"}, {"literal":"o"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$4"]},
    {"name": "object_attribute_name$string$5", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"M"}, {"literal":"f"}, {"literal":"r"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$5"]},
    {"name": "object_attribute_name$string$6", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"M"}, {"literal":"P"}, {"literal":"N"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$6"]},
    {"name": "object_attribute_name$string$7", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"V"}, {"literal":"a"}, {"literal":"l"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$7"]},
    {"name": "object_attribute_name$string$8", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"M"}, {"literal":"n"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$8"]},
    {"name": "object_attribute_name$string$9", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"F"}, {"literal":"t"}, {"literal":"p"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$9"]},
    {"name": "object_attribute_name$string$10", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"P"}, {"literal":"g"}, {"literal":"N"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$10"]},
    {"name": "object_attribute_name$string$11", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"P"}, {"literal":"g"}, {"literal":"D"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$11"]},
    {"name": "object_attribute_name$string$12", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"H"}, {"literal":"g"}, {"literal":"t"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$12"]},
    {"name": "object_attribute_name$string$13", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"L"}, {"literal":"b"}, {"literal":"N"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$13"]},
    {"name": "object_attribute_name$string$14", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"L"}, {"literal":"b"}, {"literal":"D"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$14"]},
    {"name": "object_attribute_name$string$15", "symbols": [{"literal":"."}, {"literal":"C"}, {"literal":"S"}, {"literal":"u"}, {"literal":"p"}], "postprocess": (d) => d.join('')},
    {"name": "object_attribute_name", "symbols": ["object_attribute_name$string$15"]},
    {"name": "object_attribute_name", "symbols": ["user_name"]},
    {"name": "AM$string$1", "symbols": [{"literal":"A"}, {"literal":"M"}], "postprocess": (d) => d.join('')},
    {"name": "AM", "symbols": [{"literal":"%"}, "AM$string$1", "name", {"literal":"*"}, "macro_body", {"literal":"%"}], "postprocess":  
        ([,command_code, name,, macro_body]) => ({ command_code, name, macro_body })
        },
    {"name": "macro_body$ebnf$1$subexpression$1", "symbols": ["primitive"]},
    {"name": "macro_body$ebnf$1$subexpression$1", "symbols": ["variable_definition"]},
    {"name": "macro_body$ebnf$1", "symbols": ["macro_body$ebnf$1$subexpression$1"]},
    {"name": "macro_body$ebnf$1$subexpression$2", "symbols": ["primitive"]},
    {"name": "macro_body$ebnf$1$subexpression$2", "symbols": ["variable_definition"]},
    {"name": "macro_body$ebnf$1", "symbols": ["macro_body$ebnf$1", "macro_body$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "macro_body", "symbols": ["macro_body$ebnf$1"], "postprocess": 
        ([body]) => body[0]
        },
    {"name": "variable_definition", "symbols": ["macro_variable", {"literal":"="}, "expr", {"literal":"*"}], "postprocess": 
        ([name,, expr]) => ({ name, expr })
        },
    {"name": "primitive", "symbols": [{"literal":"7"}, {"literal":","}, "expr", {"literal":","}, "expr", {"literal":","}, "expr", {"literal":","}, "expr", {"literal":","}, "expr", {"literal":","}, "expr", {"literal":"*"}], "postprocess": 
        (d) => {
          const primitive_map = {
            "0": "comment",
            "1": "circle",
            "20": "vector_line",
            "21": "center_line",
            "4": "outline",
            "5": "polygon",
            "7": "thermal"
          }
          const primitive_params = {
            // See the double commas and leading commas? This is to avoid matching the
            // "," between the exprs!
            comment: [,,"comment"],
            circle: [,,"exposure",, "diameter",, "center_x",, "center_y", "rotation"],
            vector_line: [,,"exposure",, "width",, "start_x",, "start_y",, "end_x",, "end_y",, "rotation"],
            center_line: [,,"exposure",, "width",, "height", "center_x",, "center_y",, "rotation"],
            //              unique b/c comma is included in points regex  ↴
            outline: [,,"exposure",, "num_vertices",, "start_x",, "start_y", "points", "rotation"],
            polygon: [,,"exposure",, "num_vertices",, "center_x",, "center_y",, "diameter",, "rotation"],
            thermal: [,,"center_x",, "center_y",, "outer_diameter",, "inner_diameter",, "gap",, "rotation"]
          }
          const primitive_name = primitive_map[d[0]]
          const params = {}
          const param_def = primitive_params[primitive_name]
          for (let i = 0; i < d.length;i++){
            const param_name = param_def[i]
            const param_value = d[i]
            if (!param_name) continue
            if (param_name === "points") {
              throw new Error("TODO add points support")
            } else if (param_name === "rotation" && primitive_name === "circle") {
              params[param_name] = parseFloat(param_value[1])
            }else {
              params[param_name] = parseFloat(param_value)
            }
          }
        
          return {
            primitive_name,
            ...params
          }
        
        }
        },
    {"name": "macro_variable$ebnf$1", "symbols": []},
    {"name": "macro_variable$ebnf$1", "symbols": ["macro_variable$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "macro_variable$ebnf$2", "symbols": []},
    {"name": "macro_variable$ebnf$2", "symbols": ["macro_variable$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "macro_variable", "symbols": [{"literal":"$"}, "macro_variable$ebnf$1", /[1-9]/, "macro_variable$ebnf$2"], "postprocess": 
        (d) => d.slice(1).join("")
        },
    {"name": "expr$ebnf$1$subexpression$1", "symbols": [/[+\-]/]},
    {"name": "expr$ebnf$1$subexpression$1", "symbols": ["term"]},
    {"name": "expr$ebnf$1", "symbols": ["expr$ebnf$1$subexpression$1"]},
    {"name": "expr$ebnf$1$subexpression$2", "symbols": [/[+\-]/]},
    {"name": "expr$ebnf$1$subexpression$2", "symbols": ["term"]},
    {"name": "expr$ebnf$1", "symbols": ["expr$ebnf$1", "expr$ebnf$1$subexpression$2"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "expr", "symbols": ["expr$ebnf$1", "expr", /[+\-]/, "term"]},
    {"name": "expr", "symbols": ["term"]},
    {"name": "term", "symbols": ["term", /[x\/]/, "factor"]},
    {"name": "term", "symbols": ["factor"]},
    {"name": "factor", "symbols": [{"literal":"("}, "expr", {"literal":")"}]},
    {"name": "factor", "symbols": ["macro_variable"]},
    {"name": "factor", "symbols": ["unsigned_decimal"]},
    {"name": "AB_statement", "symbols": ["AB_open", "block", "AB_close"], "postprocess": 
        d => d
        },
    {"name": "AB_open$string$1", "symbols": [{"literal":"A"}, {"literal":"B"}], "postprocess": (d) => d.join('')},
    {"name": "AB_open$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "AB_open", "symbols": [{"literal":"%"}, "AB_open$string$1", "aperture_identifier", "AB_open$string$2"], "postprocess": 
        d => d
        },
    {"name": "AB_close$string$1", "symbols": [{"literal":"A"}, {"literal":"B"}], "postprocess": (d) => d.join('')},
    {"name": "AB_close$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "AB_close", "symbols": [{"literal":"%"}, "AB_close$string$1", "AB_close$string$2"], "postprocess": 
        d => d
        },
    {"name": "SR_statement", "symbols": ["SR_open", "block", "SR_close"], "postprocess": 
        d => d
        },
    {"name": "SR_open$string$1", "symbols": [{"literal":"S"}, {"literal":"R"}], "postprocess": (d) => d.join('')},
    {"name": "SR_open$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "SR_open", "symbols": [{"literal":"%"}, "SR_open$string$1", {"literal":"X"}, "positive_integer", {"literal":"Y"}, "positive_integer", {"literal":"I"}, "decimal", {"literal":"J"}, "decimal", "SR_open$string$2"], "postprocess": 
        d => d
        },
    {"name": "SR_close$string$1", "symbols": [{"literal":"S"}, {"literal":"R"}], "postprocess": (d) => d.join('')},
    {"name": "SR_close$string$2", "symbols": [{"literal":"*"}, {"literal":"%"}], "postprocess": (d) => d.join('')},
    {"name": "SR_close", "symbols": [{"literal":"%"}, "SR_close$string$1", "SR_close$string$2"], "postprocess": 
        d => d
        },
    {"name": "block$ebnf$1", "symbols": []},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["G04"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["AD"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["AM"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["Dnn"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["D01"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["D02"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["D03"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["G01"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["G02"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["G03"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["G75"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["LP"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["LM"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["LR"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["LS"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["region_statement"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["AB_statement"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["TF"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["TA"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["TO"]},
    {"name": "block$ebnf$1$subexpression$1", "symbols": ["TD"]},
    {"name": "block$ebnf$1", "symbols": ["block$ebnf$1", "block$ebnf$1$subexpression$1"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "block", "symbols": ["block$ebnf$1"], "postprocess": ([d]) => d},
    {"name": "Dnn", "symbols": ["aperture_identifier", {"literal":"*"}], "postprocess": ([aperture_identifier]) => ({ command_code: "Dnn", aperture_identifier })},
    {"name": "aperture_identifier$ebnf$1", "symbols": [/[0]/], "postprocess": id},
    {"name": "aperture_identifier$ebnf$1", "symbols": [], "postprocess": () => null},
    {"name": "aperture_identifier$ebnf$2", "symbols": []},
    {"name": "aperture_identifier$ebnf$2", "symbols": ["aperture_identifier$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "aperture_identifier", "symbols": [{"literal":"D"}, "aperture_identifier$ebnf$1", /[1-9]/, "aperture_identifier$ebnf$2"], "postprocess": (d) => d.flatMap(a => a).filter(k => k!== null).join("")},
    {"name": "name$ebnf$1", "symbols": []},
    {"name": "name$ebnf$1", "symbols": ["name$ebnf$1", /[._a-zA-Z0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "name", "symbols": [/[._a-zA-Z$]/, "name$ebnf$1"], "postprocess": (d) => d.flatMap(a => a).filter(k => k!== null).join("")},
    {"name": "integer", "symbols": ["int"], "postprocess": ([d]) => d},
    {"name": "string$ebnf$1", "symbols": []},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", /[^%*]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "string", "symbols": ["string$ebnf$1"], "postprocess": (d) => d.flatMap(a => a).filter(k => k!== null).join("")},
    {"name": "positive_integer$ebnf$1", "symbols": []},
    {"name": "positive_integer$ebnf$1", "symbols": ["positive_integer$ebnf$1", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "positive_integer$ebnf$2", "symbols": []},
    {"name": "positive_integer$ebnf$2", "symbols": ["positive_integer$ebnf$2", /[0-9]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "positive_integer", "symbols": ["positive_integer$ebnf$1", /[1-9]/, "positive_integer$ebnf$2"], "postprocess": (d) => parseInt(d.flatMap(a => a).filter(k => k!== null).join(""))}
  ],
  ParserStart: "start",
};

export default grammar;
