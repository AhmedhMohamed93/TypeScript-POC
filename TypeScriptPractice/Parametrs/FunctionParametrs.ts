 /***********************************************************************************************************************
  *                                         Optional function arguments                                                 *
  ***********************************************************************************************************************/

function TestPar(Name:string, Value:number,Test?:number)
{
    console.log(Name + " And Value is: "+Value + " And its Test is: "+Test);
}

 /****************************************************************************************************************************
  *   Note that calling this function with the following way will not generate an error as Test --> is an optional arguments *                                                *
  ****************************************************************************************************************************/
TestPar("Ahmed",15);

 /***********************************************************************************************************************
  *                                         Default function arguments                                                  *
  ***********************************************************************************************************************/
 function TestPara1(Name:string, Value:number = 15,Test?:number)
{
    console.log(Name + " And Value is: "+Value + " And its Test is: "+Test);
}

 /****************************************************************************************************************************
  *   Note that calling this function with the following way will not generate an error as Test --> is an optional arguments * 
  *   and Value --> has a default value = 15                                                                                 *
  ****************************************************************************************************************************/
 TestPara1("Ahmed");
