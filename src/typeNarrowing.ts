function getJuice(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} juice....`;
  }
  return `Juice order:${kind}`;
}

function serveJuice(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default mango juice`;
}

// NOTE: Type narrowing is the process of refining a variable’s type from a broader type to a more specific type so that TypeScript can safely allow operations that only apply to that specific type

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// Common Type Narrowing Techniques
// typeof checks → for string, number, boolean, symbol, undefined
// instanceof checks → for classes and objects
// Equality checks → check against specific values
// in operator → check if an object has a property
// User-defined type guards → custom functions returning x is Type

class mangoJucice {
  serve() {
    return `Serving mango juice`;
  }
}

class pineappleJucice {
  serve() {
    return `Serving pineapple juice`;
  }
}

function serve(juice: mangoJucice | pineappleJucice) {
  if (juice instanceof mangoJucice) {
    return juice.serve();
  }
}

type JuiceOrder = {
  type: string;
  sugar: number;
};

function isJuiceOrder(obj: any): obj is JuiceOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: JuiceOrder | string) {
  if (isJuiceOrder(item)) {
    return `Serving ${item.type} juice with ${item.sugar}`;
  }
  return `Serving custom chai ${item}`;
}

type bananaJuice = { type: "banana"; sugarLevel: number };
type mangoJuice = { type: "mango"; sugarLevel: number };

type juice = bananaJuice | mangoJuice;

function MakeJuice(order: juice) {
  switch (order.type) {
    case "banana":
      return `Banana Juice`;
      break;
    case "mango":
      return `mango Juice`;
      break;
    default:
      break;
  }
}

function brew(order: bananaJuice | mangoJuice) {
  if ("sugarLevel" in order) {
    //
  }
}

function isStringArray(arr: unknown): arr is string[] {
  // Check if arr is an array
  if (!Array.isArray(arr)) return false;

  // Check if every element is a string
  return arr.every((item) => typeof item === "string");
}

//Note: A type guard is a runtime check that allows TypeScript to narrow down the type of a variable within a specific block of code.
// function printLength(value: string | number) {
//   console.log(value.length); // Error: number may not have 'length'
// }

function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // TypeScript knows it's a string
  }
}

class Person {
  constructor(public name: string) {}
}

function greet(obj: Person | string) {
  if (obj instanceof Person) {
    console.log(obj.name); //  TypeScript knows obj is Person
  }
}

// in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // TypeScript knows it's a Fish
  }
}
