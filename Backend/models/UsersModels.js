export class UsersModels {
    constructor(userData) {
        this.email = userData.email;
        this.phone = userData.phone;
        this.password_hash = userData.password_hash;
    }
}