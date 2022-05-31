<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import Logoartiste from "../components/icones/logoartiste.vue"
import Billetterie from "../components/icones/Billetterie.vue"
export default {
    name:"App",
    components: { header1, footer1, Logoartiste, Billetterie },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">
        <div class="grid grid-flow-row-dense">
                <Logoartiste />
                <h1 class="flex pl-5 pt-5 pb-10 font-algerian font-black text-black sm:text-base lg:text-xl xl:text-2xl">Parkway drive</h1>
               <p class="flex pl-5 pt-5 pb-10 text-black sm:text-base lg:text-xl xl:text-2xl">Parkway Drive est un groupe australien, originaire de Byron Bay, en Nouvelle-Galles du Sud. Formé en 2002, le groupe dénombre en 2018 six albums.

Le groupe se produit en concert environ 20 fois par an, principalement en Australie mais aussi dans certains festivals.

Le groupe connaît bien la région pour s’être déjà produit aux eurockéennes de Belfort en 2019.</p>
           
  </div>
    </div>
  <div class="m-auto text-center bg-gray-200 text-red-800 font-algerian ">
    <Billetterie class="m-auto h-32 w-32" />
 <p class="my-6">RESERVEZ VOS BILLETS</p>
  </div>
    <br>
    <footer1 />
</template>