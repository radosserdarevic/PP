
(function () {
    'use strict';

    console.log('Hi!');

    var person1 = new Person('John', 'Snow');
    var person2 = new Person('Carsei', 'Lannister');
    var person3 = new Person('Denerys', 'Targeryen');
    //var person4 = new Person('Tyrion', 'Lannister');

    var seat1 = new Seat(1, 'b');
    var seat2 = new Seat(undefined, 'b');
    var seat3 = new Seat(21);

    function createPassenger(person, seat) {
        function sameSeatNumber() {

        }
        function noMoreThanHundred() {

        }
        function sameFullName() {

        }
        return new Passenger(person, seat);
    }

    var passenger1 = createPassenger(person1, seat1);
    var passenger2 = createPassenger(person2, seat2);
    var passenger3 = createPassenger(person3, seat3);
    //var passenger4 = createPassenger(person4);

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    var flight1 = createFlight('Belgrade - New York', '2018-10-29');
    var flight2 = createFlight('Barcelona - Belgrade', '2018-11-1');

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    //flight2.addPassenger(passenger4);

    var airport = new Airport();

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());


    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + ' ' + this.surname;
        };
    }

    function Seat(number, category) {
        this.number = (function (number) {
            if (number === undefined) {
                return Math.round((100 - 10) * Math.random() + 10);
            } else {
                return parseFloat(number);
            };
        })(number);
        this.category = (function (category) {
            if (category === undefined || (category !== 'b' && category !== 'e')) {
                //if (!category || (category !== 'b' && category !== 'e')) {
                return 'e';
            } else {
                return category;
            };
        })(category);

        this.fullCategory = function () {
            if (this.category == 'b') {
                return 'business';
            } else {
                return 'economy';
            };
        }

        this.getData = function () {
            return '\t' + this.number + ', ' + this.fullCategory();
        };
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData();
        };
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = (function (date) { return new Date(date); })(date);
        this.passengers = [];

        this.addPassenger = function (passenger) {
            this.passengers.push(passenger);
        };

        this.getRelation = function () {
            var array = this.relation.split(' - ');
            var string1 = '', string2 = '';
            for (var j = 0; j < array[0].length; j++) {
                if (array[0].charAt(j).toUpperCase() !== 'A' || array[0].charAt(j).toUpperCase() !== 'E' || array[0].charAt(j).toUpperCase() !== 'I' || array[0].charAt(j).toUpperCase() !== 'O' || array[0].charAt(j).toUpperCase() !== 'U') {
                    string1 += array[0].charAt(j).toUpperCase();
                    break;
                };
            };
            for (var k = array[0].length - 1; k >= 0; k--) {
                if (array[0].charAt(k).toUpperCase() !== 'A' || array[0].charAt(k).toUpperCase() !== 'E' || array[0].charAt(k).toUpperCase() !== 'I' || array[0].charAt(k).toUpperCase() !== 'O' || array[0].charAt(k).toUpperCase() !== 'U') {
                    string1 += array[0].charAt(k).toUpperCase();
                    break;
                };
            };
            for (var j = 0; j < array[1].length; j++) {
                if (array[1].charAt(j).toUpperCase() !== 'A' || array[1].charAt(j).toUpperCase() !== 'E' || array[1].charAt(j).toUpperCase() !== 'I' || array[1].charAt(j).toUpperCase() !== 'O' || array[1].charAt(j).toUpperCase() !== 'U') {
                    string2 += array[1].charAt(j).toUpperCase();
                    break;
                };
            };
            for (var k = array[1].length - 1; k >= 0; k--) {
                if (array[1].charAt(k).toUpperCase() !== 'A' || array[1].charAt(k).toUpperCase() !== 'E' || array[1].charAt(k).toUpperCase() !== 'I' || array[1].charAt(k).toUpperCase() !== 'O' || array[1].charAt(k).toUpperCase() !== 'U') {
                    string2 += array[1].charAt(k).toUpperCase();
                    break;
                };
            };
            return string1.concat(' - ', string2);
        };

        this.getBusinessPassengers = function () {
            var bussinespassengers = 0;
            for (var i = 0; i < this.passengers.length; i++) {
                if (this.passengers[i].seat.category == 'b') {
                    bussinespassengers++;
                }
            };
            return bussinespassengers;
        };

        this.getData = function () {
            return this.date.toISOString().slice(0, 10) + ', ' + this.getRelation() + ', business passengers ' + this.getBusinessPassengers() + '\n';
        }
    }

    function Airport() {
        this.name = 'Nikola Tesla';
        this.flights = [];

        this.addFlight = function (flight) {
            this.flights.push(flight);
        };

        this.getTotalPassengers = function () {
            var totalpassengers = 0;
            for (var i = 0; i < this.flights.length; i++) {
                totalpassengers += this.flights[i].passengers.length;
            };
            return totalpassengers;
        };

        this.getTotalBusinessPassengers = function () {
            var totalbusinesspassengers = 0;
            for (var i = 0; i < this.flights.length; i++) {
                totalbusinesspassengers += this.flights[i].getBusinessPassengers();
            };
            return totalbusinesspassengers;
        };

        this.getData = function () {
            var string = 'Airport: ' + this.name + ', total passangers ' + this.getTotalPassengers() + ', total business passengers ' + this.getTotalBusinessPassengers() + '\n';
            for (var i = 0; i < this.flights.length; i++) {
                string += '\t' + this.flights[i].getData();
                for (var j = 0; j < this.flights[i].passengers.length; j++) {
                    string += '\t' + this.flights[i].passengers[j].getData() + '\n';
                }
            };
            return string;
        };
    }
})();