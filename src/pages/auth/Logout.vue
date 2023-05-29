<template>
    <div class="d-flex justify-content-center align-items-center h-100vh w-100">
        <card class="w-50 h-50vh">
           <h1>Cerrando sesión...</h1>
        </card>         
    </div>
</template>
<script>
    import Login from "src/models/login";
    export default{
        created(){
            this.onLogOut();
        },

        methods:{
            async onLogOut(){
                let login = new Login();
                let resp =  await login.logOut();
                this.$router.push("/");
            }
        }
    }
</script>


<style scpped>
    body{
        background: #FBFBFB;
    }
</style>