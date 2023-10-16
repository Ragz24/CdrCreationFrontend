export class UserCallDetails
{
constructor(public callerSIM:string,public calleeSIM:string,public outgoingBTS:string,public incomingBTS:string,public callDuration:number,public planCategory:string,public callRate:number,public timeStamp:Date)
{

}
}


export class UserDetail
{
    constructor(public firstName:string,public phoneNumber:number)
    {

    }
}