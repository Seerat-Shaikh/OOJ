// === Constructors ===
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    /*this.login = function(){
        console.log(this.email, 'has logged in');
    }*/
}

// === Prototype ===
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

// === Prototype Inheritance ===

// Inheriting name & email
function Admin(...args){  //arge rep array of email & name
    User.apply(this, args);
    this.role = 'super admin';
}

//Admin {email: 'shaun@ninjas.com', name: 'shaun', online: false}

// Inheriting login & logout
Admin.prototype = Object.create(User.prototype);
 //It will only delete when admin sis called like admin.deleteUser(users[1])
Admin.prototype.deleteUser = function(u){
    users = users.filter(user => {
        return user.email != u.email;
    });
};


var userOne = new User('mario@ninjas.com', 'Mario');
var userTwo= new User('yoshi@ninjas.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'shaun');

var users = [userOne, userTwo, admin];

console.log(admin);

/*console.log(userOne);
userTwo.login();*/
