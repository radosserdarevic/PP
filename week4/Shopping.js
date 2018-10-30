(function () {

    function Product(name, price, expirationDate) {
        this.id = Math.floor(Math.random() * 50000 + 12000);
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;

        this.getInfo = function () {

            var letter;



            letter = this.name[0] + this.name[this.name.length - 1];
            return letter.toUpperCase() + this.id + " , " + this.name + "," + this.price;
        };
    }


    var product1ExpDate = new Date('12-10-2018.');
    var product1 = new Product('banana', 102.453, product1ExpDate)

    console.log(product1);
    var info;
    info = product1.getInfo()
    console.log(info)
})();

function ShoppingBag() {
    thisList = [];
    this.addProduct = function (object) {
        var curruentDate = new Date(); 
        if(object.expirationDate > curruentDate){
            this.list.push(object)
        }
    };


    this.getAveragePrice = function () {
        var sum = 0;
        for (var i = 0; i < this.list.length; i++) {
            sum += this.list[i].price

        }

        return (sum / this.list.length).toPrecision();
    };

    this.getMostExpensive = function () {
        var max = 0;
        var maxindex = 0;
        for (var i = 0; i < this.list.length; i++) {
            if (max < this.list[i].price) {
                max = this.list[i].price;




            }
        }
        return max;

    }











}
}
}
