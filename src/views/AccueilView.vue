<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
export default {
    name:"App",
    components: { header1, footer1 },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25">

<img class="w-full" src="/public/images/pexels-carousel-3.jpg" alt="">
</div>
<div>
<img class="flex" src="/public/images/Map.png" alt="">

</div>

<footer1 />
</template>