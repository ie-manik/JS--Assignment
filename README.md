# JS-Assignment

This repository contains my solutions for Assignment 4 of Fundamentals of Web Design.
I have tried to solve all the questions using the basic concepts we studied in class like loops and if-else. Input is taken using prompt() and output using alert().

---

## Question 1: Digit Gatekeeper

Approach:

In this question, I ran a loop from L to R and checked each number one by one. First I checked if the number is divisible by K. Then I extracted its digits using a while loop. While doing that, I checked if any digit is 0 and also calculated the sum of digits.

After getting the sum, I checked if it is a prime number using a loop. If all the conditions are satisfied, I increased the count.

Time Complexity:
O(N × D)

---

## Question 2: Roll-Seed Lock

Approach:

Here I took N and seed as input. Then I repeated the given steps 3 times.
If the number is even, I did N/2 + seed.
If the number is odd, I did N*3 - seed.

After 3 iterations, I checked if the number is a 3-digit number or not. Then I found the middle digit and compared it with seed. If it matched, I printed YES, otherwise NO.

Time Complexity:
O(1)

---

## Question 3: Mirror Corridor

Approach:

In this question, I started from X = 0 and went up to 100000. For each value of X, I calculated N + X. Then I checked two conditions: whether it is divisible by K and whether it is a palindrome.

For checking palindrome, I converted the number to a string and reversed it.

The first value that satisfies both conditions is printed. If none is found, I printed -1.

Time Complexity:
O(100000 × D)

---

## Question 4: Fare Calculator

Approach:

First I calculated fare = base + 7 × distance.
Then I applied all the conditions step by step:
If minutesLate > 15, I added 20.
If distance > 10, I added 10% of the current fare.
If seed is odd, I subtracted seed, otherwise I added it.

Finally, I rounded the fare to the nearest multiple of 5.

Time Complexity:
O(1)

---

## Question 5: Skipping Numbers

Approach:

I started from m = 1 and kept increasing it. I added numbers to the sum only if they were not divisible by (seed + 2).

I continued this until the sum became greater than or equal to N. Then I printed both m and the sum.

Time Complexity:
O(m)

---

## Question 6: Contest Score Judge

Approach:

First I calculated the score using the formula 3a + b − 2c.
If the score became negative, I set it to 0.
If the total attempts were more than 50, I subtracted 10 from the score.

Then I checked whether the score is greater than or equal to 60.
If yes, I printed PASS, otherwise FAIL.

Time Complexity:
O(1)
