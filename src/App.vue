<template >
    <div class="bg-sky-900 flex flex-col flex-wrap justify-center items-center h-full w-ful">
        <div class=" flex m-10 gap-4 w-1/2 justify-between" >
            <router-link class="btn" active-class="active-btn" to="/"> ANA SAYFA </router-link>
            <h1 class="title sdw1">Note App</h1>
            <router-link class="btn " active-class="active-btn" to="/add"> EKLE </router-link>
        </div>
        <div><router-view></router-view></div>
    </div>
</template>

<style>
.sdw1{
    text-shadow: 2px 2px rgb(255, 0, 128),6px 6px 2px rgb(107, 0, 32);
}
</style>