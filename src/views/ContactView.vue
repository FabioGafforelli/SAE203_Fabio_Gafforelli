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
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5  lg:mx-10">
 <div class="grid-cols-2 ">
     <p>Prénom*</p>
    <p class="my-6 border border-red-800">Prénom</p>
  </div>
  <div class="grid-cols-2 ">
      <p>Nom*</p>
    <p class="my-6 border border-red-800">Nom</p>
  </div>
        </div>
<br>
 <div class="grid grid-cols-1 pl-10 pr-10 ">
     <p>Mail*</p>
    <p class="my-6 border border-red-800">Adresse mail</p>
  </div>
 <div class="grid grid-cols-1 pl-10 pr-10 ">
     <p>Objet du message*</p>
    <p class="my-6 border border-red-800">Objet</p>
  </div>
  <div class="grid grid-cols-1 pl-10 pr-10">
      <p>Message*</p>
      <p class="h-48 w-full my-6 border border-red-800" >Message</p>
  </div>
    </div>
    <footer1 />

</template>