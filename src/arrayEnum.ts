const icecreamFlavours: string[] = ["vanila", "chocholate"];

const icecreamPrice: number[] = [10, 20];

const rating: Array<number> = [4.5, 6.5];

type Icecream = {
  name: string;
  price: number;
};
const menu: Icecream[] = [
  { name: "vanila", price: 10 },
  { name: "chocholate", price: 10 },
];

const cities: readonly string[] = ["Ktm", "Dhn"];
// cities.push("ltp");

//tuple
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let myTuple: [string, number];
myTuple = ["Vanila", 20];
// myTuple = [20, "vanila"]; // here the order matters

let userInfo: [string, number, boolean?];
userInfo = ["kailash", 100];

const location: readonly [number, number] = [10, 20];

const myItems: [name: string, price: number] = ["hero", 100]; // this is named tupe

//ENUM

enum cupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = cupSize.MEDIUM;

enum Status {
  PENDING = 100,
  SERVES,
  CANCELLED,
}
enum chaiTyoe {
  MASALA = "masala",
  "GINGER" = "ginger",
}
function makeChai(type: chaiTyoe) {
  console.log(`Making ${type}`);
}
makeChai(chaiTyoe.MASALA);

//enum is prefred to carry the same datatype mean iif all string ,all number>
