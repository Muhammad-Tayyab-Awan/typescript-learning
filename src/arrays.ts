// arrays
let marks = [90, 56, 97, 23, 89];
type User = (string | number)[];
let ar1 = ["hh", "aka", "u", 9];
ar1.push(false); // not allowed
let arr2 = []; // array of any type
arr2.push([90, 78]);
// tuples
let student: readonly [string, number][] = [["Muhammad Tayyab", 12]];
student.push();
let st1: [string, boolean?] = ["Ali Raza"];
