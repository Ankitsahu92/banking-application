export interface AlertType {
    id: string;
    msg: string;
    alertType: string;
}

export interface UserType {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    date: Date;
}

export interface ServerErrorType {
    msg: string;
    value?: any;
    param?: string;
    location?: string;
}

export interface ClientErrorType {
    status: string;
    statusText: string;
}

export interface LoginParamsType {
    userName: string;
    password: string;
}

export interface SignupParams extends LoginParamsType {
    name: string;
    userType: string;
}

export interface EducationType {
    _id?: string;
    school: string;
    degree: string;
    fieldOfStudy: string;
    from: Date;
    to?: Date;
    description: string;
    current?: boolean;
}

export interface ExperienceType {
    _id?: string;
    jobTitle: string;
    company: string;
    location: string;
    from: Date;
    to?: Date;
    description?: string;
    current?: boolean;
}

export interface ProfileType {
    id: string,
    name: string,
    customerId: string,
    Phone: string,
    PAN: string,
    Aadhar: string,
    UploadPAN: string,
    UploadAadhar: string,
    SecurityQuestionAnswer: string,
}

export interface CommentType {
    _id?: string;
    user: string;
    avatar: string;
    username: string;
    content: string;
    date: Date;
}

export interface PostType {
    _id?: string;
    user: string;
    username: string;
    avatar: string;
    content: string;
    likes: string[];
    comments: CommentType[];
    date: Date;
}

export interface TransactionHistoryType {
    date: Date | string;
    amount: number;
    transactionType: string;
    referenceNumber: string;
    comment: string;
    tranferAccount: string;
}

export interface AccountType {
    id: string,
    isEnabled: boolean,
    initialDeposit: number,
    accountNumber: string,
    typeOfAccount: string,
    userID: string,
    transaction?: TransactionHistoryType[]
}

export interface OtherBeneficiaryAccountsType {
    accountNumber: string;
    id: string;
}


export interface BeneficiaryType {
    id: string,
    isEnabled: boolean,
    userID: string,
    acountHolderName: string,
    accountNumber: string,
    confirmAccountNumber: string,
    typeOfAccount: string,
}


export interface TransferMoneyType {
    id: string,
    tranferToID: string,
    tranferFromID: string,
    amount: number,
    comment: string
}


export interface DashboardType {
    account: AccountType,
    beneficiary: BeneficiaryType
    transferMoney: TransferMoneyType
}


