// DIN UPPGIFT: Definiera en index signature för Dictionary-typen samt implementera funktionerna addWord och getDefinition. / 3 poäng
function createDictionary() {
    var dictionary = {};
    function addWord(key, item) {
        dictionary[key] = item;
    }
    function getDefinition(key) {
        return dictionary[key];
    }
    return { addWord: addWord, getDefinition: getDefinition };
}
// Testa funktionerna
var myDictionary = createDictionary();
myDictionary.addWord("TypeScript", "A superset of JavaScript that adds static typing.");
console.log(myDictionary.getDefinition("TypeScript")); // Ska skriva ut "A superset of JavaScript that adds static typing."
myDictionary.addWord("JavaScript", "A dynamic programming language.");
console.log(myDictionary.getDefinition("JavaScript")); // Ska skriva ut "A dynamic programming language."
console.log(myDictionary.getDefinition("Java")); // Ska skriva ut undefined
