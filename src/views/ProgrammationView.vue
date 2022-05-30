<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import prog1 from "../components/icones/Programmation/Prog1.vue"
import prog2 from "../components/icones/Programmation/Prog2.vue"
import prog3 from "../components/icones/Programmation/Prog3.vue"
import prog4 from "../components/icones/Programmation/Prog4.vue"
import prog5 from "../components/icones/Programmation/Prog5.vue"
export default {
    name:"App",
    components: { header1, footer1, prog1, prog2, prog3, prog4, prog5 },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">
<div class="">
    <prog1 />
    <prog2 />
    <prog3 />
    <prog4 />
    <prog5 />
</div> </div>

</template>