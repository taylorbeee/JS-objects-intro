const cat = {};

cat.name = "Fred";
cat.nickname = "Flooficus";
cat.age = 5;
cat.isSleeping = true;
cat.favoriteToys = ["spring", "ping pong balls", "bird stuffy"];
cat.pet = function () {
  return "purrrrrrrr";
};

console.log(cat.favoriteToys[2]);

// ALSO
// const cat = {
//   name: "Fred",
//   nickname: "Flooficus",
//   age: 5,
//   isSleeping: true,
//   favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
//   pet: function () {
//     return "purrrrrrrr";
//   }
// };

cat.play = function () {
  this.isSleeping = false;
  return `${this.nickname} is awake and playing!`;
};

// ALSO
// const cat = {
//   name: "Fred",
//   nickname: "Flooficus",
//   age: 5,
//   isSleeping: true,
//   favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
//   pet: function () {
//     return "purrrrrrrr";
//   },
//   play: function () {
//     this.isSleeping = false;
//     return `${this.nickname} is awake and playing!`;
//   }
// };
