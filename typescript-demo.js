;
var Pizza = /** @class */ (function () {
    function Pizza(data) {
        this.name = '';
        this.slices = 8;
        this.toppings = [];
        this.price = 0;
        this.cheescrust = false;
        this.sizes = [];
        this.vegan = false;
        this.vegaterian = false;
        this.prices = null;
        this.name = data.name;
        this.slices = data.slices;
        this.toppings = data.toppings;
        this.price = data.price;
        this.cheescrust = data.cheescrust;
        this.sizes = data.sizes;
        this.prices = this.getPizzaPrices();
        if (data.vegan) {
            this.vegan = data.vegan;
        }
        if (data.vegaterian) {
            this.vegaterian = data.vegaterian;
        }
    }
    Pizza.prototype.getPizzaPrices = function () {
        var _this = this;
        return this.sizes.map(function (item, index) {
            var addition = (_this.price / 100) * 15 * index;
            return {
                size: item,
                price: _this.price + addition
            };
        });
    };
    return Pizza;
}());
var PizzaToppings;
(function (PizzaToppings) {
    PizzaToppings["TOM"] = "tomato";
    PizzaToppings["BBQ"] = "barbeque";
    PizzaToppings["NONE"] = "none";
    PizzaToppings["ANCH"] = "anchovies";
    PizzaToppings["OLV"] = "olives";
})(PizzaToppings || (PizzaToppings = {}));
var PizzaSizes;
(function (PizzaSizes) {
    PizzaSizes["S"] = "small";
    PizzaSizes["M"] = "medium";
    PizzaSizes["L"] = "large";
    PizzaSizes["XL"] = "extra large";
    PizzaSizes["XXL"] = "extra extra large";
})(PizzaSizes || (PizzaSizes = {}));
var PizzaCatalog = /** @class */ (function () {
    function PizzaCatalog(list) {
        this.list = [];
        this.list = list;
    }
    return PizzaCatalog;
}());
var bbqPizza = new Pizza({
    name: 'Hot BBQ',
    slices: 6,
    toppings: [PizzaToppings.TOM, PizzaToppings.BBQ],
    price: 15,
    cheescrust: true,
    sizes: [PizzaSizes.S, PizzaSizes.M, PizzaSizes.L, PizzaSizes.XL]
});
var hawaiPizza = new Pizza({
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
var vegiPizza = new Pizza({
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
var pizzaCatalog = new PizzaCatalog([bbqPizza, hawaiPizza, vegiPizza]);
console.log(pizzaCatalog);
