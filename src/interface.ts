type juiceOrder = {
  type: string;
  sugar: number;
  deliver: boolean;
};

// function makeJuice(order: { type: string; sugar: number; deliver: boolean }) {
//   console.log(order);
// }

// function serveJuice(order: { type: string; sugar: number; deliver: boolean }) {
//   console.log(order);
// }

function makeJuice(order: juiceOrder) {
  console.log(order);
}

function serveJuice(order: juiceOrder) {
  console.log(order);
}

type jucieRecipe = {
  water: number;
  milk: number;
};
// interface jucieRecipe {
//   water: number;
//   milk: number;
// }

class MangoJuice implements jucieRecipe {
  water = 100;
  milk = 50;
}

interface JuciceGlass {
  size: "small" | "large";
}

class jucice implements JuciceGlass {
  size: "small" | "large" = "large";
}

//NOTE: a class can only implent an object type this error comes when we declare the custom type or union  nd trie to exted it
//NOTE: Tos solve this we use interface
//INFO: An interface in TypeScript defines the shape (structure) of an object or class—it specifies what properties or methods must exist, not how they work.
//INFO: Interface defines what must exist
//INFO: Class must provide all methods & properties
//INFO: Missing even one → TypeScript error

//union
//literal types
type JuiceType = "mango" | "Sugarcane" | "orange";

function orderJuice(t: JuiceType) {
  console.log(t);
}

//intersection
type BaseJuice = { filling: string };
type Extra = { masala: number };

type BananaJuice = BaseJuice & Extra;

const cup: BananaJuice = {
  filling: "badam",
  masala: 1,
};

//optinal

type User = {
  username: string;
  bio?: string;
};
const u1: User = { username: "kailash" };
const u12: User = { username: "kailash", bio: "kailash" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Auxilio",
  version: 1,
};

// cfg.appName = "awaaz";
cfg.version = 2;
