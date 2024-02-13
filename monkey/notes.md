## Parser
A parser is a software component that takes input data (frequently text) and builds
a data structure(tree) and checks for correct syntax in the process.

Parsing is also called syntactic analysis.

Context free grammer -> CFG

### Prsing Strategies
- top-down parsing(starts by contructing the root node then descends)
    - Recursive descent parsing
    - Early parsing
    - Predictive parsing
- bottom-up parsing(start by contructing leaf nodes then ascends)

### Top Down Operator Precedence(or: PRATT Parsing)

### Parsing Terminology
- Prefix Operator: is an operator "in front of" its operand. Example `--5`
    The oprator is -- (decrement) and the operand is 5

- Postfix Operator: an operator after its operand. Example: `foobar++`
- Infix Operatro: an operator sits between its operands. `5 * 8`


## Strategies of Evaluation
Giving meaning to symbols.

- Tree-Walking Interpreters
  Traverse the AST, visit each node and do what the node signifies.
  Sometimes Evaluation is preceded by a small optimization that rewrites the AST or convert it to another immediate representation that is more suitable for repeated evaluation.

- Sometimes the AST is converted to bytecode and is run by a virtual machine


