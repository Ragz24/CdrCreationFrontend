export class LocationCdr 
{
    constructor
    (
        public updateTimestamp:string,
        public cellID: string,
        public latitude: number,
        public longitude: number,
        public locationAreaCode: number,
        public roamingStatus: string,
        public signalStrength: number,
        public locationAccuracy: number,
        public locationSource: string,
        public locationMethod: string,
        public imei: string
    )
    {

    }
}