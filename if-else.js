const age = 12;
if (age >= 18) {
  console.log("Nick is an Adult");
} else {
  console.log("Nick is a child");
}

const className = 0;
if (className > 12) {
  console.log("Varsity");
} else if (className > 10 && className <= 12) {
  console.log("HSC");
} else if (className > 8) {
  console.log("SSC");
} else if (className === 8) {
  console.log("JSC");
} else if (className > 5 && className < 8) {
  console.log("High School");
} else {
  console.log("PSC");
}

/* const pet = "dog";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
} */

const pet = "cat";

switch (pet) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    break;
  default:
    console.log("I don't own a pet");
    break;
}
const myPet = "snake";
let announcement =
  myPet === "dog"
    ? console.log("i have a dog")
    : console.log("i dont have any pet");
