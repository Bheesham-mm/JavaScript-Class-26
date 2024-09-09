// for (var i = 0; i <= 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i)
// }

// // while
// var num = 0;
// var index = 0;
// while (index < 5) {
//     num++
//     index++
// }
// console.log("using while loop")
// console.log(num)
// // do while
// var num = 0;
// var index = 0;
// do {
//     num++
//     index++
// } while (index < 5);
// console.log("using do while loop")
// console.log(num)
// // for
// var num = 0;
// for(var i = 0; i < 5; i++){
//     num++;
// }
// console.log("using for loop")
// console.log(num)

function Login() {
    var userName = document.getElementById("userName").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    if (userName !== "" && mail !== "" && pass !== "") {
        alert("Login sucessful...!")
        console.log("Login sucessful...")
        console.log(`User Name is => ${userName} User Mail is => ${mail} User Password => ${pass}`)
    }
    else{
        alert("Please fill this form...")
        console.log("Please fill this form...")
    }
}
