let str = "madam";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not a Palindrome");
}

//using a loop:
let str1 = "madam";
let i = 0;
let j = str1.length - 1;
let flag = true;

while (i < j) {
    if (str1[i] !== str1[j]) {
        flag = false;
        break;
    }
    i++;
    j--;
}

console.log(flag ? "Palindrome" : "Not Palindrome");

