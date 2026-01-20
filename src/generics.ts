// templates
// mke code reusable

function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavour: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("masala", { flavour: "masala" });

//Generics eith interface
interface Box<T> {
  content: T;
}

//usage

const number: Box<number> = { content: 10 };
const name: Box<string> = { content: "rec" };

//readl world use case in api call promises

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavour: string }> = {
  status: 200,
  data: {
    flavour: "garam",
  },
};
