export interface IRegistration {
    username: string;
    fullName: string;
    password: string;
}

export interface IAuthentication {
    username: string;
    password: string;
}

export interface IAccount {
    accountType: string;
    accountBalance: number;
    approved: string;
}

export interface IApprovedAccount {
    accountNumber: number;
    approved: string;
}
