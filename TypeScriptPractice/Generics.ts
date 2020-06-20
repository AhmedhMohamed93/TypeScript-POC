 /***********************************************************************************************************************
  *                                              Function with Generics                                                 *
  ***********************************************************************************************************************/
function identity<T>(arg: T): T {
    return arg;
}


let test = identity<number>(15);
console.log(test);

let test1 = identity<string>("TypeScript");
console.log(test1);
