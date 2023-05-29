<template>
    <div class="d-flex justify-content-center align-items-center h-100vh w-100">
        <card class="w-50 h-50vh">
            <Login 
                @onLoginSuccess='$router.push("/admin/overview")'
                @onExistLogin='$router.push("/admin/overview")'/>
        </card>         
    </div>
</template>
<script>
    import Login from '@/components/Auth/Login.vue';
    export default{
        components:{
            Login,
        },
    }
</script>


<style scpped>
    body{
        background: #FBFBFB;
    }
</style>