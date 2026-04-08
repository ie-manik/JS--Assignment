//Mirror Corridor

function isPalindrome(num) {
    let s = num.toString();
    let rev = s.split("").reverse().join("");
    return s === rev;
}

let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));

let found = -1;

for (let X = 0; X <= 100000; X++) {
    let val = N + X;

    if (val % K === 0 && isPalindrome(val)) {
        found = X;
        break;
    }
}

alert(found);