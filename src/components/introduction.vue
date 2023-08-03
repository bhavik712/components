<template>
    <div>
        <p>{{ introduction  }}</p>
    </div>
</template>

<script>
    export default {
        name:'Introduction',
        data(){
            return{
                introduction : 'My Name is Barad Bhavik'
            }
        }
    }
</script>
<style scoped>
    div{
        background-color: aqua;
        width: 200px;
    }
</style>

