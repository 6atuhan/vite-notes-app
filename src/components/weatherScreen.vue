<template>
    <div class=" flex flex-row relative items-center m-8 w-48 h-24">
        
        <card-comp id="kart" class="hidden "></card-comp>
        <div id="citySelector" >
        <sehirler-comp id="Sehirler" ></sehirler-comp>
        <button @click="showWe" class=" bg-slate-400 w-20 h-10 rounded m-10 hover:bg-slate-800 hover:text-white transition-all">
            Göster
        </button>
        </div>
        
    </div>
</template>

<script setup>
import cardComp from './weatherScreenComponents/cardComp.vue'
import sehirlerComp from './weatherScreenComponents/sehirlerComp.vue'
import store from '/src/store'
import axios from 'axios'
import { ref } from '@vue/reactivity'


var aranacakSehir = ref('')

const showWe = () => {

aranacakSehir.value=document.querySelector("#Sehirler").value
    axios
        .get('https://api.weatherapi.com/v1/current.json?key=1e0606850c1f402bab7105311221307&q=' +
    aranacakSehir.value +
    '&aqi=no')
        .then(function (response) {

            store.state.havaDurumu.şehir = response.data.location.name
            store.state.havaDurumu.derece = response.data.current.temp_c
            store.state.havaDurumu.tarih = response.data.current.last_updated
            store.state.havaDurumu.icon = response.data.current.condition.icon
            store.state.havaDurumu.iconName = response.data.current.condition.text

            document.querySelector("#citySelector").setAttribute("class","hidden")
            document.querySelector("#kart").removeAttribute("class","hidden")
        })

        .catch(function (error) {
            console.log(error)
        })

    
}
</script>