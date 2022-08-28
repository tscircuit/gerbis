# Use this to generate a grammar that can be used to parse Gerber layer files.
# 
# Note: You will need to replace all the newlines in the input with "", nearley
# doesn't support removing whitespace and using a lexer makes the
# nearley not resemble the ebnf grammar given by Gerber as closely.
# IF YOU FEED THIS INTO "nearley-test" YOU MUST REMOVE NEWLINES

@preprocessor typescript
@builtin "number.ne"

@{%
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
%}

# @lexer lexer

start -> cmd:* M02 {% d => [...d[0].flatMap(v => v), d[1]] %}

cmd -> G04
  | MO
  | FS
  | AD
  | AM
  | Dnn        
  | D01
  | D02
  | D03
  | G01
  | G02
  | G03
  | G75
  | LP
  | LM
  | LR
  | LS
  | region_statement
  | AB_statement
  | SR_statement
  | TF         
  | TA
  | TO
  | TD
{% d => d[0] %}

str -> [^*]:+ {% ([d]) => d.join("") %}

G04 -> "G04" str "*" {% ([command_code, comment]) => ({ command_code, comment }) %}
M02 -> "M02" "*" {% ([command_code]) => ({ command_code }) %}

MO -> "%" "MO" ("MM"|"IN") "*%" {% ([,command_code, [unit]]) => ({ command_code, unit }) %}

FS -> "%" "FS" "LA" "X" [1-6] [56] "Y" [1-6] [56] "*%" {%
([,command_code, m, , xid, xfd, , yid, yfd]) => {
  return ({
      command_code,
      x_integer_digits: parseInt(xid), x_fractional_digits: parseInt(yid),
      y_integer_digits: parseInt(yid), y_fractional_digits: parseInt(yfd) })
}
%}

user_name ->  [_a-zA-Z$] [._a-zA-Z0-9]:* {% ([f, rest]) => f + rest.join("") %}

file_attribute_name ->
      ".Part"
    | ".FileFunction"
    | ".FilePolarity"
    | ".SameCoordinates"
    | ".CreationDate"
    | ".GenerationSoftware"
    | ".ProjectId"
    | ".MD5"
    | user_name

field -> [^%*,]:* {% ([d]) => d.join("") %}

TF -> "%" "TF" file_attribute_name ("," field):* "*%"
{% ([,command_code, [name], values]) => ({ command_code, name, values: values.map(v => v[1]) }) %}

G01 -> "G01" "*" {% ([command_code]) => ({ command_code }) %}
G02 -> "G02" "*" {% ([command_code]) => ({ command_code }) %}
G03 -> "G03" "*" {% ([command_code]) => ({ command_code }) %}
G75 -> "G75" "*" {% ([command_code]) => ({ command_code }) %}

LP -> "%" "LP" ("C"|"D") "*%" {% ([,command_code, [setting]]) => ({ command_code, setting: setting === "C" ? "clear" : "dark"}) %}
LM -> "%" "LM" ("N"|"XY"|"Y"|"X") "*%"
LR -> "%" "LR" decimal "*%"
LS -> "%" "LS" decimal "*%"

region_statement -> G36 (contour):+ G37
contour -> D02 (D01|G01|G02|G03):*
G36 -> "G36*"
G37 -> "G37*"

AD -> "%" "AD" aperture_identifier (
        ("C" "," decimal ("X" decimal):?)
      | ("R" "," decimal "X" decimal ("X" decimal):?)
      | ("O" "," decimal "X" decimal ("X" decimal):?)
      | ("P" "," decimal "X" decimal ("X" decimal ("X" decimal):?):?)
      | ([^CROP0-9] [._a-zA-Z0-9]:* ("," decimal ("X" decimal):*):?)
  ) "*%" {%
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
  } %}

D01 -> ("X" integer):? ("Y" integer):? ("I" integer "J" integer):? "D01" "*" {%
([xd, yd, offset]) => ({ command_code: "D01", x: xd?.[1], y: yd?.[1], i: offset?.[1], j: offset?.[3] }) %}

