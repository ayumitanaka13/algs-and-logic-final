// write a function that loops through an array of strings and numbers. 
// for every string, it should add an s to the end of the word 
// (for example, if the given word was apple, it would become apples)
// for every number, it should add 20 to the number. 
// return the changed array. 

let arr1 = [56, 'dog', 'apple', 'cheese', 45, 71];
let arr2 = [56, 45, 71, 90, 28, 67];
let arr3 = ['dog', 'apple', 'cheese']; 

const addSAnd20 = function (arr) {
    // declare new array that stores new elements
    let newArr = [];

    // iterate elements and change its value depend on its type(string or number)
    for (let i = 0; i < arr.length; i++) {
        // add 's' when the element is string, and push it in new array
        if (typeof arr[i] === 'string') {
            newArr.push(arr[i] + 's');
        // otherwise, add 20 when the element is number, and push it in new array
        } else {
            newArr.push(arr[i] + 20);
        }  
    }
    // return new array
    return newArr;
}

console.log(addSAnd20(arr1));
console.log(addSAnd20(arr2));
console.log(addSAnd20(arr3));

// console.log((addSAnd20([56, 'dog', 'apple', 'cheese', 45, 71]) === [76, 'dogs', 'apples', 'cheeses', 65, 91]) ? "Test 1: Passing" : "Test 1: Failing");

// console.log((addSAnd20([56, 45, 71, 90, 28, 67]) === [76, 65, 91, 110, 48, 87]) ? "Test 2: Passing" : "Test 2: Failing");

// console.log((addSAnd20(['dog', 'apple', 'cheese']) === ['dogs', 'apples', 'cheeses']) ? "Test 3: Passing" : "Test 3: Failing");