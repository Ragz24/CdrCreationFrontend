export class BillingCdr 
{
  constructor(
    public subscriberID: string,
    public timestamp: string,
    public serviceType: string,
    public originatingPhoneNumber: string,
    public terminatingPhoneNumber: string,
    public callDuration: number,
    public rate:string,
    public totalCost: string,
    public taxAndSurcharges: string,
    public billingPeriod: string,
    public paymentMethod: string,
    public qualityOfServiceMetrics: string,
    public paymentStatus: string
  )
  {

  }

}