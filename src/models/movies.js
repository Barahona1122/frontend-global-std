import MoviesService from '@/services/movies';
import moment from 'moment';


export default class Movies {

  constructor(id = 0, name = '', posted_date = '', status = 1) {
    this.id = id;
    this.name    = name;
    this.posted_date =  moment(String(posted_date)).format('DD/MM/YYYY');
    this.status     = status;
  }

  async movies(){
    let movies = new MoviesService();
    let resp = await movies.movies();
    return resp;
  }

  // VALIDATIONS
  isValidUpdate(){
    return this.id != 0 && this.name != "" && this.posted_date != "";
  }

  isValidCreate(){
    return this.name != "" && this.posted_date != "";
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
    return this.id != 0 ? "update-movie" : "store-movie";
  }

  async saveMovie(){
    let movies = new MoviesService();
    let resp = await movies.saveMovie(this.getUrl(), this.getMethodType(), this);
    return resp.success;
  }


  async deleteMovie(id){
    let movies = new MoviesService();
    let resp = await movies.deleteMovie(id);
    return resp.success;
  } 

  async restoreMovie(id){
    let movies = new MoviesService();
    let resp = await movies.restoreMovie(id);
    return resp.success;
  }   
}