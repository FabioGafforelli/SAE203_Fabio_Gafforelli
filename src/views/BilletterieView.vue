<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import Offre1 from "../components/icones/Billetterie/Offre1.vue"
import Offre2 from "../components/icones/Billetterie/Offre2.vue"
import Offre3 from "../components/icones/Billetterie/Offre3.vue"
export default {
    name:"App",
    components: { header1, footer1, Offre1, Offre2, Offre3 },
}
</script>
<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25 dark:bg-black">
<p class="flex pl-5 pt-5 pb-10 font-black text-red-800 dark:text-white sm:text-base lg:text-xl xl:text-2xl">Billeterie</p>
<p class="flex pl-5 pt-5 pb-10 text-black dark:text-white sm:text-base lg:text-xl xl:text-2xl">La billetterie va ouvrir très prochainement, voici les différentes offres qui seront proposés :</p>
<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  lg:mx-10">
  <div class="items-center mx-auto my-auto">
    <Offre1 />
  </div>
  <div class="items-center mx-auto my-auto">
   <Offre2 />
  </div>
  <div class="items-center mx-auto my-auto">
<Offre3 />
  </div>
</div>
</div>
<footer1 />
</template>