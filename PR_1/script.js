//1.// Write a javascript program to swap teo numbers usinga a third variable.


let a=10;
let b=20;
let r=a;

a=b;
b=r;

console.log ("a=",a);
console.log("b=",b);

//2.//Write a javascript program to swap two numbers without using a third varible.

let x=23;
let y=20;

x = x + y;
y = x - y;
x = x - y;

console.log ("x =",x);
console.log ("y =",y);

//3.// Write a javascript program to convert Celsius temperature to Fahrenheit.

let C = 20;
let F =(C * 9/5) + 32;

console.log("Fahremheit =",F);

//4.// Write a JAvascript program to convert Fahremhit temperature to Celsius.

let f =77;
let c =(f-32)*5/9

console.log("celsius=",c);

//5.// Write a javascript program to calculate the area of a rectangle using length and width.

let lenth = 20
let Width = 30

let Area = lenth * Width;

console.log ("area =",Area);


//6.Write a JavaScript program to calculate the area of a circle using the formula.

// let U = 7;
// let pop = Math.pi * U * U;

// console.log ("area of circle =",pop);








//7.Write a javascript program to calculate the simple interest using the formula SI =(P * R * T)/100.

 let P= 10
 let R= 20
 let T= 30

 let SI = (P * R * T)/100;

 console.log("simple interest=",SI);


//8.Write a Javascript program to calculate the perimeter of a rectangle.

let lengh=10;
let width=5;

let perimeter = 2 * (lenth + width);

console.log ("perimeter=",perimeter);

//9.Write a JavaScript program to calculate the square of a number.

let num1 =5;
let square = num1 * num1;

console.log("square=",square);

// 10.Write a javaScript program to calculate the cube of a number.
 

let num = 12;
let cube = num * num * num;

console.log("cube is",cube);

// 11.write a javaScript program to find the reminder when one number is divided by another.
 

let t = 10;
let q = 3;

let remainder = t % q;

console.log("Remainder is =", remainder);

// 12.write a javascript program to convert minutes into seconds.

let minutes = 5;
let seconds = minutes * 60;

console.log("Seconds =",seconds);

// 13.write a javascript program to convert hours into minutes.

let hours = 10;
let Min = hours * 60;

console.log("Minutes =",minutes);

// 14.write a javascript program to find the averageof three numbers.


let s = 13;
let g = 50;
let k = 39;

let average =(s + g + k) / 3;

console.log("average is",average)






// 15.Write a javaScript program to convert kilometers into meters.
 
let km = 23;
let meter = km * 1000;
console.log("meters is =",meter);

// 16.covert meter into centimeter.

let m = 15;
let cm = m * 100;

console.log("centimeter is=",cm);

// 17.calculate total marks a nd percentage of 5 subject.

let eng = 60
let guj = 40
let marathi =75
let sci = 67
let math = 89

let marks = eng + guj + marathi +sci + math;
let percentage = marks/5;

console.log("Total marks =",marks);
console.log ("percentage is=",percentage);


// 18.increment number using increment operator.

let number = 50;

num++;

console.log("increment is",number);

// 19.decrement using decrement operator.

let n = 50;

num--;

console.log("decrement is",n);


// 20.check if number is even or odd using the moduls operator.

let l = 15;

if (l % 2 == 0){
    console.log("number is even");
}
else {
    console.log ("number is odd");
}



