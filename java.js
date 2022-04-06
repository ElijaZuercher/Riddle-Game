document.getElementById("Kaffebild").addEventListener("click", BuchstabeI)
document.getElementById("Eingabefeld").addEventListener("click", Passwort)


function BuchstabeI(){
    alert("I");
}

function Passwort() {
    let wort = prompt("Bitte das Passwort eingeben:", "Bartgeier")
    if (wort == "Pinguin" || wort == "pinguin"|| wort == "PINGUIN") {
        window.location.assign("glückwunsch.html");
    } else {
        alert("Falsch")
      }
}