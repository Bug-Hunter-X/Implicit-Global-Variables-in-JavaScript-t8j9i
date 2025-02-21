# Implicit Global Variables in JavaScript

This repository demonstrates a subtle bug in JavaScript related to implicit global variables.  When a variable is modified within a function without being declared using `let` or `const`, it implicitly becomes a global variable.  This can lead to unexpected behavior and hard-to-debug issues, especially in larger codebases.

## The Bug

The `bug.js` file contains a function `foo` that unintentionally modifies a global variable `x`. This behavior is unexpected if you assumed `x` was only within the scope of `bar`.

## The Solution

The `bugSolution.js` file demonstrates the corrected code. The variable `x` is properly declared using `let` within the `foo` function to prevent this unintended global modification.

## How to Reproduce

1. Clone this repository.
2. Run `bug.js` and observe the unexpected output. (The global x gets modified)
3. Run `bugSolution.js` and observe the correct output.

This example highlights the importance of explicitly declaring variables with `let` or `const` to avoid implicit global variables and maintain code clarity and predictability.