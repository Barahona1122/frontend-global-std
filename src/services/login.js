import api from "@/config/http-common";

export default class LoginService {
  async logIn(info) {
    const { data, success } = await api.send("login", "POST", null, info);
    // save data into local storage
    if(success === true)
        localStorage.setItem('user', JSON.stringify(data))

    return {
      data: data,
      success: success,
    };
  }

  async logOut(){
    const { data, success } = await api.send("logout", "POST");
    if(success === true){
      localStorage.removeItem("user");
    }
    return {
      data: data,
      success: success,
    };
  }

  async hasValidSession(){
    const { data, success } = await api.send("check-session", "POST", null, info);
  }
}
