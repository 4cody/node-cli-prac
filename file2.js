//  We are going to focus on the argv property of the process object to create a basic CLI program
//  Run this file and take notice of what's logged in the console.

console.log('=====================================================')
console.log(process.argv)
console.log('\n The value of the argv object is an array with 2 elements in it. \n')

console.log(process.argv[0])
console.log('\n and \n')
console.log(process.argv[1])
console.log('\n')

console.log('The first two elements of the argv array will always be the node executable and the file that is being executed respectively.')

// Proceed to file3