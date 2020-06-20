
/***********************************************************************************************************************
 * var declarations are accessible anywhere within their containing function,                                          *
 * module, namespace, or global scope - all which we’ll go over later on - regardless                                  *
 * of the containing block. Some peoplecall this var-scoping or function-scoping. Parameters are also function scoped. *
 ***********************************************************************************************************************/
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns '11'


 /***********************************************************************************************************************
 * When a variable is declared using let, it uses what some call lexical-scoping or block-scoping. Unlike variables     *
 * declared with var whose scopes leak out to their containing function, block-scoped variables are not visible         *
 *outside of their nearest containing block or for-loop.                                                                *
 ***********************************************************************************************************************/

function f1(input: boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    return b;
}

 /***********************************************************************************************************************
 * They are like let declarations but, as their name implies, their value cannot be changed once they are bound.        *
 *  In otherwords, they have the same scoping rules as let, but you can’t re-assign to them.                            *                                         *
 ************************************************************************************************************************/

const numLivesForCat = 9;
const numLivesForCat = 5;




