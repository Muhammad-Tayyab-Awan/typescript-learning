// Number
let age: number = 78;
// as we have declared age with type number so we cant change its value to another data type its only be a number
age = 12;
// another way to do this
let price: number;
price = 1500;
// same thing goes for constants
const PI: number = 3.14;
// by default if we can't annotate the type of variable ts automatically infers it
let avg = 6.8; // now its type is number we cant change data type of this variable
// we can also annotate ts that our value is a specific number as given below
let parcels: 90 = 90;
// in case we are using large numbers we can separate them using numeric separators like this:
let hight = 1_000_000_000;
// String
const myName = "Muhammad Tayyab";
let firstName: string = myName.slice(0, myName.indexOf(" ") + 1);
console.log(firstName);
// Boolean
let isValid = true;
const isAdult = false;
let idVerified: boolean = isValid && isAdult;
// Any - The God Father
// By using any you are letting ts of the type safety now it works same like js
let ground: any = "Football Ground";
ground = 78;
console.log(ground.toExponential());
// Avoid it if its possible
// Unknown - Same to Any but different
// By using unknown you are also letting ts of the type safety but not if you want to use methods related to specific type like this:
let email: unknown = "tayyabpasha1918@gmail.com"; // here as we annotated its as unknown but we initialized it with string now we can't use string specific methods on email as it's type is unknown to do that we to first explicitly tell ts it's original type.
let tls: string = email.slice(email.indexOf("@")); // not allowed as email is unknown
if (typeof email === "string") tls = email.slice(email.indexOf("@")); // now it works
