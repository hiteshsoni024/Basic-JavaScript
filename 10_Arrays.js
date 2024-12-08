const Array =[0,12,42,54];
//ek array me hm alg alg type ke variables store kr sakte h 
//javascript ke variables resizable hote h
//javascript me array ko declare krne ke liye [] brackets ka use karte h

console.log(Array[2]);
//javascript me array index 0 se shuru hota h

const myheros =["hulk","ironman","thor"];
console.log(myheros[2]);

//array methods
Array.push(34);//pushes an element in end
Array.push(13);
Array.pop(0);//pops an element from end
Array.unshift(9);//shift entire array by one position to the lefta and add element at the beginning
Array.shift();//pops an element from the beginning of the array
console.log(Array);
console.log(Array.includes(9));
console.log(Array.indexOf(42));
console.log(Array.indexOf(1));
//indexOf() returns the first occurrence of the specified value. If the value is not found, it returns -1.
//includes() returns true if the value is found in the array, otherwise it returns false.
const newArray = Array.join();
//join() method returns a string concatenated with the elements of an array.
console.log(newArray);
console.log(typeof newArray);

console.log("a",Array);
const myn1 = Array.slice(1,3);//slice () returns the elements of an array from the start index to the end index.it does not contain limiting element

console.log(myn1);
console.log("b",Array);

const myn2 = Array.splice(1,4);//splice includes the range and also removes the elements from the array
console.log(myn2);
console.log("c",Array);