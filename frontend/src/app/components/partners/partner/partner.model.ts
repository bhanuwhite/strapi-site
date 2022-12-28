export interface Partner{
    id:number;
    attributes: PartnerAttributes
}
export interface APIResponse {
    data: Partner[];
}
export interface PartnerAttributes {
    id:number;
    Company_Name:string;
    Domain:string;
    Owned_By:string;
    Mobile:string;
    Added_On:string;
    Description:string;
}