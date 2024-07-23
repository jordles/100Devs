//Create an espresso machine class that makes machines with 4 properties and 3 methods

class Espresso{
  constructor(roast, milk, water, time){
    this.roast = roast
    this.milk = milk
    this.water = water
    this.time = time
  }

  makeCoffee(){
    console.log("Making coffee")
  }

  makeCappuccino(){
    console.log("Making cappuccino")
  }

  makeLatte(){
    console.log("Making latte")
  }
}

const drink = new Espresso('light', 'soymilk', 3, 4000);

console.log(drink.makeCoffee());

