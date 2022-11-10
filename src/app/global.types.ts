export interface AlerrtType {
    id: string,
    msg: string,
    alerrt: string
}

export interface UserType {
    id: string,
    name: string,
    email: string,
    avatar: string
}

export interface ServerErrorType {
    msg: string,
    value?: any,
    parms?: string
    location?: string;
}