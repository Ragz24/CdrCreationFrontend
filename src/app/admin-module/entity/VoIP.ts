export class VoIPCdr
{
    constructor
    (
    public callID: string,
    public callerIP: string,
    public calleeIP: string,
    public startTimestamp: string,
    public endTimestamp: string,
    public callDuration: number,
    public packetLoss: number,
    public jitter: number,
    public delay: number,
    public callType: string,
    public callDirection: string,
    public codec: string,
    public callRecordingStatus: string,
    public networkType: string,
    public callSetUpTime: number,
    public callTerminationReason: string,
    public callResult:string
    ) 
    {

    }

}