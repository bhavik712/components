<template>
    <div>
        <p>{{ introduction  }}</p>
        <p> I am {{ myAge  }} years old.</p>
    </div>

    <!-- adding event listerner to my buttons -->
    <button @click="increaseAge">Increment Age</button>
    <button @click="decreaseAge">Decrease Age</button>
</template>

<script>
    export default {
        name:'Introduction',

        // validating prop myAge - value should be positive number
        props: {
            myAge:{
                type : Number,
                validator(value){
                    return value > 0 ;
                }
            }

        },
        emits:['increment-age','decrement-age'],
        data(){
            return{
                introduction : 'My Name is Barad Bhavik',
                
            }
        },

        //trigering the events in parent 
        methods:{
            increaseAge(){
                this.$emit('increment-age');
            },
            decreaseAge(){
                this.$emit('decrement-age');
            }
        }
        
    }
</script>
<style scoped>
    div{
        background-color: aqua;
        width: 250px;
    }
</style>

