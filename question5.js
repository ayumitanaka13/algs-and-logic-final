/*
write a function that loops through an array of numbers, and arrays, and adds all of the numbers
ex. [2, 3, 5, [1, 2], [3]] ---> 16
*/

const sumNestedArray = function (arr) {
    // declare the sum is equal to 0
    let sum = 0;

    // iterate elements in the array
    for (let i = 0; i < arr.length; i++) {
        // add element to sum when arr[i] is number
        if (typeof arr[i] === 'number') {
            sum += arr[i];
        // add the result of sumNestedArray(arr[i]) to sum when arr[i] is array(not a number)
        } else if (arr[i] instanceof Array) {
            sum += sumNestedArray(arr[i]);
        }
    }
    // return sum
    return sum;
}

console.log((sumNestedArray([1, [2, 3, 4], 6, 7, 5]) === 28) ? "Test 1: Passing" : "Test 1: Failing");

console.log((sumNestedArray([1, [2, 3, 4], [2], 7, [3, 5, 6]]) === 33) ? "Test 2: Passing" : "Test 2: Failing");