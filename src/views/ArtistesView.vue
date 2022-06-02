<template>
<Header />
    <h1 class="py-8 md:text-4xl md:pt-12 lg:text-5xl font-algerian text-red-800">Les artistes, cliquez sur un artiste pour voir sa fiche</h1>
<div class="bg-indigo-25 dark:bg-black">
    <div class="">
        <div class="">
            <h5 class="">Liste des Artistes</h5>
        </div>    
        <hr/>
        <form>
          <div class="">
            <div class="">
              <span class="">Créer un artiste</span>
            </div>
            <RouterLink to="/Modifier">
              <div class="flex justify-start mr-40 my-6">
                <BoutonImage @click='createArtistes()' title="Création"
                Nom="Inscription d'un artiste"/>
              </div>
            </RouterLink>
          </div>
        </form>
                <form>
          <h6>Nouvel artiste</h6>
          <div class="">
            <div class="">
              <span class="">Nom</span>
            </div>
            <input type="text" class="bg-red-800 text-white" v-model="Nom" required />
            <button class="" type="button" @click='createArtistes()' title="Création">
              <Modification />
            </button>
          </div>
            <div class="">
              <span class="">Biographie</span>
            </div>
            <input type="text" class="bg-red-800 text-white" v-model="Bio" required />
            <button class="" type="button" @click='createArtistes()' title="Création">
              <Modification />
            </button>
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
                                  <span class="">Filtrage</span>
                                </div>
                                <input type="text" class="bg-red-800 text-white" v-model='filter'/>
                                <button class="" type="button" title="Filtrage">
                                  <Rechercher />
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for='Artistes in listeArtistesSynchro' :key='Artistes.id'>
                        <td>
                          <form>
                            <div class="">
                              <div class="">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="bg-red-800 text-white" v-model="Artistes.Nom" required />
                              <button class="fill-black" type="button" @click.prevent="updateArtistes(Artistes)" title="Modification">
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
 <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,2fr))] gap-8 py-10">
        <div v-for="Artistes in listeArtistesSynchro" :key="Artistes.id">
            <card
                :Nom="Artistes.Nom"
                :Bio="Artistes.Bio" />
        </div>

</div>
    <Footer />
    </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import card from "../components/icones/card.vue"
import Rechercher from "../components/icones/Rechercher.vue"
import Modification from "../components/icones/Modification.vue"
import Supprimer from "../components/icones/Supprimer.vue"
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BoutonImage from '../components/icones/modifierListe/BoutonImage.vue';
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
export default {
    data(){ // Données de la vue
            return{                
                nom:null, // Pour la création d'un nouveau pays
                listeArtistesSynchro:[], // Liste des pays synchronisée - collection pays de Firebase
                filter:''
            }
        },
        computed:{
            orderByName:function(){
                return this.listeArtistesSynchro.sort(function(a, b){
                  if(a.Nom < b.Nom)  return -1;
                  if(a.Nom > b.Nom)  return 1;
                  return 0
                })
            },
            filterByName:function(){
                if(this.filter.length > 0){
                    let filter = this.filter.toLowerCase();
                    return this.orderByName.filter(function(Artistes){
                        return Artistes.Nom.toLowerCase().includes(filter);
                    })
                }else{
                    return this.orderByName;
                }
            }
        },
        mounted(){ // Montage de la vue
            // Appel de la liste des pays synchronisée
            this.getArtistesSynchro();
        },
        methods: {
            async getArtistesSynchro(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtistes= collection(firestore, "Artistes");
                // Liste des pays synchronisée
                const query = await onSnapshot(dbArtistes, (snapshot) =>{
                    //  Récupération des résultats dans listePaysSynchro
                    // On utilse map pour récupérer l'intégralité des données renvoyées
                    // on identifie clairement le id du document
                    // les rest parameters permet de préciser la récupération de toute la partie data
                    this.listeArtistesSynchro = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()})); 
                })
            },
            async createArtistes(){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                const dbArtistes= collection(firestore, "Artistes");
                // On passe en paramètre format json
                // Les champs à mettre à jour
                // Sauf le id qui est créé automatiquement
                const docRef = await addDoc(dbArtistes,{
                    Nom: this.Nom,
                    Bio: this.Bio
                })
                console.log('document créé avec le id : ', docRef.id);
             },
            async updateArtistes(Artistes){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à modifier
                const docRef = doc(firestore, "Artistes", Artistes.id);
                // On passe en paramètre format json
                // Les champs à mettre à jour
                await updateDoc(docRef, {
                    Nom: Artistes.Nom
                }) 
             },
            async deleteArtistes(Artistes){
                // Obtenir Firestore
                const firestore = getFirestore();
                // Base de données (collection)  document pays
                // Reference du pays à supprimer
                const docRef = doc(firestore, "Artistes", Artistes.id);
                // Suppression du pays référencé
                await deleteDoc(docRef);
             },
        
},
  name: "App",
  components: { card, Rechercher, Modification, Supprimer, Header, Footer, BoutonImage },
};
</script>