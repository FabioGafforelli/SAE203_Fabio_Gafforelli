<template>
<Header1 />
    <h1 class="py-8 md:text-4xl md:pt-12 lg:text-5xl font-algerian text-red-800">Les artistes, cliquez sur un artiste pour voir sa fiche</h1>
<div class="bg-indigo-25 dark:bg-black">
    <div class="">
        <div class="">
            <h5 class="text-black dark:text-white">Liste des Artistes</h5>
        </div>
        <hr/>
        <form>
          <div class="">
            <div class="">
              <span class="text-black dark:text-white">Créer un artiste</span>
            </div>
            <RouterLink to="/inscription">
              <div class="flex justify-start mr-40 my-6">
                <BoutonImage title="Création"
                Nom="Inscription d'un artiste"/>
              </div>
            </RouterLink>
            <RouterLink to="/artistes" >
              <div class="flex justify-start mr-40 my-6">
                <BoutonImage title="Retour page artiste"
                Nom="Retour page artiste"/>
              </div>
            </RouterLink>
          </div>
        </form>

        <div class="">
            <table class="">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="text-black dark:text-white">Liste des artistes actuels</div>                          
                          <span class="">
                            <div class="ml-80" >
                                <div class="text-black dark:text-white">
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
                            <div class="text-black dark:text-white">
                              <div class="">
                                <span class="">Nom</span>
                              </div>
                              <input type="text" class="bg-red-800 text-white" v-model="Artistes.Nom" required />
                              <button class="fill-black" type="button" @click.prevent="updateArtistes(Artistes)" title="Modification">
                               <RouterLink :to="{ name:'ModifierView', params:{ id:Artistes.id}}">
                               <Modification/>
                               </RouterLink>
                              </button>
                              <RouterLink :to="{ name:'DeleteView', params:{ id:Artistes.id}}">
                                <Supprimer />
                              </RouterLink>
                            </div>
                          </form>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
 <div class="grid grid-cols-3">
        <div v-for="Artistes in listeArtistesSynchro" :key="Artistes.id">
            <card
                :Nom="Artistes.Nom"
                :Bio="Artistes.Bio"
                :photo="Artistes.photo"
                :id="Artistes.id" />
        </div>

</div>
    <Footer1 />
    </div>
</template>

<script>
import card from "../../components/icones/card.vue"
import Rechercher from "../../components/icones/Rechercher.vue"
import Modification from "../../components/icones/Modification.vue"
import Supprimer from "../../components/icones/Supprimer.vue"
import Header1 from '../../components/Header.vue';
import Footer1 from '../../components/Footer.vue';
import BoutonImage from '../../components/icones/modifierListe/BoutonImage.vue';
import Creation from "../../components/icones/modifierListe/creation.vue";

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

import { getStorage, ref, getDownloadURL, uploadString } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

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
                    this.listeArtistesSynchro.forEach(function(artistes){
                      const storage = getStorage();
                      const spaceRef = ref(storage, 'artistes/'+artistes.photo);
                      getDownloadURL(spaceRef)
                      .then((url) => {
                        artistes.photo = url;
                      })
                      .catch((error) =>{
                        console.log('erreur downloadUrl', error)
                      })
                    }) 
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
                    Bio: this.Bio,
                    photo: this.photo
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
async createArtistes(){
            const storage = getStorage();
            const refStorage = ref(storage, 'artistes/'+this.Artistes.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Artistes'), this.Artistes);
            });
            this.$router.push('/listeartistes')
        },
},
  name: "App",
  components: { card, Rechercher, Modification, Supprimer, Header1, Footer1, BoutonImage, Creation },
};
</script>