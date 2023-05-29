<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Turnos</h4>
            </template>
            {{shift}}
            <div class="d-flex p-3">
              <form>
                <div class="col-12">
                  <base-input
                    type="time"
                    label="Turno"
                    placeholder="Turno"
                    v-model="shift.name"
                  >
                  </base-input>
                </div>

                <div class="col-12 pl-4">
                  <label>
                    <input
                      type="checkbox"
                      name="avitive"
                      v-model="shift.status"
                    />
                    Activado ?
                  </label>
                </div>

                <div class="w-100 text-center d-flex justify-content-center">
                  <div class="p-3">
                    <button
                      type="submit"
                      class="btn btn-primary btn-fill btn-block"
                      @click.prevent="save"
                    >
                      Guardar
                    </button>
                  </div>
                  <div class="p-3">
                    <button
                      type="button"
                      class="btn btn-danger btn-fill btn-block"
                      @click="$emit('cancel')"
                    >
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
  import Shift from 'src/models/shift';

  // COMPONENTS
  import Card from 'src/components/Cards/Card.vue';
  import InputFile from 'src/components/Inputs/InputFile.vue';
  export default {
    components: {
      Card,
      InputFile,
    },
    props:{
      shift:Object,
    },
    data () {
      return {
        shiftModel: new Shift(this.shift.id, this.shift.name, this.shift.status),
      }
    },
    mounted(){
    },
    methods:{
      save(){
        console.log(this.shiftModel);
        if(!this.shiftModel.validateFields()){
          this.$toast.error({
            title:'Error',
            message:'Favor de llenar todos los campos!'
          })
          return;
        }
        this.$emit('save',this.shiftModel);
      }

    }
  }
</script>
<style></style>
