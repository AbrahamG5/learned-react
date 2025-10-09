const myArray:number[] = [1, 2, 3, 4, 5, 6, 7]
myArray.push(8)

const array2 = structuredClone(myArray) //[... myArray]
array2.push(10)
console.log({myArray, array2});
