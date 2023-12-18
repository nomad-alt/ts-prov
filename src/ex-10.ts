// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.
function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}


// 2. Ge ett exempel på en funktion med två generiska typer.
function makePair<K, V>(key: K, value: V): { key: K, value: V } {
    return { key, value };
}

console.log(makePair("name", "sandra"));  // { key: 'name', value: 'sandra' }
console.log(makePair("age", 28));  // { key: 'age', value: 28 }


// 3. Ge ett exempel på ett interface med en generisk typ.

interface Box<T> {
    item: T;
}

function unbox<T>(box: Box<T>): T {
    return box.item;
}

const stringBox: Box<string> = { item: "Hello, TypeScript!" };
console.log(unbox(stringBox));  // "Hello, TypeScript!"