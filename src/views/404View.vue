<script>
import Logo from "../components/icones/Logo.vue"

export default {
    name:"App",
    components: { Logo },
}
</script>
<template>
<div class="flex items-center justify-center w-full h-screen font-algerian">
  <div class="px-4 lg:py-12">
    <div class="lg:gap-4 lg:flex">
      <div
        class="flex flex-col items-center justify-center md:py-24 lg:py-32"
      >
        <h1 class="font-bold text-blue-600 text-9xl">404</h1>
        <p
          class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"
        >
          <span class="text-red-500">Oops!</span> Page non trouvée
        </p>
        <p class="mb-8 text-center text-gray-500 md:text-lg">
          La page que vous recherchez n'existe pas...
        </p>
        <RouterLink to="/" class="px-6 py-2 text-sm font-semibold text-red-800 bg-red-100"
          >Accueil</RouterLink>
              <p class="mb-8 text-center text-gray-500 md:text-lg">
          Vous cherchiez peut-être ?
        </p>
                <RouterLink to="/programmation" class="px-6 py-2 text-sm font-semibold text-red-800 bg-red-100"
          >Programmation ?</RouterLink>
          <br>
                <RouterLink to="/artistes" class="px-6 py-2 text-sm font-semibold text-red-800 bg-red-100"
          >Artistes ?</RouterLink>
          <br>
                <RouterLink to="/festival" class="px-6 py-2 text-sm font-semibold text-red-800 bg-red-100"
          >Festival ?</RouterLink>
          <br>
                <RouterLink to="/billetterie" class="px-6 py-2 text-sm font-semibold text-red-800 bg-red-100"
          >Billetterie ?</RouterLink>
          <br>
                <RouterLink to="/contact" class="px-6 py-2 text-sm font-semibold text-red-800 bg-red-100"
          >Contact ?</RouterLink>
                </div>
      <div class="mt-4">
       <Logo class="object-cover w-80 h-80 fill-red-800"/>
      </div>
    </div>
  </div>
</div>
    <form action="https://google.com/" method="GET" class="flex flex-col bg-Default/me/Gris p-6 my-10   "
            x-data="{ q:'', }" 
            x-on:submit="q = q + ' site:rocoeursae203.fabiogafforelli.fr'">
            <label for="q" class="text-center my-4">Que cherchez vous ? </label>
            <input type="text" class="border bg-white border-Default/me/Noir shadow-contact" placeholder="Rechercher" id="q" name="q" x-model="q">
            <button type="submit" class="bg-Default/me/Noir px-8 py-4 my-5 bg-red-800 text-white">Rechercher</button>
        </form>
</template>