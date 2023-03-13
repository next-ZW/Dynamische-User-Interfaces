const prijslijst = {
  fris: 3,
  bier: 1,
  wijn: 2,
};
const bonnetje = "";


let totale_prijs = 0;
let stop = false;
let drinken;
let productAmount = NaN;
let amountNaN = true;

function bestelling(){ 
while (!stop) {
  drinken = prompt("Wat zou u willen bestellen? kies uit fris bier wijn");

  if (drinken === "stop") {
    stop = true;
  }
  else {
    if (!(drinken in dranken)) {
      alert(`Momenteel is ${drinken} uitverkocht. Sorry voor dit ongemak.`);
    }
    else {
      while (amountNaN) {
        productAmount = parseInt(prompt(`Hoeveel ${drinken} wilt u bestellen?`));
        if (!isNaN(productAmount)) {
          amountNaN = false;
        }
      }

      amountNaN = true;

      if (drinken in bonnetje) {
        bonnetje[drinken] += productAmount;
      }
      else {
        bonnetje[drinken] = productAmount;
      }

      totale_prijs += productAmount * dranken[drinken];
    }
  }
}
}

for (const [key, value] of Object.entries(bonnetje)) {
  const display = `${value}x ${key} - €${(value * dranken[key]).toFixed(2)}`
  document.getElementById("Bonnetje").innerText = "Uw Bonnetje - Bedankt voor het bestellen!";
  document.getElementById("Dranken").innerText += display + '\n';
}

if (totale_prijs > 0) {
  document.getElementById("Totale_prijs").innerText = "Totaal: €" + totale_prijs.toFixed(2);
}
