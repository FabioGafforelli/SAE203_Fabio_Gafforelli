<template>
<header1 />
    <div>
        <h1 class="lg:text-5xl">Supprimer un artiste</h1>


        <div class="">
        <form enctype="multipart/form-data"
            @submit.prevent="deleteArtistes">
            <div class="">

                <div class="">   
                    <div class="">
                        <div class="">
                            <div>
                                <img class="" :src="photoActuelle"/>
                            </div>
                        </div>

                        <div class="">
                            <div class="">
                                <div class="">
                                    <span class="" >Nom</span>
                                </div>
                                <input 
                                    class="" placeholder="Nom de la personne"
                                    v-model="Artistes.Nom"
                                    disabled />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Role</span>
                                </div>
                                <input 
                                    v-model="Artistes.Role"
                                    class="" placeholder="Role de la personne"
                                    disabled />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="">Photo</span>
                                </div>
                                <div class="">
                                    <input type="file" class="" ref="file" id="file"
                                    @change="previewImage"
                                    >
                                    <label class="" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Biographie</span>
                                </div>
                                <input 
                                    v-model="Artistes.Bio"
                                    placeholder="Biographie"
                                    class="" 
                                    disabled />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Jour</span>
                                </div>
                                <input 
                                    v-model="Artistes.Jour"
                                    placeholder="Jour"
                                    class="" 
                                    disabled />                    
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div>
                    <h3>
                        Attention vous allez supprimer ce participant, cette action est irréversible !!
                    </h3>
                </div>

                <div class="flex gap-6">   
                    <button type="submit" class="">
                        Supprimer
                    </button>
                    <button class="" >
                        <RouterLink to="/Artistes" >Annuler</RouterLink>
                    </button>
                </div>

            </div>
        </form>        
        </div>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
        <div class="bg-red-800 flex gap-2">
            <div class="mx-auto flex flex-col justify-end mb-10">
                <img class="mb-10 w-40 rounded-xl" src="../../public/img-squirrel/Crystal-Duet.webp" alt="Image de l'artiste">
                <BoutonImage class="w-32 mx-auto" Nom="Changer l'image"/>
            </div>
            <div class="m-auto">
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1" >Nom :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none w-80">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Catégorie :  </span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Catégorie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Biographie :  </span>
                    <input type="email" class="bg-jaune rounded-xl border-none" placeholder="Biographie">
                </label>
                <label class="flex flex-col mb-3">
                    <span class="font-semibold my-1">Jours de disponibilité :</span>
                    <input type="text" class="bg-jaune rounded-xl border-none" placeholder="Les disponibilité">
                </label>
                <div class="flex justify-end mt-8 mb-2 mr-4">
                    <BoutonImage Nom="Sauvegarder"/>
                </div>
            </div>
        </div>
        </section>
    </div>
    <footer1 />
</template>

<script>
import BoutonImage from '../../components/icones/modifierListe/BoutonImage.vue';
import header1 from '../../components/Header.vue';
import footer1 from '../../components/Footer.vue';

import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot,
    query,
    orderBy } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytes,
    uploadString,
    deleteObject,
    listAll
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
import Footer from '../../components/Footer.vue';

// import { preview } from "vite";


export default {
    data (){
        return {
            Artistes: {
                Nom:null,
                Role:null,
                Bio:null,
                Jour:null,
                photo:null,
            },
            refArtistes:null,
            photoActuelle:null,
        }
    },
    name: "CréationView",
    components: { BoutonImage, footer1, header1 },

    mounted (){
        this.getArtistes(this.$route.params.id);
    },

    methods :{

        async getArtistes(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "Artistes", id);
            // Référence du participant concerné
            this.refArtistes = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refArtistes.exists()){
                // Si oui on récupère ses données
                this.Artistes = this.refArtistes.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.Artistes.photo;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Artistes inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'Artistes/'+this.Artistes.photo);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.photoActuelle = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },

        async deleteArtistes(){
            const firestore = getFirestore();
            // Suppresion du Artistes
            await deleteDoc(doc(firestore, "Artistes", this.$route.params.id));

            // Suppresson de l'image
            const storage = getStorage();
            // Référence du fichier de la photo
            let docRef = ref(storage, 'artistes/'+this.Artistes.photo);
            // Suppression du fichier
            deleteObject(docRef);

            // redirection sur la liste des Artistes
            this.$router.push('/Artistes');       
        }
    }
};

</script>