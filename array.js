// 1.Write a code snippet to find the length of an array.

var arr=["1","2","6","3","4","5","9"];
console.log(arr.length)


// 2.How do you add an element to the end of an array?

var fruits=["apple","banana","grapes","guava"];
fruits.push("mango","custard apple")
console.log(fruits)


// 3.How do you remove the last element from an array?

fruits.pop();
console.log(fruits)


// 4.How do you add an element to the beginning of an array?

fruits.unshift("green apple","watermelon");
console.log(fruits)


// 5.How can you remove the first element from an array?

fruits.shift();
console.log(fruits)


// 6.How do you reverse the elements in an array?

var rev_str=fruits.reverse();
console.log(fruits)


// 7.How can you find the index of a specific value in an array?

var index=fruits.indexOf('mango')
console.log(index)


// 8.How can you check if a certain value exists in an array?

var exist=fruits.includes('banana')
console.log(exist)


// 9.How can you sort the elements of an array in ascending order?

var arr = [5, 2, 9, 1, 7];
arr.sort((a, b) => a - b);
console.log(arr);  


// 10.How can you convert an array to a string using commas as separators?

var arr=["apple","banana","cherry"]
var conversion=arr.toString();
console.log(conversion);


// Questions with Multiple Array Methods:

// 1.Write a code snippet that adds an element to the end of an array, then removes the first element.

var a=['apple','banana','cherry'];
a.push('mango');
console.log(a);
a.shift();
console.log(a);


// 2.How can you reverse an array and then join the elements into a string?

a.reverse();
var join=a.join();
console.log(join);


// 3.Write a code that first sorts an array in ascending order, then removes the last element.

var a1=[5,3,2,0,7,9];
a1.sort((a,b)=>a-b);
console.log(a1);
a1.pop();
console.log(a1);


// 4.How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?

a1.unshift(6,8);
console.log(a1);
a1.shift();
console.log(a1);
var length=a1.length
console.log(length);


// 5.How do you combine two arrays, sort the combined array, and then remove the last element?

var a=[3,6,1];
var b=[8,2,5];
var concat=a.concat(b);
console.log(concat);
concat.sort((a,b)=>a-b);
console.log(concat);
concat.pop();
console.log(concat);

