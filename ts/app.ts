// поліМорфізм - полі - багато, Морф - форма

class Character {
  firstName: string;
  lastName: string;
  private _age: number;
  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age;
  }

  protected get getAge(): number {
    return this._age;
  }
  protected set setAge(newAge: number) {
    this._age = newAge;
  }

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }

  set name(newFirstName: string) {
    this.firstName = newFirstName;
  }

  set lasttName(newLastName: string) {
    this.lastName = newLastName;
  }

  damage() {
    console.log("Стукнув на 0 демеджу");
  }
}

class Hero extends Character {
  superPower: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    superPower: string = "FireBoll"
  ) {
    //   Спосіб застосувати батьківський конструктор
    super(firstName, lastName, age);
    this.superPower = superPower;
  }

  public get age(): number {
    return this.getAge;
  }
  //   public set setAge(newAge: number) {
  //     this.age = newAge;
  //   }
  damage(): void {
    console.log("Стукаю на 1 демедж ");
  }
}

const Petro = new Character("Petro", "Petrovich", 40);

const heroPetro = new Hero("Petro", "Petrovich", 40);
// Petro.getAge();

console.log(heroPetro.age);
