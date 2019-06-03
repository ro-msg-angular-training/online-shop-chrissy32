export class Address {
    public addressCountry: string;
    public addressCity: string;
    public addressCounty: string;
    public addressStreet: string;

    constructor(addressCountry: string, addressCity: string, addressCounty: string, addressStreet: string) {
        this.addressCountry = addressCountry;
        this.addressCity = addressCity;
        this.addressCounty = addressCounty;
        this.addressStreet = addressStreet;
    }
}