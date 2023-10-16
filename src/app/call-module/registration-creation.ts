export class User
{
constructor(public firstName:string,public lastName:string,public phoneNumber:string,public address:string,public planCategory:string,public email:string,public password:string)
{

}
}

export let planCategory:string[]=['BASIC PLAN','STANDARD PLAN','PREMIUM PLAN','FAMILY PLAN','UNLIMITED PLAN']