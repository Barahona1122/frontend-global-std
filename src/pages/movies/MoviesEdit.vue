<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Peliculas</h4>
            </template>
            <div class="d-flex p-3">
              {{movieModel}}
              <form>
                <div class="row">
                  <div class="col-12">
                    <base-input type="text"
                              label="Nombre"
                              placeholder="Nombre"
                              v-model="movieModel.name">
                    </base-input>
                  </div>
                  <div class="col-12">
                    <base-input type="date"
                              label="F. publicación"
                              placeholder="postDate"
                              v-model="movieModel.posted_date">
                    </base-input>
                  </div>

                  <div class="col-12">
                    <label>
                      <input 
                        type="checkbox"
                        name="avitive"
                        v-model="movieModel.status"
                      >
                      Activado
                    </label>
                  </div>            
                </div>

                <div class="col-12  pb-5">
                  <InputFile/>
                </div>
                <div class="text-center d-flex justify-content-center">
                  <div class="w-25 pr-3">
                    <button 
                      :disabled="!movieModel.validateFields()"
                      type="submit" 
                      class="btn btn-primary btn-fill btn-block" @click.prevent='save()'>
                      Guardar
                    </button>
                  </div>
                  <div class="w-25">
                    <button 
                      type="button"
                      class="btn btn-danger btn-fill btn-block"
                      @click='$emit("cancel")'>
                      Cancelar
                    </button>
                  </div>
                </div>
                <div class="clearfix"></div>
              </form>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // MODELS
  import Movies from 'src/models/movies';

  // COMPONENTS
  import Card from 'src/components/Cards/Card.vue';
  import InputFile from 'src/components/Inputs/InputFile.vue';
  export default {
    components: {
      Card,
      InputFile,
    },
    props:{
      movie:Object,
    },
    data () {
      return {
        movieModel: new Movies(this.movie.id, this.movie.name, this.movie.posted_date, this.movie.status),
      }
    },
    mounted(){
    },
    methods:{
      save(){
        if(!this.movieModel.validateFields()){
          this.$toast.error({
            title:'Error',
            message:'Favor de llenar todos los campos!'
          })
          return;
        }
        this.$emit('save',this.movieModel);
      }

    }
  }
</script>
<style>

</style>
