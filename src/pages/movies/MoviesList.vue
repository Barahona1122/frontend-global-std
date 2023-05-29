<template>
  <div class="d-flex p-3 w-100">
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th v-for="name in table.columns" :key="name">
            {{ name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in movies" :key="data.id">
          <td>
            <span>{{ data.id }}</span>
          </td>
          <td>
            <span>{{ data.name }}</span>
          </td>
          <td>
            <span>{{ data.posted_date | formatDate }}</span>
          </td>
          <td>
            <span>{{ data.status_name }}</span>
          </td>

          <td>
            <div class="d-flex w-50">
              <div class="pl-2">
                <button class="btn btn-primary btn-sm" @click='$emit("editMovie", data)'>
                  Editar
                </button>
              </div>
              <div class="pl-2">
                <button class="btn btn-info btn-sm">Info</button>
              </div>
              <div class="pl-2">
                <button
                  :class="data.status == statusDeleted ? 'btn btn-sm btn-warning' : 'btn btn-sm btn-danger'  "
                  @click='$emit(data.status == statusDeleted ? "restoreMovie" : "deleteMovie", data.id)'>
                  {{data.status == statusDeleted  ? "Activar" : "Eliminar"}}
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import MoviesEdit from "./MoviesEdit.vue";
  import LTable from "src/components/Table.vue";
  import Card from "src/components/Cards/Card.vue";
  import {statusDeleted, statusActive, statusInactive} from 'src/objects/movies';
  const tableColumns = ["Id", "Nombre", "F. publicación", "Estado", ""];
  export default {
    components: {
      LTable,
      Card,
      MoviesEdit,
    },

    props: {
      movies: Array,
    },
    data() {
      return {
        table: {
          columns: [...tableColumns],
        },
        statusDeleted: statusDeleted,
        statusActive:statusActive,
        statusInactive:statusInactive,
      };
    },
  };
</script>
<style></style>
