export class Login {
    UserName: string;
    Password: string;
    constructor(){
      this.UserName ='';
      this.Password='';
    }
}
export const validationexpressions: any [] = [
    {email :'/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/'},
    {phonenumber : '^[0-9]*$'}
];