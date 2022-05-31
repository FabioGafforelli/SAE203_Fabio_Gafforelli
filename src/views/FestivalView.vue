<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import histoire from "../components/icones/histoire.vue"
import billetterie from "../components/icones/Billetterie.vue"
export default {
    name:"App",
    components: { header1, footer1, histoire, billetterie },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10  lg:mx-10">
 <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  lg:mx-10">
    <p>Histoire</p><histoire /> 
    <p>Billetterie</p><billetterie />
  </div>
</div>

    </div>
    <br>
    <footer1 />
</template>