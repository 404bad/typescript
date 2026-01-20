class Icecream {
  flavour: string;
  price: number;
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const vanila = new Icecream("vanila", 10);

vanila.flavour = "vanila";
vanila.price = 10;

//access modifiers :public

class Fruits {
  public flavour: string = "Banana";

  private secret = "bannana is don";
  reveal() {
    return this.secret; //ok
  }
}

class Shop {
  protected shopName = "fruits corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; //ok
  }
}

const c = new Fruits();

// /balance tis private
class wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const w = new wallet();

class Cup {
  readonly capacity: number = 250;
  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

//  use innderscore _ for private name conventon and  we can use getter and setter function
class ModernMahabharat {
  private _video = "video link";

  get video() {
    return this._video;
  }

  set video(value: string) {
    this._video = value;
  }
}

const m = new ModernMahabharat();
m.video = "modernmaharat.mp4";

//static
class statiLearn {
  static shopName = "chiya garage";
  constructor(public flavour: string) {}
}
console.log(statiLearn.shopName);

//abstract class
abstract class Drink {
  abstract make(): void;
}
class MyChild extends Drink {
  make() {
    console.log("Abstract");
  }
}

//composition
class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(protected heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
