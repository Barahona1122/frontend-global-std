import api from "@/config/http-common";

export default class MoviesService {
  
  async movies() {
    const { data, success } = await api.send("movies","GET");
    return success && typeof(data.movies) != undefined && data.movies != null ?  data.movies : [];
  }

  async saveMovie(url,method,movieData){
    const { data, success } = await api.send(url,method,null, movieData);
    return {
      data:data,
      success:success
    };
  }

  async deleteMovie(id){
    const { data, success } = await api.send("delete-movie","PUT",null, {id:id});
    return {
      data:data,
      success:success
    };
  }

  async restoreMovie(id){
    const { data, success } = await api.send("restore-movie","PUT",null, {id:id});
    return {
      data:data,
      success:success
    };
  }
}
