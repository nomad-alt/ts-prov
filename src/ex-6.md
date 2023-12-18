### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.

Skillnader mellan Interface och Types:

Deklarationssammanslagning:
Interfaces kan ha flera namnsammanslagningar. Detta innebär att du kan deklarera ett interface med samma namn flera gånger och
de kommer att sammanslås till ett enda interface.
Types kan inte ha namnsammanslagningar. Om du försöker deklarera en typ med samma namn igen kommer det att resultera i ett fel. \*/

interface Example {
a: number;
}
interface Example {
b: number;
} // Sammanslås till { a: number, b: number }

type ExampleType = {
a: number;
}
type ExampleType = {
b: number;
} // Fel: Duplicate identifier 'ExampleType'.

Förlängning:
Interfaces kan utökas med andra interfaces, vilket gör det möjligt att återanvända och bygga på befintliga interfaces.
Types kan inte utökas på samma sätt, men du kan använda unions eller intersections för att skapa nya typer baserat på befintliga typer.

interface NewInterface extends BaseInterface {
anotherProperty: string;
} // Fungerar

type NewType = BaseType & {
anotherProperty: string;
}; // Fungerar med intersection

Implementering:
Du kan använda både interfaces och types när du implementerar en klass i TypeScript, men det är mer vanligt att använda interfaces för detta ändamål.

class ExampleClass implements BaseInterface {
color: Color = Color.Red;
}
