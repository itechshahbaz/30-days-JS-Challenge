// Challenge no2
// Day 2 ****************************

// today we're going to solve operators common problems

// so we start from Arithmatic numbers


// add
let a = 10
let b = 20
let c = a + b
console.log(c)

// subtract

let x = 20
let y = 10
let z = x - y
console.log(z)

// divide
let num1 = 30
let num2 = 5
let result1 = 30 / 5
console.log(result1)

// multiply
let nmbr1 = 30
let nmbr2 = 5
let result2 = nmbr1 * nmbr2
console.log(result2)

// reminder
let val1 = 28
let val2 = 5
let result3 = val1 % val2
console.log(result3)

// this is basic math operators we use in our daily life

// now we use some methods to make our code more simplify
// for example

// we add numbers by adding them 2 + 2, but if we make it more simple we can use += sign, example below

let val5 = 50
val5 += 100
console.log(val5)

// this is simple addition, also fast
// for subtraction

let val6 = 50
val6 -= 34
console.log(val6)

// now
// we work on less then, greater then and equal to assignment operators

let myVal = 10
let urVal = 10
let totalVal = myVal > urVal
console.log("Value of 1st is: " + totalVal)

let myVal1 = 10
let urVal1 = 10
let totalVal1 = myVal1 < urVal1
console.log("Value of less then is: " + totalVal1)

let myVal2 = 10
let urVal2 = 10
let totalVal2 = myVal2 <= urVal2
console.log("Value of less then equal to is: " + totalVal2)

let myVal3 = 10
let urVal3 = 10
let totalVal3 = myVal3 >= urVal3
console.log("Value of greater then equal to is: " + totalVal3)

let myVal4 = "Shahbaz"
let urVal4 = "10"
let totalVal4 = myVal4 == urVal4
console.log("Value of two strings equal to is: " + totalVal4)

let myVal5 = "Shahbaz"
let urVal5 = "10"
let totalVal5 = myVal5 === urVal5
console.log("Strict equal to: " + totalVal5)

// so here we done some greater then and equal to operator operations

// now we practice some Logical operators of and &&, or || or not ! operators

let andOper = true;
let andOper2 = false;
let resultAnd = andOper && andOper2;
console.log(resultAnd);

let orOper = true;
let orOper2 = false;
let resultOr = orOper || orOper2;
console.log(resultOr);

let notOper = 20
let notOper2 = 30
let finResult = notOper =! notOper2
console.log(finResult)


// now we do some practice of ternary operators
// actually we use this operators to make our conditions short and smart for example

let urAge = 18
let watchTV = urAge >= 18 ? "You can Watch TV" : "Focus on Study"
console.log(watchTV)









