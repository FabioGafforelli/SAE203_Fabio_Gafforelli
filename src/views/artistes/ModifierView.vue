<template>
<header1 />
    <h1 class="py-8 md:text-4xl md:pt-8 lg:text-5xl font-algerian text-center text-red-800">Modifier les artistes</h1>

    <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
        <div class="bg-red-800 dark:bg-Dark-marron p-2 rounded-xl flex gap-2">
            <div class="mx-auto flex flex-col justify-end mb-10">
                <img class="mb-10 w-40 rounded-xl" src="/public/images/Artistes-FF.png" alt="Image de l'artiste">
                <BoutonImage class="w-32 mx-auto" Nom="Changer l'image"/>
            </div>
            <div class="m-auto">
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1" >Nom :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none w-80"><!--v-model="Artistes.Nom" -->
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Catégorie :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Catégorie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Biographie :  </span>
                    <input type="email" class="bg-jaune rounded-xl border-none" placeholder="Biographie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Jours de disponibilité :</span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Les disponibilité">
                </label>
                <div class="flex justify-end mt-8 mb-2 mr-4">
                    <Bouton2 Nom="Sauvegarder"/>
                </div>
            </div>
        </div>
    </section>
    <footer1 />
</template>

<script>
import footer1 from '../../components/Footer.vue';
import header1 from '../../components/Header.vue';
import BoutonImage from '../../components/icones/modifierListe/BoutonImage.vue';
export default {
  name: "App",
  components: { BoutonImage, header1, footer1 },
};
</script>