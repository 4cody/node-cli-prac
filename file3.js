const log = console.log;

// We can add items to that array by supplying text when we call the file to be ran
// Add additional words after the file name when you run this file
//  eg  'node file3 Hello World'

log(process.argv);

log(
  "Notice that words separated by spaces are added in the array.  We can retrieve those elements individually just like any other array."
);

log("\n");
log(process.argv[2]);
log(process.argv[3]);

log("Try it again using additional words.");

// Proceed to file4
