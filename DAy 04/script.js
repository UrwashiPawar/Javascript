
//Control structure
// 1. condition statements
// 2. iteration statements
// 3. selection statements


let pin = 3341;

// if block execution unitl condition became true.
// if block ke andar ka code tabhi execute hoga jab condition true hogi.
// agr pin 2311 ke barabar hai to if block execute hoga varna usme kuch nhi dikhega.

if(pin == 3341){
    console.log("Welcome to your account");
}

console.log("************************************");

// wap to chek user is aligible for voting or not. (age 18 se zyada hona chahiye)
// age > 18 -> eligible for voting
// age < 18 -> not eligible for voting

let age = 18;

if(age >= 18){
    console.log("You are eligible for voting");
}
else{
    console.log("You are not eligible for voting");
}

console.log("************************************");

// maximum of 2 numbers

let num1 = 25;
let num2 = 13;

if(num1 > num2){
    console.log("num1 is maximum");
}
else{
    console.log("num2 is maximum");
}

console.log("************************************");


// wap to check number is even or odd.

// number ke last digit se bhi hume pta chal sakta hai ki number even hai ya odd.

const number = 25; 

if ( number % 2 == 0){
     console.log("number is even");
}else{
    console.log("number is odd");
}

console.log("************************************");

// wap to check number is positive, negative or neutral.

const num = -25;
 if (num > 0){
    console.log("number is positive");
 }
else{
    if (num == 0){
        console.log("number is neutral");
    }
    else{
        console.log("number is negative");
    }
}

console.log("************************************");
//wap to print find maximum from 3 using nested if and else.

let a = 25;
let b = 13;
let c = 9;


if (a > b){
    if(a > c){
        console.log("a is maximum");
    }
    else{
        console.log("c is maximum");
    }
}
else{
    if(b > c){
        console.log("b is maximum");
    }
    else{
        console.log("c is maximum");
    }
}
