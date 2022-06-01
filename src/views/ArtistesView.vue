<script>
import header1 from "../components/Header.vue"
import footer1 from "../components/Footer.vue"
import Rechercher from "../components/icones/Rechercher.vue"
import Modification from "../components/icones/Modification.vue"
import Supprimer from "../components/icones/Supprimer.vue"

export default {
    name:"App",
    components: { header1, footer1, Rechercher, Modification, Supprimer },
}
</script>

<template class="bg-indigo-25">
    <header1 />
    <div class="bg-indigo-25 dark:bg-black">
        <p class="m-auto w-[311px] h-[81px] text-2xl text-center text-black dark:text-white">
  Retrouvez tous nos artistes en cliquant sur leur fiche
</p>
    <div class="">
        <div class="">
            <h5>Liste des Artistes</h5>
        </div>    
        <hr/>
        <form>
          <h6>Nouvel artiste</h6>
          <div class="">
            <div class="">
              <span class="">Nom</span>
            </div>
            <input type="text" class="" v-model="Nom" required />
            <button class="" type="button" @click='createArtistes()' title="Création">
              <Modifier />
            </button>
          </div>
        </form>

        <div class="">
            <table class="">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="">Liste des artistes actuels</div>                          
                          <span class="">
                            <div class="ml-80" >
                                <div class="">
                                  <span class="" >Filtrage</span>
                                </div>
                                <input type="text" class="" />
                                <button class="" type="submit" title="Création">
                                  <Rechercher />
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='Artistes in orderByName' :key='Artistes.id'>
                        <td>
                          <form>
                            <div class="">
                              <div class="">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="" v-model="Artistes.Nom" required />
                              <button class="" type="button" @click.prevent="updateArtistes(Artistes)" title="Modification">
                                <Modification />
                              </button>
                              <button class="" type="button" @click.prevent="deleteArtistes(Artistes)" title="Suppression">
                                <Supprimer />
                              </button>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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