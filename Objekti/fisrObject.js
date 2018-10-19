//svojstva:
// korisnicko ime, sifra, godine, posl, email
// da li radi sa JS-om
// metode:
//proslaviti rodjendan, nauciti JS, promeniti sifru

var user = {
    username: "misa",
    password: "misa123",
    age: 25,
    gender: "m",
    email: "misa@gmail.com",
    isJSprogrammer: false,
    birthday: function () {
        user.age++;
    },
    learnJS: function () {
        user.isJSProgrammer = true;
    },
    changePassword: function (newPassword) {
        user.password = newPassword;
    }
};

console.log(user.username);
console.log(user.image);
console.log(user.isJSprogrammer);
user.learnJS();
console.log(user.isJSprogrammer);
user.phone = "3422425235";


delete age
console.log(user.age);


