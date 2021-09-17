// Here we are using a built in module called readline
// With this we can use a method avaiable on the readline object that
// will allow us to set up a stream to capture user input.

// Run this file and consider the following code.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput;

rl.question("What do you think of node.js? ", function (answer) {
  console.log("Thank you for your valuable feedback: ", answer);

  rl.close();
});

//  This is the basic understanding of a CLI and to open the door to how they work.
//  Moving forward, explore how you could ask multiple questions, or conditionally
//  execute a funtion based on a given response.
