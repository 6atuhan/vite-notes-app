<template>
    <div class="w-48 h-24">
        <div class="relative  text-white text-center w-48 h-24">
        <img class="absolute" :src="store.state.havaDurumu.icon" :title="store.state.havaDurumu.iconName">
        <p>{{store.state.havaDurumu.şehir}}</p>
        <p>{{store.state.havaDurumu.derece}}</p>
        <p>{{store.state.havaDurumu.tarih}}</p> 
        </div>
    <div>
        <a
            class="float-right opacity-50 hover:opacity-100 scale-50 hover:scale-100 hover:mx-6 transition-all"
            href="https://www.weatherapi.com/"
            title="Free Weather API"
            ><img
                src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                alt="Weather data by WeatherAPI.com"
        /></a>
    </div>
    </div>
</template>

<script setup>
import store from "/src/store"

</script>