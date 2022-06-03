<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import histoire from "../components/icones/histoire.vue"
import billetterie from "../components/icones/Billetterie.vue"
import Accessibilite from "../components/icones/accessibilite.vue"
import Galerie from "../components/icones/galerie.vue"
export default {
    name:"App",
    components: { header1, footer1, histoire, billetterie, Accessibilite, Galerie },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25 dark:bg-black">
            <p class="m-auto text-2xl text-center font-algerian text-red-800 dark:text-white">
Festival</p>
<p class="m-auto sm:text-base lg:text-xl xl:text-2xl text-center font-algerian text-black dark:text-white">
  Retrouvez sur cette page les informations essentielles vis à vis du festival
</p>
<br>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10  lg:mx-10">
  <div class="m-auto text-center bg-gray-200 text-red-800 font-algerian ">
    <histoire class="m-auto h-32 w-32" />
    <p class="my-6">HISTOIRE</p>
  </div>
  <div class="m-auto text-center bg-gray-200 text-red-800 font-algerian ">
    <billetterie class="m-auto h-32 w-32" />
    <p class="my-6">BILLETTERIE</p>
  </div>
  <div class="m-auto text-center bg-gray-200 text-red-800 font-algerian ">
    <Accessibilite class="m-auto h-32 w-32" />
    <p class="my-6">ACCESSIBILITÉ</p>
  </div>
  <div class="m-auto text-center bg-gray-200 text-red-800 font-algerian ">
    <Galerie class="m-auto h-32 w-32" />
    <p class="my-6">GALERIE</p>
  </div>
  </div>

    </div>
    <br>
    <footer1 />
</template>