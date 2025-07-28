export class UsersModels {
    constructor(userData) {
        this.email = userData.email;
        this.password_hash = userData.password_hash;
    }
}