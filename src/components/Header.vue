<script>
import Logo from './icones/Logo.vue'
import Navigation from './icones/Navbar.vue'
import Flechedown from './icones/Flechedown.vue'
import Bouton from ".//icones/Bouton.vue";
import Bath from './icones/Bath.vue';

export default {
    components: { Logo, Navigation, Flechedown, Bouton, Bath },
}

</script>

<template>
    <header class=" border-b-2 border-indigo-100 bg-red-800">
        <div class=" flex justify-between m-6  ">
            <Logo/>
              <p class="flex-grow-0 flex-shrink-0 text-8xl font-semibold italic text-left text-white">ROCOEUR</p>
            <Navigation class="xl:hidden"/>
          <div class="hidden xl:flex items-center overflow-hidden relative gap-2.5">
    <div class="flex overflow-hidden gap-10">
      <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Programmation</p>
      <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Artistes</p>
      <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Festival</p>
      <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Billetterie</p>
      <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Contact</p>
    </div>
  </div>
  </div>
    </header>

</template>
