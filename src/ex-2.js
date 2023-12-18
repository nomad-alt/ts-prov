// DIN UPPGIFT: Byt ut implicita any mot explicita typer och ändra felaktiga värden så att koden npm kompilerar utan några Typescript-felmeddelanden / 2 poäng
// Detta är ett program som slumpar fram aktiviteter för en grupp gäster :-)
var remainingGuests = 20;
while (true) {
    // Varje grupp ska ha mellan 5 och 10 gäster.
    var guestsToAssign = Math.floor(Math.random() * 5) + 5;
    var activity = void 0;
    var capacity = void 0;
    var requiresSupplies = void 0;
    switch (Math.floor(Math.random() * 5)) {
        case 0:
            activity = "balloon animals";
            capacity = 5;
            requiresSupplies = true;
            break;
        case 1:
            activity = "face painting";
            capacity = 1;
            requiresSupplies = true;
            break;
        case 2:
            activity = "juggling";
            capacity = 3;
            requiresSupplies = true;
            break;
        default:
            activity = "dancing";
            capacity = 10;
            break;
    }
    console.log("".concat(guestsToAssign, " of us will enjoy ").concat(activity, "."));
    for (var i = 0; i < guestsToAssign; i += capacity) {
        console.log("\t".concat(capacity, " will enter the ").concat(activity, " activity."));
    }
    remainingGuests -= guestsToAssign;
    if (remainingGuests < 0) {
        break;
    }
    console.log("We have ".concat(remainingGuests, " remaining guests to entertain.\n"));
}
console.log("We have entertained all of the guests!");
