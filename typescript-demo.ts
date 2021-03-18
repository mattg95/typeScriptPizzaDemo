interface IPizzaPrice {
	size: string;
	price: number;
}


interface IPizza {
  name: string;
  slices: number;
  price: number;
  toppings: PizzaToppings[];
  cheescrust: boolean;
  sizes: PizzaSizes[];
  vegan?: boolean;
  vegaterian?: boolean;
  prices?: IPizzaPrice[];

};

class Pizza {
  name: string = '';
  slices: number = 8;
  toppings: PizzaToppings[] = [];
  price: number = 0;
  cheescrust: boolean = false;
  sizes: PizzaSizes[] = [];
  vegan?: boolean = false;
  vegaterian?: boolean = false;
  prices: IPizzaPrice[] = null;

  constructor(data: IPizza) {
      this.name = data.name;
      this.slices = data.slices;
      this.toppings = data.toppings;
      this.price = data.price;
      this.cheescrust = data.cheescrust;
      this.sizes = data.sizes;
      this.prices = this.getPizzaPrices();
      if(data.vegan) {
          this.vegan = data.vegan;
      }
      if(data.vegaterian) {
          this.vegaterian = data.vegaterian;
      }
   }
   private getPizzaPrices(): IPizzaPrice[] {
     return this.sizes.map((item, index) => {
      const addition = (this.price / 100) * 15 * index;
      return {
        size: item,
        price: this.price + addition
      };
    });
  }
}

enum PizzaToppings {
  TOM = 'tomato' ,
  BBQ = 'barbeque',
  NONE = 'none',
  ANCH = 'anchovies',
  OLV = 'olives'
}

enum PizzaSizes {
  S = 'small', 
  M = 'medium', 
  L = 'large', 
  XL = 'extra large', 
  XXL = 'extra extra large' 
}


class PizzaCatalog {
	list: Pizza[] = [];

	constructor(list: Pizza[]) {
		this.list = list;
	}
}

const bbqPizza = new Pizza({
  name: 'Hot BBQ',
  slices: 6,
  toppings: [PizzaToppings.TOM, PizzaToppings.BBQ],
  price: 15,
  cheescrust: true,
  sizes: [PizzaSizes.S, PizzaSizes.M, PizzaSizes.L, PizzaSizes.XL]
})

const hawaiPizza = new Pizza({
	name: "Hawai",
	slices: 6,
	toppings: [PizzaToppings.TOM],
	price: 12,
	cheescrust: true,
	sizes: [
		PizzaSizes.S,
		PizzaSizes.M,
		PizzaSizes.L,
		PizzaSizes.XL,
		PizzaSizes.XXL
	]
});
    
const vegiPizza = new Pizza({
	name: "Veggi",
	slices: 6,
	toppings: [PizzaToppings.TOM],
	price: 11,
	cheescrust: false,
	vegan: true,
	vegaterian: true,
	sizes: [
		PizzaSizes.S,
		PizzaSizes.M,
		PizzaSizes.L,
		PizzaSizes.XL,
		PizzaSizes.XXL
	]
});

const pizzaCatalog = new PizzaCatalog([bbqPizza, hawaiPizza, vegiPizza]);


console.log(pizzaCatalog)