D02 -> ("X" integer):? ("Y" integer):? "D02" "*" {%
([xt, yt]) => ({ command_code: "D02", x: xt?.[1], y: yt?.[1] }) %}
D03 -> ("X" integer):? ("Y" integer):? "D03" "*" {% ([xt, yt]) => ({ command_code: "D03", x: xt?.[1], y: yt?.[1] }) %}

TA -> "%" "TA" aperture_attribute_name ("," field):* "*%"
TO -> "%" "TO" object_attribute_name ("," field):* "*%"
TD -> "%" "TD"
    (
        file_attribute_name
        | aperture_attribute_name
        | object_attribute_name
        | user_name
    ):?
    "*%"

aperture_attribute_name ->
      ".AperFunction"
    | ".DrillTolerance"
    | ".FlashText"
    | user_name 
    
object_attribute_name ->
      ".N"
    | ".P"
    | ".C"
    | ".CRot"
    | ".CMfr"
    | ".CMPN"
    | ".CVal"
    | ".CMnt"
    | ".CFtp"
    | ".CPgN"
    | ".CPgD"
    | ".CHgt"
    | ".CLbN"
    | ".CLbD"
    | ".CSup"
    | user_name

AM -> "%" "AM" name "*" macro_body "%" {% 
  ([,command_code, name,, macro_body]) => ({ command_code, name, macro_body })
%}
macro_body -> ( primitive | variable_definition ):+ {%
  ([body]) => body[0]
%}
variable_definition -> macro_variable "=" expr "*" {%
  ([name,, expr]) => ({ name, expr })
%}

primitive ->
    #   "0"  string "*"
    # | "1"  "," expr "," expr "," expr "," expr ("," expr):? "*"
    # | "20" "," expr "," expr "," expr "," expr "," expr "," expr "," expr "*"
    # | "21" "," expr "," expr "," expr "," expr "," expr "," expr "*"
    # | "4"  "," expr "," expr "," expr "," expr ("," expr "," expr):+ "," expr "*"
    # | "5"  "," expr "," expr "," expr "," expr "," expr "," expr "*"
    "7"  "," expr "," expr "," expr "," expr "," expr "," expr "*"
{%
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
%}

  
macro_variable   -> "$" [0-9]:* [1-9] [0-9]:* {%
  (d) => d.slice(1).join("")
%}
expr -> 
      ([+\-] | term):+
    expr [+\-] term
    | term
term -> 
  term [x\/] factor
  | factor 
factor -> 
  "(" expr ")"
  | macro_variable 
  | unsigned_decimal

AB_statement -> AB_open  block  AB_close
{%
  d => d
%}

AB_open  ->     "%" "AB" aperture_identifier "*%"
{%
  d => d
%}

AB_close ->     "%" "AB" "*%"
{%
  d => d
%}

SR_statement -> SR_open  block  SR_close
{%
  d => d
%}

SR_open ->      "%" "SR" "X" positive_integer "Y" positive_integer "I" decimal "J" decimal "*%"
{%
  d => d
%}

SR_close ->     "%" "SR" "*%"
{%
  d => d
%}

block -> (
    G04
  | AD
  | AM
  | Dnn        
  | D01
  | D02
  | D03
  | G01
  | G02
  | G03
  | G75
  | LP
  | LM
  | LR
  | LS
  | region_statement
  | AB_statement
  | TF         
  | TA
  | TO
  | TD
):* {% ([d]) => d %}

Dnn -> aperture_identifier "*" {% ([aperture_identifier]) => ({ command_code: "Dnn", aperture_identifier }) %}

aperture_identifier -> "D" [0]:? [1-9] [0-9]:* {% (d) => d.flatMap(a => a).filter(k => k!== null).join("") %}
name -> [._a-zA-Z$] [._a-zA-Z0-9]:* {% (d) => d.flatMap(a => a).filter(k => k!== null).join("") %}
integer -> int {% ([d]) => d %}
string -> [^%*]:* {% (d) => d.flatMap(a => a).filter(k => k!== null).join("") %} # All characters except * %
positive_integer -> [0-9]:* [1-9] [0-9]:* {% (d) => parseInt(d.flatMap(a => a).filter(k => k!== null).join("")) %}