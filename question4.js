/*
Write a function that takes in an array of strings, and converts them all 
into snake case 
(ex. (['Dogs are cute', 'Cats aRe also cute']) ---> ['dogs_are_cute', 'cats_are_also_cute']) notice the 
lowercase letters, and underscores connecting the words. 
return the entire array with the converted strings
*/
const snakeCaseArr = function (arr) {
    // declare new array that stores new elements
    let newArr = [];

    // iterate char in the array
    for (let i = 0; i < arr.length; i++) {
        // convert all char to lowercase and split the string at all space characters, then push it in new array
        newArr.push(arr[i].toLowerCase().split(' ')
        // creates a new array and get rid of any extra spaces using trim
        .map(a => a.trim())
        // returns the start to the end of the char
        .map(a => a.substring())
        // Join all the strings back together with _
        .join("_"))
    }
    // return new array    
    return newArr;
}
console.log(snakeCaseArr(['Coding Is Fun']));
console.log(snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']));
console.log(snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']));

// console.log((snakeCaseArr(['Coding Is Fun']) === ['coding_is_fun']) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((snakeCaseArr(['Coding Is Fun', 'Dogs ARE cool']) === ['coding_is_fun', 'dogs_are_cool']) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((snakeCaseArr(['cats are CUTE', 'Dogs ARE cool']) === ['cats_are_cute', 'dogs_are_cool']) ? "Test 3: Passing" : "Test 3: Failing");