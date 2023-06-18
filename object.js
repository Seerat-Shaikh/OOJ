// === Constructors ===
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

var userOne = new User('mario@ninjas.com', 'Mario');
var userTwo= new User('yoshi@ninjas.com', 'Yoshi');

console.log(userOne);
userTwo.login();
