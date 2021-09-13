// We can add items to that array by supplying text when we call the file to be ran 
// Add additional words after the file name when you run this file
//  eg  'node file3 Hello World'

console.log(process.argv)

console.log('Notice that words separated by spaces are added in the array.  We can retrieve those elements individually just like any other array.')

console.log('\n')
console.log(process.argv[2])
console.log(process.argv[3])

console.log('Try it again using additional words.')


// Proceed to file4