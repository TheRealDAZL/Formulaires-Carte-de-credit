function ajouterEmail() {
    let email = document.getElementById("email").value;
    document.forms[0].action = "mailto:"+email;
}

function effacer() {
    document.forms[0].action = "";
}