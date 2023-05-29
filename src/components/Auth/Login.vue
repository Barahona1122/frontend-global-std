<template>
  <div
    class="w-100 d-flex justify-content-center align-items-center flex-flow-column h-100"
  >
    <Loader :width="100" :height="50" v-if="loading"/>
    <div class="w-100 d-flex justify-content-center">
      <div>
        <h2>LogIn</h2>
      </div>
    </div>
    <div class="w-50">
      <form>
        <div class="w-100">
          <base-input
            type="text"
            label="Email"
            placeholder="Ej. email@dns.com.mx"
            reqired
            v-model="login.email"
          >
          </base-input>
        </div>
        <div class="w-100">
          <base-input
            type="password"
            label="password"
            placeholder="Password"
            reqired
            v-model="login.password"
          >
          </base-input>
        </div>
        <div class="w-100">
          <button
            type="submit"
            :disabled="!login.isValid()"
            class="btn btn-primary btn-fill btn-block"
            @click.prevent="onLogin()"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseInput from "../Inputs/BaseInput.vue";
import Login from "src/models/login";

// PLUGINS
import Loader from "src/components/Loader/Loader.vue";
export default {
  components: { BaseInput, Loader },
  data() {
    return {
        loading: false,
        login: new Login(),
    };
  },

    created(){
        // CHECK IF EXIST SOME LOGIN
        if(this.login.hasLogin()){
          this.$emit("onExistLogin");
        }
    },

  methods: {
    onLogin() {
      if (!this.login.isValid()) {
        this.onShowErrors();
        return;
      }
      this.processLogin();
      
    },

    async processLogin(info) {
      this.loading = true;
      let data = await this.login.logIn();
      if(!data.success){
        this.onShowErrors();
        this.loading = false;
        return;
      }
      this.$emit("onLoginSuccess");
    },

    onShowErrors(title = "Datos no validos", message = "Los datos ingresados no son validos!"){
        this.$toast.error({
          title: title,
          message: message,
        });
    }
  },
};
</script>
