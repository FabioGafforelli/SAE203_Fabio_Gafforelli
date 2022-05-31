<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import Billetterie from "../components/icones/Billetterie.vue"
import Ficheconcert from "../components/icones/ficheconcert.vue"
export default {
    name:"App",
    components: { header1, footer1, Billetterie, Ficheconcert },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">
        <div class="grid grid-flow-row-dense">
                <Ficheconcert />
                <h1 class="flex pl-5 pt-5 pb-10 font-algerian font-black text-black sm:text-base lg:text-xl xl:text-2xl">Parkway drive</h1>
               <p class="flex pl-5 pt-5 pb-10 text-black sm:text-base lg:text-xl xl:text-2xl">Retrouvez le concert du groupe Parkway Drive, sur la scène principale, samedi, à 21H</p>
           
  </div>
    </div>
  <div class="m-auto text-center bg-gray-200 text-red-800 font-algerian ">
    <Billetterie class="m-auto h-32 w-32" />
 <p class="my-6">RESERVEZ VOS BILLETS</p>
  </div>
    <br>
    <footer1 />
</template>