const prijs = {
    bier: 1.5,
    wijn: 2.5,
    fris: 3,
  };

function bestellen() {
  const bestelling = [];
  let bestel = True
  while (bestel) {
    const drinken = prompt("Wat wilt u bestellen, kies uit (bier,wijn,fris)");
    if (!isDrinkAvailable(drinken)) {
      alert('Sorry, dat drankje hebben we niet. Kies a.u.b. uit bier, wijn of fris.');
      continue;
  }
}

function bestellen() {
  const bestelling = [];
  let bestel = true;
  while (bestel) {
    const drinken = prompt('Wat wilt u bestellen? (bier, wijn, fris)');
    if (!isDrinkAvailable(drinken)) {
      alert('Sorry, dat drankje hebben we niet. Kies a.u.b. uit bier, wijn of fris.');
      continue;
    }
    const amount = parseInt(prompt(`Hoeveel ${drinken} wilt u bestellen?`));
    if (isNaN(amount)) {
      alert('Sorry, u moet een getal invoeren.');
      continue;
    }
    bestelling.push({ drink: drinken, amount });
    const proceed = prompt('Wilt u nog iets bestellen? (ja/nee)');
    bestel = proceed === 'ja';
  }
  return bestelling;
}