<template>
    <div class="flex flex-col">
        <label for="baslik" class=" mt-2 text-sm font-medium text-rose-200 select-none ">Başlık</label>
            <input type="text" id="baslik" class="mb-4 p-2.5 w-full text-sm text-rose-200 bg-rose-900 rounded-lg border border-gray-300 focus:ring-rose-500 focus:border-rose-500 focus:shadow-md focus:shadow-rose-400 outline-none selection:bg-rose-400 selection:text-rose-800 " maxlength="30" placeholder="Bişey..."
        />
        <label for="icerik" class=" mt-2 text-sm font-medium text-rose-200 select-none ">Detay</label>
<textarea id="icerik" rows="4" class="mb-4 p-2.5 w-96 text-sm text-rose-200 bg-rose-900 rounded-lg border border-gray-300 focus:ring-rose-500 focus:border-rose-500 focus:shadow-md focus:shadow-rose-400 outline-none selection:bg-rose-400 selection:text-rose-800 " maxlength="500" placeholder="Bişeyler bişeyler..."></textarea>
        <div >
            <button class="btn float-right" @click="hizliEkle">Ekle</button>
        </div>
    </div>
</template>


<script setup>
import store from '/src/store'
import router from '/src/router';

const hizliEkle = (e) => {
    const id = new Date().getTime()
    store.state.notes.push({
        title: baslik.value,
        content: icerik.value,
        id: id,
    })
    baslik.value = ''
    icerik.value = ''
    router.push("/")
    store.state.isEmpty=false;
}
</script>