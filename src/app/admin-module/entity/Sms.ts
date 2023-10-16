export class Sms
{
constructor(
public timeStamp:string,
public senderNumber:string,
public receiverNumber:string,
public messageContent:string,
public messageLength:number,
public messageType:string,
public messageStatus:string,
public deliveryTimeStamp:string,
public messageDirection:string,
public messageID:string,
public connectionType:string

)
{

} 



}