loggedIn = [];

function getIndexOfElementByName(loggedIn, naam){
    
  
}

function handlelogin(){
    console.log(loggedIn)

    let naam = document.getElementById('inputNaam').value;// stap 1 ophalen input
    if (naam.length <= 0){
        alert("voer een naam")
        return
    }
    console.log("U hebt op de button geklikt");
    if (loggedIn.includes(naam)){ // stap 2 bepalen of persoon in de array zit
        loggedIn.splice(loggedIn.indexOf(naam),1)// stap 3 verwijder persoon uit array
        console.log("uw bent uitgelogd")
        document.getElementById("melding").innerText = "uw bent uitgelogd: " + naam;
        document.getElementById('inputNaam').value = '';
    } else{// niet ingelogd dan toevoegen aan array
        loggedIn.push({naam : naam, date : Date()});
        document.getElementById("melding").innerText = "uw bent in gelogd: " + naam;
        console.log("uw bent ingelogd " + naam);
    }
    console.log(loggedIn)
    // console.log("uw bent ingelogd " + naam);
    }

document.getElementById("loginButton").onclick = handlelogin;