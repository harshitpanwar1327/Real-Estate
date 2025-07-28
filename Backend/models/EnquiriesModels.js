export class EnquiriesModels {
    constructor(enquiriesData) {
        this.name = enquiriesData.name;
        this.email = enquiriesData.email;
        this.phone = enquiriesData.phone;
        this.subject = enquiriesData.subject;
        this.message = enquiriesData.message;
    }
}