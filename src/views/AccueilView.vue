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
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.0116609794327!2d6.85125431559217!3d47.528635979179505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479217863a33fd4d%3A0x8bc843a6fe9e62cc!2s25600%20Brognard!5e0!3m2!1sfr!2sfr!4v1653983565789!5m2!1sfr!2sfr" class="w-4/5 flex text-center m-auto py-10" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

</div>

<footer1 />
</template>