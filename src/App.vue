<template>
  <p>{{ message }}</p>
  <Greetings></Greetings>
  <Introduction></Introduction>

</template>


<script>

import Introduction from "./components/introduction.vue"
export default{
  name:'App',
  components:{
    Introduction
  },
  data(){
    return {
      message:'Welcome to Vue Development'
    }
  }
}

</script>

