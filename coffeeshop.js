var coffeeShop = {
  money: 10,
  beans: 40,
  drinkRequirements: {
    latte: {
      beanRequirement: 10,
      price: 3,
    },
    americano: {
      beanRequirement: 5,
      price: 2,
    },
    doubleShot: {
      beanRequirement: 15,
      price: 7,
    },
    frenchPress: {
      beanRequirement: 12,
      price: 5,
    },
  },
  beansCost: {
    20: 5,
    40: 9,
  },
  makeDrink: function (drinkType) {
    let beansQty = this.drinkRequirements[drinkType]['beanRequirement'];
    if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
      console.log(`sorry, we don't serve ${drinkType} here`);
    } else if (this.beans < beansQty) {
      console.log(
        `sorry, we only have ${beansQty} beans, not enough to make your ${drinkType}`
      );
    } else {
      this.beans -= beansQty;
      console.log(
        `Here's a hot and delicious ${drinkType} with ${beansQty} beans just for you!`
      );
    }
  },
  buyBeans: function (beansToBuy) {
    // console.log(this.money);

    if (
      !this.beansCost.hasOwnProperty(beansToBuy)
      // this.money >= this.beansCost[beansToBuy]
    ) {
      console.log(
        `sorry, you can't buy ${beansToBuy}. We can only purchase beans in quantities of 20 or 40.`
      );
    } else if (!this.money >= this.beansCost[beansToBuy]) {
      console.log(
        `sorry, you only have ${this.money} available and ${beansToBuy} cost ${this.beansCost[beansToBuy]}. Make some more money and then try again!`
      );
    } else {
      this.money -= this.beansCost[beansToBuy];
      this.beans += beansToBuy;
      console.log(
        `Great! You just bought ${beansToBuy} beans and now you have ${this.beans} beans and $${this.money} left`
      );
    }
  },
  buyDrink: function (drinkType) {
    let drinkIncome = this.drinkRequirements[drinkType]['price'];
    this.makeDrink(drinkType);

    this.money += drinkIncome;
  },
};

// coffeeShop.makeDrink('latte');
// coffeeShop.makeDrink('americano');
// coffeeShop.makeDrink('pourOver');
// coffeeShop.makeDrink('doubleShot');
// coffeeShop.makeDrink('frenchPress');
coffeeShop.buyDrink('frenchPress');
coffeeShop.buyDrink('frenchPress');
coffeeShop.buyDrink('frenchPress');
coffeeShop.buyDrink('frenchPress');
coffeeShop.buyBeans(20);
coffeeShop.buyDrink('frenchPress');
// coffeeShop.buyBeans(20);
