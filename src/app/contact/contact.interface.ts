export interface ISendMessageRequestModel {
    name: string;
    email: string;
    message: string;
}

export interface ISendMessageResponseModel {
    isSendSuccess: boolean;
    messageSid: string;
}
