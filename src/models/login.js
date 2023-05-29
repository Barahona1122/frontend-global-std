import LoginService from '@/services/login';
export default class Login {

  constructor(email = '', password = '') {
    this.email = email;
    this.password = password;
  }

  hasLogin(){
    // TODO: must be into LoginService and check and backend
    let data = localStorage.getItem('user');
    if(typeof(data) != undefined && data != null){
      return true;
    }
    return false;
  }

  isValid(){
    return this.isValidEmail(this.email) && this.password != "";
  }

  isValidEmail() {
    return /^[^@]+@\w+(\.\w+)+\w$/.test(this.email);
  }

  async logIn(info){
    let login = new LoginService();
    let resp = await login.logIn(this);
    return resp;
  } 
  
  async logOut(){
    let login = new LoginService();
    let resp = await login.logOut();
    return resp;
  } 
 
}