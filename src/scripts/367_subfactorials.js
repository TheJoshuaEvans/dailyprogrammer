/**
 * Description
Most everyone who programs is familiar with the factorial - n! - of a number, the product of the series from n to 1. One interesting aspect of the factorial operation is that it's also the number of permutations of a set of n objects.

Today we'll look at the subfactorial, defined as the derangement of a set of n objects, or a permutation of the elements of a set, such that no element appears in its original position. We denote it as !n.

Some basic definitions:

!1 -> 0 because you always have {1}, meaning 1 is always in it's position.

!2 -> 1 because you have {2,1}.

!3 -> 2 because you have {2,3,1} and {3,1,2}.

And so forth.

Today's challenge is to write a subfactorial program. Given an input n, can your program calculate the correct value for n?

https://www.reddit.com/r/dailyprogrammer/comments/9cvo0f/20180904_challenge_367_easy_subfactorials_another/e75055s
 */
const factorial = n => { let f=n; for(n--; n>0; n--){f*=n}; return f }
const subfactorial = n => n == 0 ? 1 : n == 1 ? 0 : Math.round(factorial(n)/Math.E);

console.log(factorial(process.argv[2]));
console.log(subfactorial(process.argv[2]));
