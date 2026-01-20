// interface shapes the data
interface Chai {
  flavour: String;
  price: number;
  milh?: boolean;
}

const masala: Chai = {
  flavour: "masala",
  price: 30,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "Kailash Cafe" };

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMsachine {
  start(): void;
  stop(): void;
}

const machine: TeaMsachine = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("stop");
  },
};

//index Signatures

interface ChaiRtaings {
  [flavour: string]: number;
}

const ratings: ChaiRtaings = {
  masala: 45,
};

interface User {
  name: String;
}

interface User {
  age: number;
}

const u: User = {
  name: "Kailash",
  age: 30,
};

//interface merge automatially
//interce can be ingerited
interface A {
  a: string;
}
interface B {
  b: string;
}
interface c extends A, B {}
