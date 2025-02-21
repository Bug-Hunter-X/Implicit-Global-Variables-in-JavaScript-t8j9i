function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;
  let z = foo(x, y);
  console.log(z); // Output: 30

  // Uncommon Error: Modifying x inside foo without using the let keyword leads to unexpected behaviour
  function foo(a, b) {
    x = a + b; // Modifies the global x if declared outside
    return a + b;
  }

  z = foo(x, y);
  console.log(x); // Output: 30
  console.log(z); // Output: 30
}

bar();