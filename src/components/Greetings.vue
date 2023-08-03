<template>
    <p> {{ welcomeMsg }}</p>
</template>

<script>
export default{
    name:'Greetings',
    data(){
        return{
            welcomeMsg:'Good Evening'
        }
    }
}
</script>

<style scoped lang="scss">
    p:hover{
        color: darken(#F00,10%);
    }

</style>
