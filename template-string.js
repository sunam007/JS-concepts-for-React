const player = {
  name: "L. Messi",
  age: 34,
  height: 5.6,
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

player.message();
