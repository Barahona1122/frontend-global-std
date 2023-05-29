<template>
  <div class="content" v-if="showTable">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <div class="d-flex justify-content-between">
                <div>
                  <h4 class="card-title">Turnos</h4>
                </div>
                <div>
                  <button
                    type="submit"
                    class="btn btn-outline-info btn-sm"
                    @click.prevent="(showTable = false), (shift = {})"
                  >
                    Nuevo Horario
                  </button>
                </div>
              </div>
            </template>

            <div class="d-flex p-3">
              <MoviesShiftList 
                :items="items"
                @editElement="editElement"
                @deleteElement="deleteElement"
                @restoreElement="restoreElement"
                />
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <div class="contenr" v-else>
    <MoviesShiftEdit @cancel="showTable = true" :shift="shift" @save="saveElement"  />
  </div>
</template>
<script>
import MoviesShiftEdit from "src/pages/movies_shift/MoviesShiftEdit.vue";
import MoviesShiftList from "./MoviesShiftList.vue";
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";

import Shift from "src/models/shift";
export default {
  components: {
    LTable,
    Card,
    MoviesShiftEdit,
    MoviesShiftList,
  },
  data() {
    return {
      showTable: true,
      loading:false,
      items: [],
      shift: new Shift(),
    };
  },

  mounted(){
    this.getShift();
  },

  methods: {
    async getShift() {
      this.loading = true;
      const { data, success } = await this.$api.send("shift", "GET");
      if (success === false) return;
      this.items = data.shift;
      this.loading = false;
    },

    editElement(data) {
      this.shift = data;
      this.showTable = false;
    },

    async saveElement(info) {
      this.loading = true;
      this.shift = info;
      let data = await this.shift.saveShift();
      if (data === true) await this.getShift();
      this.showTable = true;
      this.loading = false;
    },

    async deleteElement(id) {
      this.loading = true;
      let data = await this.shift.deleteShift(id);
      if (data === true) await this.getShift();
      this.loading = false;
    },

    async restoreElement(id) {
      this.loading = true;
      let data = await this.shift.restoreShift(id);
      if (data === true) await this.getShift();
      this.loading = false;
    },
  },
};
</script>
<style></style>
