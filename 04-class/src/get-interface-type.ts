const symid=Symbol("id");
interface Product{
    [symid]: number;
    name: string;
    price: number;
    account: string;
}
type A=Product["name"];
type B=Product["price"|"account"];
type C=Product[typeof symid];
type D=keyof Product;
let d:D="symid";

type Allkeys<T>=T extends any ?T : never
type E=Allkeys<keyof Product>;
console.log(d);