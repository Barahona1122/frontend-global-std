<template>
    <div 
        clas="loader-class"
        style="position: absolute;background: #626262;z-index: 1;opacity: 0.5;display:flex; justify-content:center;align-items:center;"
        :style="'width: '+width+'%;height: '+height+'vh;'">
        <div>
            <h1>Cargando...</h1>
        </div>
    </div>    
</template>
<script>
import internal from 'stream';

    export default{
        props:{
            width:{
                type:Number,
                default:98
            },

            height:{
                type:Number,
                default:100
            },
        }
    }
</script>

<style lang="scss">
    .loader-class{
        width: 100%;
        height: 100vh;
        position: absolute;
        background: #626262;
        z-index: 1;
        opacity: 0.5;
    }
</style>