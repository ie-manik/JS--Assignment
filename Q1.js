//Digit Gatekeeper

let L = parseInt(prompt("Enter L"));
let R = parseInt(prompt("Enter R"));
let K = parseInt(prompt("Enter K"));

let count = 0;

for (let i = L; i <= R; i++) {
  if (i % K == 0) {
    let n1 = Math.abs(i);
    let digitSum = 0;
    let hasZero = false;

    if (n1 == 0) hasZero = true;

    while (n1 > 0) {
      let d = n1 % 10;
      if (d == 0) {
        hasZero = true;
        break;
      }
      digitSum = digitSum + d;
      n1 = Math.floor(n1 / 10);
    }

    let checkPrime = true;
    if (digitSum < 2) {
      checkPrime = false;
    } else {
      for (let j = 2; j < digitSum; j++) {
        if (digitSum % j == 0) {
          checkPrime = false;
          break;
        }
      }
    }

    if (hasZero == false && checkPrime == true) {
      count = count + 1;
    }
  }
}

alert("Found " + count + " numbers.");