
function message(texte) {
    document.getElementById("message").innerText = texte;
}
function checkNumber(operande) {
    if (isNaN(parseInt(document.getElementById(operande).value))) {
        document.getElementById(operande).className = "error";
        message(operande + " n'est pas un chiffre.");
        document.getElementById(operande).focus();
        return false;
    }
    else {
        document.getElementById(operande).className = "";
        return true;
    }

}

function calculate() {
    var operande1 = parseInt(document.getElementById("operande1").value);
    var operande2 = parseInt(document.getElementById("operande2").value);
    var link = document.getElementsByName("link");

    test1 = checkNumber("operande1");
    test2 = checkNumber("operande2");

    if (test1 && test2) {
        linkValue = "failedTest";
        for (i = 0; i < link.length; i++) {
            if (link[i].checked) {
                linkValue = link[i].value;
            }
        }

        switch (linkValue) {
            case '+':
                resultat = operande1 + operande2;
                break;
            case '/':
                resultat = operande1 / operande2;
                break;
            case '*':
                resultat = operande1 * operande2;
                break;
            case '-':
                resultat = operande1 - operande2;
                break;
            case '%':
                resultat = operande1 % operande2;
                break;
            default:
                resultat = 'merci de choisir un operateur';
        }
        message(resultat);
    }
}

