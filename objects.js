// ==== LITERALS ====
/*var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Mario',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    },
};

console.log(userOne.name); //userOne['name] or userOne.name both are same
userOne.login();
userOne.logout();*/

// ==== CLASSES & METHODS ====
//start class name with capital letter
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    } //Don't add cooma after bracket
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}
 // === Class Inheritance ===
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('mario@ninjas.com', 'Mario');
var userTwo= new User('yoshi@ninjas.com', 'Yoshi');
var admin = new Admin('shaun@ninjas.com', 'shaun');

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);

//userOne.login();
//userTwo.logout();
// ===== Chaining ====
//userOne.login().updateScore().updateScore().logout();
