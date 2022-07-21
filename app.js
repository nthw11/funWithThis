// var counter = {
//   count: 0,

//   updateCounter: function () {
//     this.count += 1;
//   },
// };

// counter.updateCounter();
// counter.updateCounter();
// counter.updateCounter();

// alert(counter.count);
// var cat = {
//   makeNoise: function () {
//     alert(this.noise);
//   },
//   noise: 'Meow!',
// };

// var dog = {
//   makeNoise: cat.makeNoise,
//   noise: 'Woof!',
// };

// cat.makeNoise();
// dog.makeNoise();

// var person = {
//   hungry: true,

//   feed: function () {
//     if (this.hungry) {
//       this.hungry = false;
//       alert('Im no longer hungry!');
//     }
//   },
// };

// person.feed();
// var pump = function (amount) {
//   this.liters += amount;
//   console.log('You put ' + amount + ' liters in ' + this.name);
// };

// var garage = {
//   car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump,
//   },
//   car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump,
//   },
// };

// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ', garage.car1.liters);

// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);
// var pumpFuel = function (plane) {
//   plane.fuel += 1;
// };

// var airplane = {
//   fuel: 0,
//   fly: function () {
//     if (this.fuel < 2) {
//       return 'on the ground!';
//     } else {
//       return 'flying!';
//     }
//   },
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Can it fly now? ' + airplane.fly());
// var tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   },
//   stealCoins: function (number) {
//     this.coinCount -= number;
//   },
// };

// tipJar.tip();
// console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(3);
// console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);

// tipJar.stealCoins(10);
// console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);

// var revealSecret = function () {
//   return this.secret;
// };

// var shoutIt = function (person, func) {
//   person.revealItAll = func;
//   var result = person.revealItAll();
//   alert(person.name + ' said: ' + result);
// };

// var aaron = {
//   name: 'Aaron',
//   secret: 'Im scared of heights!',
// };

// var sarah = {
//   name: 'Sarah',
//   secret: 'My middle name is Darlene!',
// };

// shoutIt(aaron, revealSecret);
// shoutIt(sarah, revealSecret);

// let cat = {
//   sound: 'meow',
//   talk: function () {
//     console.log(this.sound);
//   },
// };

// let talkFunction = cat.talk.bind(cat);
// talkFunction();
