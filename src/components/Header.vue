<script>
import Logo from './icones/Logo.vue'
import Navigation from './icones/Navbar.vue'
import { MenuIcon, } from "@heroicons/vue/solid";
export default {
  name: "App",
  components: { MenuIcon,Logo,Navigation },
    data() {
    return {
      menuOuvert: false,
    };
    },
}

</script>

<template>
<header class=" bg-red-800 top-0 drop-shadow-lg z-10 ">
    <a href="#content" class="sr-only focus:not-sr-only text-lg text-white"> Passez au contenu </a>
    <nav class=" lg:flex lg:justify-between items-center">
      <div class="flex justify-between items-center">
       <RouterLink to="/"><Logo class="w-42 h-42 p-4"/></RouterLink>
      <span class="text-3xl cursor-pointer lg:hidden block w-8 h-8 mx-4  ">
        <MenuIcon class=" text-white"  aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">
        </MenuIcon>
        <span class="sr-only ">Menu</span>
      </span>
      </div>
      <Transition
        enter="transition duration-2000 ease-out"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition duration-1750 ease-out"
        leaveFrom="transform  translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
      <ul id="menu" v-if="menuOuvert" class="lg:hidden bg-white w-full text- text-xl font-timmana  py-4 text-center" >
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-algerian text-black  " to="/programmation">Programmation</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-algerian text-black " to="/artistes">Artistes</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm text-black font-algerian " to="/festival">Festival</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-algerian text-black " to="/billetterie">Billetterie</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-4 xl:pt-2 xl:rounded-sm font-algerian text-black" to="/contact">Contact</RouterLink>
        </li>
      </ul>
      </Transition>
      <ul class="lg:flex  gap-6 lg:items-center text-white text-xl font-algerian mx-6 py-4 hidden" >
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white" to="/programmation">Programmation</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white " to="artistes">Artistes</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white " to="/festival">Festival</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white " to="/billetterie">Billetterie</RouterLink>
        </li>
        <li class="my-3">
          <RouterLink class="my-6 lg:px-2 xl:pt-2 xl:rounded-sm font-algerian text-white " to="/contact">Contact</RouterLink>
        </li>
      </ul>    
    </nav>
  </header>

</template>