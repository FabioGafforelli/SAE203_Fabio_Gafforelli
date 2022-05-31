<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import Prog1 from "../components/icones/Programmation/Prog1.vue"

export default {
    name:"App",
    components: { header1, footer1, Prog1 },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">
<Prog1 />
</div>
<footer1 />
</template>