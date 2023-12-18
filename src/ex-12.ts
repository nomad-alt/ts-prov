// DIN UPPGIFT: Implementera en typeguard så att funktionen kan returnera priset oberoende om parametern är ett number eller som ett property i ett objekt. / 2 poäng

type Price = number | {price: number};

function getPrice(price: number | {price : number}) {  
    if (typeof price === 'number') {
        return price;
    } else {
        console.log('Oops!')
    }
 }    


// Testa funktionen
console.log(getPrice(100)); // Ska skriva ut 100
console.log(getPrice({ price: 100 })); // Ska skriva ut 100