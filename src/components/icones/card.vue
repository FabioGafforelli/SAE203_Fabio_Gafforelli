<template>
<div class="bg-red-800 rounded-xl px-4 pt-3 shadow-card">
    <div class="flex">
        <img class="rounded-xl w-1/3" :src="Image" alt="Image de l'artiste">
        <div class="mx-4">
            <h3 class="text-base">{{ Nom }}</h3>
            <p class="text-xs ml-2">{{ Role }}</p>
            <p class="text-sm mt-4 md:text-lg lg:text-xl">{{ Bio }}</p>
        </div>
    </div>
    <div>
        <p class="text-[0.600rem] flex justify-end">{{ Jour }}</p>
    </div>
    
</div>
</template>
<script>
export default {
    props : {
        Nom: String,
        Role: String,
        Bio: String,
        Jour: String,
        Image: String,
    }
};
</script>