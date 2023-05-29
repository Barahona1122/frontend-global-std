<template>
  <div class="content" v-if="showTable">
    <div class="pt-3 pl-3" v-if="loading">
        <Loader  :width="95"/>
    </div>
    <div class="container-fluid" v-else>
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <div class="d-flex justify-content-between">
                <div>
                  <h4 class="card-title">Peliculas</h4>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-outline-info btn-sm"
                    @click.prevent="(showTable = false), (movie = {})"
                  >
                    Nueva pelicula
                  </button>
                </div>
              </div>
            </template>
            <div class="d-flex p-3">
              <h3 v-if="movies.length == 0">No tada found..</h3>
              <MoviesList
                :movies="movies"
                @editMovie="editMovie"
                @deleteMovie="deleteMovie"
                @restoreMovie="restoreMovie"
                v-else
              />
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <div class="content" v-else>
    <Loader v-if="loading" />
    <MoviesEdit
      @cancel="showTable = true"
      :movie="movie"
      @save="saveMovie"
      v-else
    />
  </div>
</template>
<script>
// PLUGINS
import Loader from "src/components/Loader/Loader.vue";

import MoviesEdit from "./MoviesEdit.vue";
import MoviesList from "./MoviesList.vue";
import Card from "src/components/Cards/Card.vue";
import Movies from "src/models/movies";

export default {
  components: {
    Card,
    MoviesEdit,
    MoviesList,
    Loader,
  },
  data() {
    return {
      showTable: true,
      movies: [],
      movie: new Movies(),
      loading: false,
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      this.loading = true;
      let data = await this.movie.movies();
      this.movies = data;
      this.loading = false;
    },

    editMovie(data) {
      this.movie = data;
      this.showTable = false;
    },

    async saveMovie(info) {
      this.loading = true;
      this.movie = info;
      let data = await this.movie.saveMovie();
      if (data === true) await this.getMovies();
      this.showTable = true;
      this.loading = false;
    },

    async deleteMovie(id) {
      this.loading = true;
      let data = await this.movie.deleteMovie(id);
      if (data === true) await this.getMovies();
      this.loading = false;
    },

    async restoreMovie(id) {
      this.loading = true;
      let data = await this.movie.restoreMovie(id);
      if (data === true) await this.getMovies();
      this.loading = false;
    },
  },
};
</script>
<style></style>
