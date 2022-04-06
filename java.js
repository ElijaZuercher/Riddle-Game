document.getElementById("Kaffebild").addEventListener("click", BuchstabeI)
document.getElementById("Eingabefeld").addEventListener("click", Passwort)
document.getElementById("code").addEventListener("click", BuchstabeG)
document.getElementById("Batmanbild").addEventListener("click", BuchstabeP)
document.getElementById("instaminsta").addEventListener("click", BuchstabeI2)
document.getElementById("rätsel").addEventListener("click", Faker)



function BuchstabeI(){
    alert("I");
}

function Passwort() {
    let wort = prompt("Bitte das Passwort eingeben:", "0-0-0-0-0-0-0")
    if (wort == "Pinguin" || wort == "pinguin"|| wort == "PINGUIN") {
        window.location.assign("glückwunsch.html");
    } else {
        alert("Falsch")
      }
}
function BuchstabeG(){
    alert("G");
}
function BuchstabeP() {
    let wort = prompt("Wie heisst der neue Batman Schauschpieler", "Vorname Nachmane")
    if (wort == "Robert Pattinson") {
        alert("pushin P");
    } else {
        alert("Falsch")
      }
}
function BuchstabeI2(){
    window.location.assign("newsite.html");
}
function Faker(){
    window.location.assign("fake.html");
}
