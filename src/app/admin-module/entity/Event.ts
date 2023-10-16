export class EventCdr 
{
  constructor(
   public eventTimestamp: string,
   public imsi: string,
   public msisdn: string,
   public eventIdentifier: string,
   public eventSource: string,
   public eventOutcome: string,
   public eventDuration: string,
   public userInfo: string
  )
  {

  }

}