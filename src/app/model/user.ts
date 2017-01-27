import { UserRole } from  './user.role';

export class User {
    
    constructor(email: string, role : UserRole) {
        this.email = email;
        this.role = role;
    }
    
    email: string;

    role: UserRole;

}