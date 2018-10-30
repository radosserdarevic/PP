'use strict';

(function () {
    console.log('Hi');
    var p1 = new Product('Banana', 130, '10 1 2018');
    var p2 = new Product('Snikers', 45, '11 22 2018');
    var p3 = new Product('YoYo', 69.99, '11 11 2018');
    var p4 = new Product('Perfex', 129.99, '4 3 2019');
    console.log(p1.getInfo());
    console.log(p2.getInfo());
    console.log(p3.getInfo());
    console.log(p4.getInfo());
    var sb = new ShoppingBag();
    sb.addProduct(p1);
    sb.addProduct(p2);
    sb.addProduct(p3);
    sb.addProduct(p4);
    console.log('Average price ' + sb.getAveragePrice());
    console.log('Total price ' + sb.getTotalPrice());
    console.log('Most expensive ' + sb.getMostExpensive());
    var pc = new PaymentCard(200, true, '0 1 2019');
    checkoutAndBuy(sb, pc);

    function Product(name, price, expdate) {
        this.id = randomNumber();
        this.name = name;
        this.price = price;
        this.expdate = expdate;
        this.getInfo = function () {
            console.log(this.id + ", " + this.name + ", " + this.price.toPrecision());
        }
    }

    function ShoppingBag() {
        this.list = [];
        this.addProduct = function (object) {
            this.list.push(object)
        };
        this.getAveragePrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i].price;
            }
            return (sum / this.list.length).toPrecision();
        };
        this.getMostExpensive = function () {
            var max = 0;
            var maxindex = 0;
            for (var i = 0; i < this.list.length; i++) {
                if (max < this.list[i].price) {
                    max = this.list[i].price
                    maxindex = i;
                }
            }
            return console.log(this.list[maxindex].name, this.list[maxindex].price.toPrecision());
        };
        this.getTotalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i].price;
            }
            return sum.toPrecision();
        };
    }

    function PaymentCard(balance, active, valid) {
        this.balance = balance;
        this.active = active;
        this.valid = valid;
    }

    function checkoutAndBuy(shoppingbag, paymentcard) {
        if (paymentcard.balance < shoppingbag.getTotalPrice()) {
            console.log('Payment is unsuccessful! You are missing ' +
                (shoppingbag.getTotalPrice() - paymentcard.balance) + '$ more!');
        } else {
            console.log('Payment is successful!');
        }
    }

    function randomNumber() {
        return Math.round(((99999 - 10000) * Math.random() + 10000));
    }

})();

