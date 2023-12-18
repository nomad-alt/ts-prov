// DIN UPPGIFT: Definiera en index signature för Dictionary-typen samt implementera funktionerna addWord och getDefinition. / 3 poäng

type Dictionary<T> = {
    // Index signature ska vara här
    [key: string]: T;
  };
  
  function createDictionary<T>(): {
    addWord: (key: string, item: T) => void;
    getDefinition: (key: string) => T | undefined;
  } {
    const dictionary: Dictionary<T> = {};

    function addWord(key: string, item: T): void {
        dictionary[key] = item;
    }

    function getDefinition(key: string): T | undefined {
        return dictionary[key];
    }

    return { addWord, getDefinition };
  }
  
  // Testa funktionerna
  const myDictionary = createDictionary<string>();
  myDictionary.addWord("TypeScript", "A superset of JavaScript that adds static typing.");
  console.log(myDictionary.getDefinition("TypeScript")); // Ska skriva ut "A superset of JavaScript that adds static typing."
  myDictionary.addWord("JavaScript", "A dynamic programming language.");
  console.log(myDictionary.getDefinition("JavaScript")); // Ska skriva ut "A dynamic programming language."
  console.log(myDictionary.getDefinition("Java")); // Ska skriva ut undefined
  