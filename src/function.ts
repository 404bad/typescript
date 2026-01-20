function greeter(fn: (a: string) => void) {
  fn("Hello World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

//NOTE: The syntax (a: string) => void means “a function with one parameter, named a, of type string, that doesn’t have a return value”. Just like with function declarations, if a parameter type isn’t specified, it’s implicitly any

//INFO: we can use a type alias to name a function type:

type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  console.log("hi");
}

//Generic function
function firstElement(arr: any[]) {
  return arr[0];
}

function secondElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
