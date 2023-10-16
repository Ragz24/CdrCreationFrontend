export class RoamingCdr
{
    constructor
    (
        public cdrType: string,
        public startTimestamp: string,
        public endTimestamp:string,
        public callerIMSI: string,
        public callerMSISDN: string,
        public callerNetwork: string,
        public callerLocation: string,
        public callerCurrentNetwork: string,
        public calleeNumber: string,
        public calleeLocation: string,
        public calleeNetwork: string,
        public callType: string,
        public callResult: string,
        public callTerminationReason: string,
        public callDuration: number,
        public roamingPartner: string,
        public roamingCharges: string
    )
    {

    }
}