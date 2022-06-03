<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import BoutonImage from "../components/icones/modifierListe/BoutonImage.vue"

export default {
    name:"App",
    components: { header1, footer1, BoutonImage },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25 dark:bg-black">
          <RouterLink to="/listeartistes" >
          <button type="submit">
          <BoutonImage class="w-20 bg-red-800 text-white" Nom="Listes Artistes Synchro"/>
          </button>
          </RouterLink>
<p class="m-auto text-2xl text-center font-algerian text-red-800 dark:text-white">
Artistes</p>
<p class="m-auto text-2xl text-center font-algerian text-black dark:text-white">
  Retrouvez tous nos artistes en cliquant sur leur fiche
</p>
<br>
<div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  lg:mx-10">
  <div class="text-center dark:text-white ">
   <RouterLink to="/ficheartiste"> <img src="/public/images/Artistes-FF.png" class="w-full" alt="Image de l'artiste Forever The Fallen qui sera présent au festival">
    <p class="my-6 ">FOREVER THE FALLEN</p></RouterLink>
  </div>
  <div class="text-center dark:text-white">
    <RouterLink to="/ficheartiste"><img src="/public/images/Artistes-TW.png" class="w-full" alt="Image de l'artiste THIS WOLFF qui sera présent au festival">
    <p class="my-6">THIS WOLFF</p></RouterLink>
  </div>
  <div class="text-center dark:text-white">
    <RouterLink to="/ficheartiste"><img src="/public/images/Artistes-Rammstein.png" class="w-full" alt="Image de l'artiste RAMMSTEIN qui sera présent au festival">
    <p class="my-6">RAMMSTEIN</p></RouterLink>
  </div>
  <div class="text-center dark:text-white ">
    <RouterLink to="/ficheartiste"><img src="/public/images/Artistes-ItLives.png" class="w-full" alt="Image de l'artiste IT LIVES IT BREATH qui sera présent au festival">
    <p class="my-6">IT LIVES IT BREATHES</p></RouterLink>
  </div>
  <div class="text-center dark:text-white ">
    <RouterLink to="/ficheartiste"><img src="/public/images/Artistes-PD1.png" class="w-full" alt="Image du groupe Parkway driveen qui sera présent au festival">
    <p class="my-6">PARKWAY DRIVE</p></RouterLink>
  </div>
  <div class="text-center dark:text-white">
    <RouterLink to="/ficheartiste"><img src="/public/images/Artistes-PD2.png" class="w-full" alt="Image du groupe Parkway driveen qui sera présent au festival">
    <p class="my-6">PARKWAY DRIVE</p></RouterLink>
  </div>
  
</div>
    </div>
<footer1 />
</template>