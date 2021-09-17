const inquirer = require("inquirer"); // https://www.npmjs.com/package/inquirer

inquirer //  inquirer allows us to easily prompt the user with multiple questions, since the pattern is just an array of objects, it's simple to add to the questionere
  .prompt([
    {
      name: "userName",
      message: "What is your name?",
    },
    {
      name: "favColor",
      message: "What is your favorite color?",
      default: "#008f68",
    },
    {
      type: "list", // inquirer has a variety of different lists we can choose to use
      name: "userChoice",
      message: "Which is better?",
      choices: ["llamas", "pizza"],
    },
    {
      type: "checkbox",
      name: "reptiles",
      message: "Which reptiles do you love?",
      choices: ["Alligators", "Snakes", "Turtles", "Lizards"],
    },
  ])
  .then((answers) => {
    //  We can retrieve the answers through the promis returned by the prompt method
    console.info("Answers:", answers);
  });
