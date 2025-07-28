export class AdminsModels {
    constructor(adminData) {
        this.email = adminData.email;
        this.password_hash = adminData.password_hash;
    }
}