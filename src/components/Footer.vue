<script>
import Logo from './icones/Logo.vue'

export default {
    components:{ Logo },
}
</script>


<template>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css">


<footer class="bg-red-800 pt-10 sm:mt-10">
    <div>
        <Logo class=" w-12 ml-6"></Logo>
    </div>
        <div class="max-w-6xl m-auto text-white flex flex-wrap justify-left">

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

                <div class="text-xs uppercase text-white font-bold mb-6">
                    A propos
                </div>
                 <a href="#" class="my-3 block text-white hover:text-gray-100 text-sm  font-normal duration-700">
                    Festival
                </a>
                <a href="#" class="my-3 block text-white hover:text-gray-100 text-sm  font-normal duration-700">
                    Contact
                </a>
                <a href="#" class="my-3 block text-white hover:text-gray-100 text-sm  font-normal duration-700">
                    Partenaires
                </a>
            </div>


            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">

               <RouterLink to="/mentions"><div class="text-xs uppercase text-white font-bold mb-6">
                    Mentions légales
                </div></RouterLink>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div class="text-xs uppercase text-white font-bold mb-6">
                    POLITIQUE CONFIDENTIALITE
                </div>
            </div>

            <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                <div class="text-xs uppercase text-white font-bold mb-6">
                    Contact
                </div>
            </div>
  
        </div>


    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-indigo-100 text-white text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2 text-center">
                ©2022 Rocoeur. All rights reserved
            </div>
        </div>
    </div>
</footer>
</template>
