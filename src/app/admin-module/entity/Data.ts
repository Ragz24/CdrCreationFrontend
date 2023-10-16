export class DataCdr 
{
  constructor(
   public sessionStartTime: string,
   public sessionEndTime: string,
   public sessionDirection: string,
   public sessionType: string,
   public sessionDuration: number,
   public sessionStatus: string,
   public dataUsage: number, 
   public callerIPAddress: string,
   public calleeIPAddress: string
  )
  {

  }

}