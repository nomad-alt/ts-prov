// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.
var getRisingStockDays = function (stockMeasurements) {
    return stockMeasurements.filter(function (data) { return data.price > 100; });
};
var stockMeasurements = [
    {
        day: "Monday",
        price: 105,
    },
    {
        day: "Tuesday",
        price: 98,
    },
    {
        day: "Wednesday",
        price: 110,
    },
];
var profitableDays = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
