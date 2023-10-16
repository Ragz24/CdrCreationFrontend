export class VideoCdr 
{
  constructor(
    public callStartTimestamp: string,
    public callEndTimestamp: string,
    public callerIdentifier: string,
    public calleeIdentifier: string,
    public callDuration: number,
    public networkType: string,
    public callQualityMetrics: string,
    public callType: string,
    public callStatus: string,
    public deviceInformation: string,
    public networkUsage: string,
    public codecInformation: string,
    public callIdentifier: string
  )
  {

  }

}