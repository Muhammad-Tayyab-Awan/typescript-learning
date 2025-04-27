"use strict";
// Number
let age = 78;
// as we have declared age with type number so we cant change its value to another data type its only be a number
age = 12;
// another way to do this
let price;
price = 1500;
// same thing goes for constants
const PI = 3.14;
// by default if we can't annotate the type of variable ts automatically infers it
let avg = 6.8; // now its type is number we cant change data type of this variable
// we can also annotate ts that our value is a specific number as given below
let parcels = 90;
// in case we are using large numbers we can separate them using numeric separators like this:
let hight = 1000000000;
