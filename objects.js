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

var userOne = new User('mario@ninjas.com', 'Mario');
var userTwo= new User('yoshi@ninjas.com', 'Yoshi');

//userOne.login();
//userTwo.logout();
userOne.login().updateScore().updateScore().logout();