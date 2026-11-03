let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}

//using a loop:
let str2 = "madam";
let i = 0;
let j = str2.length - 1;
let flag = true;

while (i < j) {
    if (str2[i] !== str2[j]) {
        flag = false;
        break;
    }
    i++;
    j--;
}

console.log(flag ? "Palindrome" : "Not Palindrome");

//without using reverse string program
let str1 = "Hello";
let rev = "";

for (let i = str1.length - 1; i >= 0; i--) {
    rev = rev + str1[i];
}

console.log("Original String:", str1);
console.log("Reversed String:", rev);

