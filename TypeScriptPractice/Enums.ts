 /***********************************************************************************************************************
  *                                         Enums declaration with functions                                            *
  ***********************************************************************************************************************/

 enum Direction 
 {
    Up = 1,
    Down,
    Left,
    Right,
}

function testdirection(Way:string, dir:Direction):void
{
    console.log(Way + " " + dir);
}

testdirection("Go to street .No",Direction.Down);

 /***********************************************************************************************************************
  *                                         Heterogeneous enums                                                         *
  ***********************************************************************************************************************/
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

function respond(recipient: string, message: BooleanLikeHeterogeneousEnum): void 
{
    console.log(recipient + " with State " + message);
}

respond("Princess any Name", BooleanLikeHeterogeneousEnum.Yes)