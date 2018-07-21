export interface User{
    uid: string;
    email: string;
    password: string;
    //retypePassword: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    eventList: Array<any>;
    friendList: Array<any>;
    blockedUsers: Array<any>;
    location: any;
}