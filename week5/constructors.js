var misa = {
    username: 'Misa',
    password: 'misa123',
    changePassword: function (newPassword) {
        this.password = newPassword;
    }
};

var gisa = {
    username: 'Gisa',
    password: 'gisacar',
    changePassword: function (newPassword) {
        this.password = newPassword;
    }
};

// var user = {
//     username: 'Misa',
//     password: 'misa123',
//     changePassword: function (newPassword) {
//         user.password = newPassword;
//     }
// };

function createUser(userUsername, userPassword) {
    var newUser = {};
    newUser.username = userUsername;
    newUser.password = userPassword;
    newUser.changePassword = function (newPassword) {
        newUser.password = newPassword;
    }
    return newUser;
}

var visnja = createUser('visnja', '123456');

console.log(visnja.password);
visnja.changePassword('abcdef')
console.log(visnja.password);


function User(username, password) {
    //var this = {};
    this.username = username;
    this.password = password;
    this.changePassword = function (newPassword) {
        this.password = newPassword;
    }
    //return this;
}

var visnja = new User('visnja', '123456');
//var visnja = User('visnja', '123456');  //global this

console.log(visnja.password);
visnja.changePassword('abcdef')
console.log(visnja.password);

