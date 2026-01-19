let subs: number | string = "1M";

//usage

let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";

let airlineseat: "aisle" | "window" | "middle" = "aisle";
airlineseat = "aisle";

// any --> by pass
const orders = ["12", "20", "28", "42"];
let currentorder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentorder = order;
    break;
  }
  currentorder = "11";
}
console.log(currentorder);

//avoid these as possible
