let fruits=["apple","watermelon","grapes"]
console.log("Og array");
console.log(fruits);

fruits.push("kiwi");
console.log("Array after push op:");
console.log(fruits);

fruits.pop();
console.log("array after pop op");
console.log(fruits);

console.log("Accesing the 1st & last ement:");
console.log(fruits[0]);
let size=fruits.length;
console.log(fruits[size -1]);


console.log("array after unshift op:");
fruits.unshift("cherry");
console.log(fruits);

console.log("array after shift op:");
fruits.shift();
console.log(fruits);


console.log("array after splice op:");
let removedElement=fruits.splice(1,1);
console.log(fruits);

fruits.push("Orange");
fruits.push("Mango");
fruits.push("apple");

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}



console.log(fruits);
let newArray=[...fruits, "A","B"];
console.log(newArray);