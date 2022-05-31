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
<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10  lg:mx-10">
  <div class="text-center ">
    <RouterLink to="/ficheconcert"><img src="/public/images/Imgprog1.png" class="w-full" alt="Image de l'artiste Forever The Fallen qui sera présent au festival">
    <p class="my-6 ">FOREVER THE FALLEN</p></RouterLink>
  </div>
  <div class="text-center ">
    <RouterLink to="/ficheconcert"><img src="/public/images/Imgprog2.png" class="w-full" alt="Image de l'artiste THIS WOLFF qui sera présent au festival">
    <p class="my-6 ">THIS WOLFF</p></RouterLink>
  </div>
  <div class="text-center ">
    <RouterLink to="/ficheconcert"><img src="/public/images/Imgprog3.png" class="w-full" alt="Image de l'artiste RAMMSTEIN qui sera présent au festival">
    <p class="my-6 ">RAMMSTEIN</p></RouterLink>
  </div>
  <div class="text-center ">
    <RouterLink to="/ficheconcert"><img src="/public/images/Imgprog4.png" class="w-full" alt="Image de l'artiste IT LIVES IT BREATHES qui sera présent au festival">
    <p class="my-6 ">IT LIVES IT BREATHES</p></RouterLink>
  </div>
  <div class="text-center ">
    <RouterLink to="/ficheconcert"><img src="/public/images/Imgprog5.png" class="w-full" alt="Image de l'artiste PARKWAY DRIVE qui sera présent au festival">
    <p class="my-6 ">PARKWAY DRIVE</p></RouterLink>
  </div>
  <div class="text-center ">
    <RouterLink to="/ficheconcert"><img src="/public/images/Imgprog6.png" class="w-full" alt="Image de l'artiste PARKWAY DRIVE qui sera présent au festival">
    <p class="my-6 ">PARKWAY DRIVE</p></RouterLink>
  </div>
</div>
</div>
<footer1 />
</template>