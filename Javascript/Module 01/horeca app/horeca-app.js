const lijst = {};
const prijs = {
    fris: 2,
    bier: 4,
    wijn: 8,
};

function bestelling() {
    while (true) {
        let drankje = prompt("Welk drankje wilt u bestellen?").toLowerCase();

        if (drankje in prijs) {
            while (true) {
                let aantal_drank = parseInt(prompt("Hoeveel " + drankje + " wilt u?"));
                if (drankje in lijst) {
                    lijst[drankje] += aantal_drank;
                } else {
                    lijst[drankje] = aantal_drank;
                }
                break;
            }
        } else if (drankje == "stop") {
            break;
        } else {
            alert("Dit artikel ken ik niet.");
        }
    }
}

bestelling();

let totaalbedrag = 0;

for (p in lijst) {
    console.log(lijst[p] + "x " + p);
    totaalbedrag += prijs[p] * lijst[p];
}

console.log("Totaal: " + totaalbedrag + " euro");
