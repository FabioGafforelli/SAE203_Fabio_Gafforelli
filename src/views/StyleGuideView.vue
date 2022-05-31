<script>
import header1 from "../components/Header.vue"
import Accessibilite from '../components/icones/accessibilite.vue';
import Billetterie from '../components/icones/Billetterie.vue';
import Galerie from "../components/icones/galerie.vue";
import Histoire from '../components/icones/histoire.vue';
import Logo from '../components/icones/Logo.vue';
import logoartiste from "../components/icones/logoartiste.vue";
import ficheconcert from "../components/icones/ficheconcert.vue";
import Offre1 from '../components/icones/Billetterie/Offre1.vue';
import Offre2 from '../components/icones/Billetterie/Offre2.vue';
import Offre3 from '../components/icones/Billetterie/Offre3.vue';
import footer1 from "../components/Footer.vue"

export default {
  name: "App",
  components: { header1, Logo, Accessibilite, Billetterie, Histoire, Galerie, logoartiste, ficheconcert, Offre1, Offre2, Offre3, footer1 },
};
</script>

<template>
    <h1 class="p-8">Style Guide</h1>

    <section class="my-6">
        <h2>Couleurs</h2>

        <div class="flex space-x-6 mt-8 ml-16">
            <div class="flex flex-col-reverse bg-red-800 w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-xl p-1 text-centers">#991B1B</p>
            </div>
            <div class="flex flex-col-reverse bg-black w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-xl p-1 text-center">#000000</p>
            </div>
            <div class="flex flex-col-reverse bg-white w-20 h-24 rounded-xl">
                <p class="bg-gray-200 rounded-b-xl p-1 text-center">#FFFFFF</p>
            </div>
        </div>
    </section>
    <section class="my-6">
        <h2>Typographie</h2>

        <div class="flex">
            <div>
                <p class=" text-md ml-24 mt-6 font-bold"> h1 / titre des pages ainsi que texte du menu</p>
                <p class="ml-24 font-algerian text-black"> Algerian</p>
                <p class="ml-24 font-algerian text-black"> 40px font size</p>
            </div>
            <p class="text-4xl font-algerian ml-20 mt-8" >La belle police..</p>
        </div>
        <div class="flex">
            <div>
                <p class=" text-md ml-24 mt-6 font-bold"> p / texte sur les paragraphes</p>
                <p class="ml-24 font-inter text-gray-500"> Inter</p>
                <p class="ml-24 font-inter text-gray-500"> 32px font size</p>
            </div>
            <p class="text-xl font-gabo-drive ml-20 mt-10" >La belle police...</p>
            <p class="text-xl font-gabo-drive ml-20 mt-10" >Inter est la police la plus utilisée dans le web</p>
        </div>
    </section>
    <section class="my-6">
        <h2>Icônes</h2>
        <div class="flex gap-6 ml-20 my-4">
            <logo class="fill-black w-10 h-10" />
            <accessibilite class="w-10 h-10" />
            <billetterie class="w-10 h-10" />
            <histoire class="w-10 h-10" />
            <Galerie class="w-10 h-10" />
            <logoartiste class="w-10 h-10" />
            <ficheconcert class="w-10 h-10" />
        </div>
    </section>
    <section class="py-6">
        <h2>Composants</h2>    
        <div class="flex  gap-16 ml-20 mt-6">
            <offre-1  />
            <offre-2  />
            <offre-3  />
        </div>
        <div class="flex gap-16 ml-20 mt-6">
            <header1 />
        </div>
        <div class="flex gap-16 ml-20 mt-6">
            <footer1 />
        </div>
        
    </section>




</template>