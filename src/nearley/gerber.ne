@preprocessor typescript
@builtin "string.ne"

start -> (
    G04
  | G01
):* M02 {% d => [...d[0].flatMap(v => v), d[1]] %}

str -> [^*]:+ {% ([d]) => d.join("") %}

G04 -> "G04" str "*" {% ([command_code, comment]) => ({ command_code, comment }) %}
M02 -> "M02*" {% ([command_code]) => ({ command_code }) %}

G01 -> "G01*" {% ([command_code]) => ({ command_code }) %}
G02 -> "G02*" {% ([command_code]) => ({ command_code }) %}
G03 -> "G03*" {% ([command_code]) => ({ command_code }) %}
G75 -> "G75*" {% ([command_code]) => ({ command_code }) %}

number -> [0-9]:+ {% d => parseInt(d[0].join("")) %}