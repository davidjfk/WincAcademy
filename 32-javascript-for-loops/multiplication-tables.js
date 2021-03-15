/*
2. Multiplication tables
Iedereen kent ze nog wel: de tafel tabellen van de basischool. We gaan nu een script schrijven dat de tafel tabellen voor je print in de console.
Schrijf een loop die "iterate" van 0 tot 10.
Gebruik voor het eerste voorbeeld de tafel van 9.
Console.log elke keer de uitkomst van de tafel van 9 naar de console.
*/
console.log('De tafel van 9: ')
for (let i = 1; i <= 10; i++) {
    console.log("\n" + i + " x 9 = " + i * 9);
}


/*
bonus:gebruik een geneste for-loop, om alle tafels van 1 t/m 10 te printen naar de console. 
Het resultaat bestaat uit 100 regels code in je console. 
*/
console.log('Alle tafels van 1 t/m 10: ')
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log("\n" + i + " x " + j + " = " + i * j);
    }
}
