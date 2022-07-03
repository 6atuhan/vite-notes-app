<template>
    <div class=" flex flex-col mx-auto w-96 items-center border-2 rounded-lg p-4 bg-rose-800">
        
        <h1 class="title !text-white mb-6 w-1/2 border-b-2">{{selectedItem.title}}</h1>
        <p class="text-white text-xl w-3/4 border-b-2 pb-2">{{selectedItem.content}} </p>
        <div class=" flex flex-row w-fit justify-between pt-8">
            <p class="text-rose-50 opacity-20 select-none w-1/2 ">no:{{$route.params.no}} </p>
         <button @click="deleteItem" class="ml-6 btn !bg-red-700 text-xs opacity-20 hover:opacity-100 ">X</button>
            

        </div>
    </div>

      

</template>



<script setup>
import store from '/src/store';
import router from '/src/router';

const selectedItem = store.state.selected;


const deleteItem=()=>{
    
    store.state.notes=store.state.notes.filter(item => item != selectedItem)
    store.state.isEmpty=store.state.notes.length == 0 ? true:false
    
    setTimeout(() => {
        router.push("/")

    }, 300);
    
}

</script>