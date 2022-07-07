<template>
    <div class="text-white">
        <ul class="flex flex-col items-center">
            <li v-for="item in notes" :key="item.id" @click=" recentItem(item)"   class="max-w-xl break-words text-white text-xl font-bold list-disc hover:text-rose-500 cursor-pointer transition-all ">
               {{item.title}}
            </li>
        </ul>
    </div>
     <h1 v-show="isEmpty" class="title animate-pulse select-none !text-red-700 sdw">Liste boş <br/>Ekle Butonunu kullan </h1>

</template>

<script setup>
import router from '/src/router';
import store from '/src/store';


const notes = store.state.notes;
const isEmpty=store.state.isEmpty;

const show =(e)=>{
    const keyNo=e.target.__vnode.key
    router.push("/details/"+keyNo);
    
    
}
const recentItem=(item)=>{

    
    store.state.selected=[]
    store.state.selected=item
    router.push("/details/"+store.state.selected.id);

}
</script>

<style>
.sdw{
    text-shadow: 2px 2px white,-1px -1px white,6px 6px 2px black;
}
</style>