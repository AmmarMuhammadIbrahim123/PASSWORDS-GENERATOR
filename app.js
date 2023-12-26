
var random="qwqwertyuiassdfghjklzxcvbnmp[]\';lkjhgfddsazxcvbnm,./!@#$%^&*()_+="
password="";

for(var i = 0; i<10; i++){
    var randomNumber=Math.floor(Math.random() * random.length);
    password+=random[randomNumber]
}
console.log(password)

