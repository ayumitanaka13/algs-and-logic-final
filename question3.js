/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/



const kebabCase = function(str) {
    // return 'This is an empty string!' when str parameter doesn't have any char
    if (!str) {
        return 'This is an empty string!';
    } else {
        // convert all char to lowercase and split the string at all space characters
        return str.toLowerCase().split(' ')
        // creates a new array and get rid of any extra spaces using trim
        .map(a => a.trim())
        // convert the first char to upper case for each word and returns index 1 to the end of the char
        .map(a => a[0].toUpperCase() + a.substring(1))
        // Join all the strings back together with -
        .join("-")
    }
}

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

