import ShiftService from '@/services/shift';


export default class Shift {

  constructor(id = 0, name = '',status = 1) {
    this.id = id;
    this.name = name;
    this.status = status;
  }


  async getShift(){
    let shift = new ShiftService();
    let resp = await shift.getShift();
    return ;
  }

  // VALIDATIONS

  isValidUpdate(){
    return this.id != 0 && this.name != "";
  }

  isValidCreate(){
    return this.name != "";
  }

  isCreate(){
    return this.id == 0;
  }

  validateFields(){
    if(this.isCreate()){
      return this.isValidCreate();
    }else if(this.isValidUpdate()){
      return this.isValidUpdate();
    }
  }


  getMethodType(){
    return this.id != 0 ? "PUT" : "POST";
  }


  getUrl(){
    return this.id != 0 ? "update-shift" : "store-shift";
  }

  async saveShift(){
    let shift = new ShiftService();
    let resp = await shift.saveShift(this.getUrl(), this.getMethodType(), this);
    return resp.success;
  }


  async deleteShift(id){
    let shift = new ShiftService();
    let resp = await shift.deleteShift(id);
    return resp.success;
  } 

  async restoreShift(id){
    let shift = new ShiftService();
    let resp = await shift.restoreShift(id);
    return resp.success;
  }   
}