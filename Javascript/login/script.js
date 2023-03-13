loggedIn = [];

function getGewerktString(newDate, oldDate) {
    let seconden = (newDate - oldDate) / 1000
    let minuten = 0;
    if (seconden > 60) {
        minuten = Math.floor(seconden / 60);
    };
    seconden -= minuten * 60
    return ' gewerkt: ' + minuten + ' minuten ' + seconden + ' seconden ';
}

function getIndexOfElementByName(loggedIn, naam) {
    for (let x = 0; x < loggedIn.length; x++) {
        ;
        if (loggedIn[x]['naam'] === naam) {
            return x;
        }
    }
    return null;
}

function handlelogin() {
    console.log(loggedIn)

    const naam = document.getElementById('inputNaam').value;// stap 1 ophalen input
    if (naam.length <= 0) {
        alert("voer een naam")
        return
    }
    console.log("U hebt op de button geklikt");
    let positie = getIndexOfElementByName(loggedIn, naam);
    if (positie !== null) { // stap 2 bepalen of persoon in de array zit
        const oldDate = ([positie]['moment'])
        const newDate = new Date();
        console.log(seconden)
        loggedIn.splice(positie, 1);// stap 3 verwijder persoon uit array
        console.log("uw bent uitgelogd")
        document.getElementById("melding").innerText = "uw bent uitgelogd: " + naam + getGewerktString();
        document.getElementById('inputNaam').value = '';
    } else {// niet ingelogd dan toevoegen aan array
        loggedIn.push({ naam: naam, date: Date() });
        document.getElementById("melding").innerText = "uw bent in gelogd: " + naam;
        console.log("uw bent ingelogd " + naam);
    }
    console.log(loggedIn)
    // console.log("uw bent ingelogd " + naam);
}

document.getElementById("loginButton").onclick = handlelogin;