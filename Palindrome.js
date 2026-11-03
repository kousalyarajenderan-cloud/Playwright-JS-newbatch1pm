let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}

//without using reverse string program
let str1 = "Hello";
let rev = "";

for (let i = str1.length - 1; i >= 0; i--) {
    rev = rev + str1[i];
}

console.log("Original String:", str1);
console.log("Reversed String:", rev);