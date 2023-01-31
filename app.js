function sayHello(){
        document.querySelector("#NameOutPut").textContent = "Hello " + document.querySelector("#name").value;
        document.querySelector("#AgeOutPut").textContent = "You're  " + document.querySelector("#age").value + "?";
        document.querySelector("#MailOutPut").textContent = "Is this your mail adress:  " + document.querySelector("#mail").value;
}
document.querySelector("#button1").addEventListener("click", sayHello);