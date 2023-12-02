# Dynamic programming exploration

An optimization for recursion.

Common use case:

1. Finding optimal solution
2. Counting the total number of solutions in a problem

## Fibonacci problem

The fibonacci sequence is a function that grows exponential with each added call.
If we investigate the problem we can see that we are calling the same function multiple times .
We can improve the performance of this function with memoization.

### Memoization

By adding a cache to our solution and storing results there we can reuse them later on.
This increases the performance of the function with minimal change to the code itself.

This is the fundamental idea behind dynamic programming:

`DynamicProgramming = Recursion + Memoization`

We need to figure out what are the sub-problems and how solving them would help us solve the main problem.

## Bottom-up approach

We can also solve the problem by starting from the bottom and working our way up.
