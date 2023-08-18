export interface User {
    userId?: number;
    firstName: string;
    middleName?: string;
    lastName: string;
    roleId: number;
    email: string;
    isActive: boolean;
}