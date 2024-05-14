export interface Iuser_register {
  userId: number;
  userName: string;
  emailId: string;
  fullName: string;
  role: string;
  createdDate: Date;
  password: string;
}


export interface Iuser_login {
  userName: string;
  password: string;
}
