// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// function Employee(name, surname, job, salary) {
//   this.job = job;
//   this.salary = salary;
//   Person.call(this, name, surname);
// }
// Employee.prototype.getData = function() {
//   return this.name + " " + this.surname + ":" + this.salary;
// };
// Employee.prototype.getSalary = function() {
//   return this.salary;
// };
// Employee.prototype.increaseSalary = function() {
//   var part = this.salary / 10;
//   return this.salary + part;
// };

// Developer.prototype = Object.create(Employee.prototype);
// Developer.prototype.constructor = Developer;

// function Developer(name, surname, job, salary, specialization) {
//   this.specialization = specialization;
//   Employee.call(this, name, surname, job, salary);
// }
// Developer.prototype.getSpecialization = function() {
//   return this.specialization;
// };
// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// function Manager(name, surname, job, salary, department) {
//   this.department = department;
//   Employee.call(this, name, surname, job, salary);
// }

// Manager.prototype.getDepartment = function() {
//   return this.department;
// };
// Manager.prototype.changeDepartment = function() {
//   return (this.department = "Analytics");
// };

// var newEmployee = new Employee("vilic", "vilic", "IT strucnjak veliki", 25000);

// var newDeveloper = new Developer(
//   "Gojko",
//   "Vilic",
//   "IT Strucnjak",
//   "mala",
//   "python expert"
// );
// var newManager = new Manager(
//   "Stefan",
//   "Bulatovic",
//   "Manager",
//   "infinity",
//   "NASA"
// );
// console.log(newEmployee.increaseSalary());

// 2 Zadatak Applications

function App(name, licence, stars) {
  this.name = name;
  this.licence = licence;
  this.stars = stars;
}

function WebApp(name, url, technologies, licence, stars) {
  this.url = url;
  this.technologies = technologies;
  App.call(this, name, licence, stars);
  WebApp.prototype.getData = function() {
    return (
      this.name +
      "," +
      this.url +
      "," +
      this.technologies +
      "," +
      this.licence +
      "," +
      this.stars
    );
  };
  WebApp.prototype.reactBased = function() {
    if (technologies === "React") {
      return "Platform is react!";
    } else {
      return "The platform is not react";
    }
  };
}

function MobileApp(name, platforms, licence, stars) {
  this.platforms = platforms;
  App.call(this, name, licence, stars);
  MobileApp.prototype.getData = function() {
    return 
      this.name + "," + this.platform + "," + this.licence + "," + this.stars
  };
  };
  MobileApp.prototype.forAndroid = function() {
    if (platforms === "Android") {
      return "Platform is for android";
    } else {
      return "The platform is not for android";
    }
  };
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

var app = new App("Zoltron", "GR9", 1000);
console.log(app);

var WebApp = new WebApp("Bulat", "1234", "Android", "ultronV4", "2000");
console.log(WebApp.reactBased());

//Zavrsiti



