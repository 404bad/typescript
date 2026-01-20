let response: any = "42";

let nemericLentgh: number = (response as string).length;
// this is force full type assertion
type Book = {
  name: string;
};

let bookString = '{"name":"who moved my cheese"}';

let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;
value = "";
value = [1, 2, 3];
value = 0.4;
value.toUpperCase();

let newvalue: unknown;
newvalue = "";
newvalue = [1, 2, 3];
newvalue = 0.4;
// newvalue.toUpperCase(); // new value is of type unknow

if (typeof newvalue === "string") {
  newvalue.toUpperCase();
}

//try catch block
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

//never

type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("redirecting to admin dashboard");
    return;
  }
  if (role === "user") {
    console.log("redirecting to user dashboard");
  }
  role;
}

function neverReturn(): never {
  while (true) {}
}
