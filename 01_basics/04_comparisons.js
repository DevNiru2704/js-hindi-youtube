//console.log(2>1); //Result = true
//console.log(2>=1); //Result = true
//console.log(2<1);  //Result = false
//console.log(2==1); //Result = false
//console.log(2!=1); //Result = true


//Down below are some experiments. We can't really predict whether it will be true or false whenever we compare
//values that are completely different and have different properties such as string and number, NaN and null, null and 0,
//undefined and numbers,etc. So we should always to only compare between numbers of the same data types.

//console.log("2">1); //Result = true
//console.log("02">1); //Result = true
//console.log("0asda2">1); //Result = true
//console.log(NaN>0) //Result = true
//console.log(NaN<0) //Result = true
//console.log(NaN>=0) //Result = true
//console.log(NaN<=0) //Result = true
//console.log(NaN==0) //Result = true 
//console.log(null>0) //Result = true
//console.log(null<0) //Result = true
//console.log(null>=0) //Result = false
//console.log(null<=0) //Result = false
//console.log(null==0) //Result = true

//note to self: comparisons(>,<,>=,<=) convert null to 0 but equality(==) check doesn't do this.

//console.log(undefined>null);
//console.log(undefined<null);
//console.log(undefined>=null);
//console.log(undefined<=null);
//console.log(undefined==null); //in loose equality undefined and null are equal
//console.log(undefined===null);//in strict equality undefined and null are not equal

//note to self: strict equality(===) checks not only the data but also its data type.

//But 