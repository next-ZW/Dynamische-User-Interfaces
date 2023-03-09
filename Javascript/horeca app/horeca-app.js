const prijslijst = {
  fris: 3,
  bier: 1,
  wijn: 2,
};


function bestellingen() {
    while (true) {
      const drankje = prompt("Wat wilt u bestellen? (fris, bier, wijn)").toLowerCase();
      console.log(drankje)
      if (!drankje || !prijslijst[drankje]) {
        console.log("Sorry, dat drankje hebben we niet.");
        continue;
      } else (drankje === "stop") 
      
      const aantal = prompt(`Hoeveel ${drankje} wilt u bestellen?`);
      if (!aantal) {
        console.log("Bedankt voor uw bestelling!");
        break;
      }
      Bestelling(drankje, parseInt(aantal));
    }
  }
  bestellingen();

