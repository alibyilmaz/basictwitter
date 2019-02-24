var users = [{
        email: "aliyilmaz@gmail.com",
        pass: "12345"
    },
    {
        email: "barisyilmaz@gmail.com",
        pass: "12345"
    }
]
var tivits = [{
        email: "aliyilmaz@gmail.com",
        tivit: "hava çok güzel"
    },
    {
        email: "aliyilmaz@gmail.com",
        tivit: "hava çok güzel 2 "
    },
    {
        email: "barisyilmaz@gmail.com",
        tivit: "kapıyı ben çacağım"
    },
]
var email = prompt("email?")
var pass = prompt("sifre?")

function userAdd(email, pass) {
    for (i = 0; i < users.length; i++) {
        if ((email == users[i].email && pass == users[i].pass)) {
            return true;
        }
    }
    return false;

}

function giris() {
    if (userAdd(email, pass)) {
        console.log(tivits)
    } else {
        console.log("Kullanıcı adı ya da şifresi hatalı")
    }
}
giris(email, pass)
