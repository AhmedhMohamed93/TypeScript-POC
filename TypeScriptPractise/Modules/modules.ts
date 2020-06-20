 /***********************************************************************************************************************
  *                                   Export Classes from file to others                                                *
  ***********************************************************************************************************************/
export class system
{
    OperatingSys: string;
    NoOfUsers: number;
    constructor ()
    {
        this.OperatingSys = "Windows";
        this.NoOfUsers = 5;
    }

     Display():void
    {
        console.log("Operating System Type is: " + this.OperatingSys + "\n"+"Number of Users is: "+ this.NoOfUsers);
    }
}