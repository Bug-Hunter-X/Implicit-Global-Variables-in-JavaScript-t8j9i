function foo(a, b) {
  let x = a + b; 
  return x;
}

function bar() {
  let x = 10;
  let y = 20;
  let z = foo(x, y);
  console.log(z); // Output: 30

  z = foo(x, y);
  console.log(x); // Output: 10
  console.log(z); // Output: 30
}

bar();