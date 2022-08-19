// neste object destructuring

const player = {
  name: "L. Messi",
  age: 34,
  height: 5.6,
  parents: [{ father: "Jorge Messi" }, { mother: "Celia María Cuccittini" }],
  previousClubs: ["Boka Juniors", "Bercelona FC"],
  wife: {
    name: "Antelia Rocuzzo",
    age: 29,
    profession: "Modelling",
  },
  child: 3,
  balance: 45000000,
  message: function () {
    const annoucement = `${this.name} married ${this.wife.name} on 2017 and they have ${this.child} children.`;
    console.log(annoucement);
  },
};

const {
  name: playerName,
  age: playerAge,
  wife: { name: PlayerWifeName },
} = player;
console.log(playerName, playerAge, PlayerWifeName);

// nested array destructuring

const fruits = ["apple", "banana", "orange", "mosambi", "mango"];
const [a, balance] = fruits;
console.log(balance);
