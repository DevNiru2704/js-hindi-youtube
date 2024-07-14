const score=400;
//console.log(score);

const balance=new Number(100);
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));

const otherNumber=1123.3423;
//console.log(otherNumber.toPrecision(3));
//console.log(otherNumber.toPrecision(5));

const hundreds=1000000000;
//console.log(hundreds.toLocaleString("en-IN")); //Prints the number in Indian format
//console.log(hundreds.toLocaleString("en-US")); //Prints the number in US format. Default if no format is given.


//*********************************************** Maths **************************************************


//console.log(Math);
//console.log(Math.sqrt(4));
//console.log(Math.ceil(4.1));
//console.log(Math.floor(4.7));
//console.log(Math.round(4.2));
//console.log(Math.round(4.7));
//console.log(Math.abs(-4));
//console.log(Math.pow(4,2));
//console.log(Math.tan(Math.PI/4).toFixed(3)); //45 deg
//console.log(Math.min(4,6,4,3,21,3,45,65));
//console.log(Math.max(4,6,4,3,21,3,45,65));

//console.log(Math.random()); //Gives random value between 0 and 1.

let min=10;
let max=20;

//Now we want to find a random number between 10 and 20.

let randomNumber=(Math.random()*(max-min+1))+min //Formula for creating a random number between any desired range. +1 to avoid zero case
randomNumber=Math.trunc(randomNumber);//For  removing/truncating the decimal part 
randomNumber=Math.trunc((Math.random()*(max-min+1))+min);  //Combined
let i=1
while(i<=20){
    randomNumber=Math.trunc((Math.random()*(max-min+1))+min);
    console.log(randomNumber); //Prints random number between 10 to 20 
    i++;
}