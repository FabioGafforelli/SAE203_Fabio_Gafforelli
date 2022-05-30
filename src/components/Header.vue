<script>
import Logo from './icones/Logo.vue'
import Navigation from './icones/Navbar.vue'
export default {
    components: { Logo, Navigation },
}

</script>

<template>
    <header class=" border-b-2 border-red-800 bg-red-800" sm:w-18>
        <div class=" flex justify-between m-6   ">
            <RouterLink to="/"><Logo class="w-40 h-40"/></RouterLink>
              <RouterLink to="/"><p class="flex-grow-0 flex-shrink-0 lg:hidden md:hidden sm:hidden min-w: hidden text-8xl font-semibold italic text-left text-white">ROCOEUR</p></RouterLink>
            <Navigation class="xl:hidden"/>
          <div class="hidden xl:flex items-center overflow-hidden relative gap-2.5">
    <div class="flex overflow-hidden gap-10">
     <RouterLink to="/programmation"> <p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Programmation</p></RouterLink>
     <RouterLink to="/artistes"><p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Artistes</p></RouterLink>
      <RouterLink to="/festival"><p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Festival</p></RouterLink>
    <RouterLink to="/billetterie"><p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Billetterie</p></RouterLink>
    <RouterLink to="/contact"><p class="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-white">Contact</p></RouterLink>
    </div>
  </div>
  </div>
    </header>

</template>
