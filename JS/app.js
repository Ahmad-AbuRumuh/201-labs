let name = prompt("At the first we want to know your name, if you don't mind.")
let age = prompt("Also we want your age.")
let favOS = prompt("what is your favorite OS for mobiles? choose between Android or IOS")

while(favOS != "Android" && favOS != "IOS"){
  favOS = prompt("Sorry, your choice is not exist, only choose between Android and IOS.")
}

let numOfDev = prompt("How many " + favOS + " device you bought in your life?")

alert("Ok, welcome")

document.write("<div>" + "<h3>" + name + " who has " + age + " years old like to use " + favOS + " and used it " +  numOfDev + " times" + "</h3>")