// ROLL-SEED LOCK

let n = parseInt(prompt("Enter N"));
let seed = parseInt(prompt("Enter seed"));

for (let i = 0; i < 3; i = i + 1) {
  if (n % 2 == 0) {
    n = (n / 2) + seed;
  } else {
    n = (n * 3) - seed;
  }
}

let temp = Math.floor(n / 10);
let middle = temp % 10;

if (n >= 100 && n <= 999) {
  if (middle == seed) {
    alert("YES, " + n);
  } else {
    alert("NO");
  }
} else {
  alert("NO");
}