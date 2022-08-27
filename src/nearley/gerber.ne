@preprocessor typescript

start -> (
    G04
  | G01
  | MO
  | FS
  | TF
  | D01
):* M02 {% d => [...d[0].flatMap(v => v), d[1]] %}

str -> [^*]:+ {% ([d]) => d.join("") %}

G04 -> "G04" str "*" {% ([command_code, comment]) => ({ command_code, comment }) %}
M02 -> "M02" "*" {% ([command_code]) => ({ command_code }) %}

MO -> "%" "MO" ("MM"|"IN") "*%" {% ([,command_code, [unit]]) => ({ command_code, unit }) %}

FS -> "%" "FS" "LA" "X" [1-6] [56] "Y" [1-6] [56] "*%" {%
([,command_code, m, , xid, xfd, , yid, yfd]) =>
  ({
      command_code,
      x_integer_digits: parseInt(xid), x_fractional_digits: parseInt(yid),
      y_integer_digits: parseInt(yid), y_fractional_digits: parseInt(yfd) })
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

D01 -> ["X" integer] ["Y" integer] ["I" integer "J" integer] "D01*" {%
([x, y, i, j]) => ({ x, y, i, j }) %}

integer -> [0-9]:+ {% d => parseInt(d[0].join("")) %}