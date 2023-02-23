const hoeveel_giraffen = parseInt(prompt("Hoeveel Giraffen zijn er"));
const hoeveel_struisvogels = parseInt(prompt("Hoeveel Struisvogels zijn er"));
const hoeveel_zebras = parseInt(prompt("Hoeveel zebras zijn er"));


function bereken_poten(hoeveel_giraffen,hoeveel_struisvogels,hoeveel_zebras){
    const Giraffen = hoeveel_giraffen * 4;
    const Struisvogels = hoeveel_struisvogels * 2;
    const zebras = hoeveel_zebras * 4;
    const totaal = Giraffen + Struisvogels + zebras;
    return totaal;
} 


console.log(bereken_poten(hoeveel_giraffen,hoeveel_struisvogels,hoeveel_zebras))

