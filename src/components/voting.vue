<template>
    <div>
        <!-- show the message based on age --using v-if dirv -->
        <p v-if = " myAge < 18 "> you can vote after {{18 - myAge }}years</p>
        <p v-else>You should vote in every election.</p>
        
    </div>
</template>

<script>
export default{
    name:'Voting',
    props:['myAge']
   
}

</script>
