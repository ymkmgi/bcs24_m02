// console.log("Hello World")

function login(userName, password) {
    if (typeof userName === 'string' && typeof password === 'string') {
        if (userName.length >= 8 && password.length >= 8) {
            console.log("Login Successful!");
        } else if (userName.length < 8 && password.length >= 8) {
            console.log("Username is too short.")
        } else if (userName.length >= 8 && password.length < 8) {
            console.log("Password is too short.")
        } else {
            console.log("Credentials are too short!")
        }
    } else {
        console.log("Variable is not a string");
    }
}

login("ymkmgi", "lalala6754");
login("shai67345", "happyBday675");
login("ayumikumagai", "1233");
login(1, "lalala6754");
