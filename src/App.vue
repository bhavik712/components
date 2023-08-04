<template>

  <!-- local componant  -->
  <p>{{ message }}</p>

  <!-- Dynamic componant -- Morning & Evening  -->
  <select v-model="time">
    <option value="Morning">Morning</option>
    <option value="Evening">Evening</option>
  </select>

  <KeepAlive>
    <component :is="time"></component>
  </KeepAlive>
  
  <!-- Global componant -->
  <Greetings></Greetings>

  <!-- Local Componant accesing data property AGE & trying tto manipulate it  -->
  <Introduction :myAge="age" @increment-age = "age++" @decrement-age = "age--"></Introduction>

  <!-- Local Componat accessing data property AGE & showing message accoding to it -->
  <voting :myAge="age"></voting>

  <!-- use case of Slot  -->
  <Loginform>
    <form>
      <input type="text" placeholder="Enter Your UserName">
      <input type="password" placeholder="Enter Your PassWord">
      <button>Submit</button>
    </form>
  </Loginform>
  <Contactform>
    <form>
      <input type="text" placeholder="Enter Your Fathers name">
      <input type="password" placeholder="Enter Your PassWord">
      <button>Submit</button>
    </form>
    
  </Contactform>

</template>


<script>

// importing componants 

import Introduction from "./components/introduction.vue"
import Voting from "./components/voting.vue";
import Loginform from "./components/loginform.vue";
import Contactform from "./components/contactform.vue";
import Morning from "./components/morning.vue";
import Evening from "./components/evening.vue";


export default{
  name:'App',

  //registering componants 
  components:{
    Introduction,
    Voting,
    Loginform,
    Contactform,
    Morning,
    Evening
  },

  
  data(){
    return {
      message:'Welcome to Vue Development',
      age:20,
      time:'Morning'
    }
  }
}

</script>

