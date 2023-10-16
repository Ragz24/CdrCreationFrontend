export class Mms
{
    constructor(
    public messageId:string,
    public senderPhoneNumber: string,
    public receiverPhoneNumber: string,
    public messageDirection: string,
    public messageType: string,
    public networkType: string,
    public contentType: string,
    public contentSize: number,
    public contentFormat: string,
    public senderTimestampStr: string,
    public receiverTimestampStr: string,
    public messageStatus:string
    )
    {

    }
   
}    
    