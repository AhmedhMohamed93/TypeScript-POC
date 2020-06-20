 /***********************************************************************************************************************
  * All variables inside a class are --> Public by default                                                              *
  ***********************************************************************************************************************/
class Greetert {
    greeting: string;

    constructor(message: string)
    {
        this.greeting = message;
    }

    greet() {
        return "Welcome, " + this.greeting;
    }

}

let greeterobj = new Greetert("TypeScript");
console.log(greeterobj.greet());
greeterobj.greeting = "Ahmed";
console.log(greeterobj.greet());

 /***********************************************************************************************************************
  *                                        Inheritance between classes                                                  *
  ***********************************************************************************************************************/
class Animal
{
    private name: string;
    constructor(theName: string) 
    { 
        this.name = theName;
    }
}

class Rhino extends Animal 
{
    constructor() 
    { 
        super("Rhino"); 
    }
}

class Employee 
{
    private name: string;
    constructor(theName: string) 
    { 
        this.name = theName; 
    }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

rhino.name = "Dog"; /* Name variable is accessible only inside Class "Animal" as it was declared with "Private" access modifier*/

 /***********************************************************************************************************************
  *                                             ReadOnly modifiers                                                      *
  ***********************************************************************************************************************/

class BaseTest {
    readonly name: string;
    readonly numberOfTCs: number = 5;
    constructor (theName: string) 
    {
        this.name = theName;
    }
}
let dad = new BaseTest("Test Suite with 5 TCs");
dad.name = "Man with the 3-piece suit"; // error! name is readonly.
console.log(dad.name); // Note that its value can be read only and can't assign any value to it after declaration.
