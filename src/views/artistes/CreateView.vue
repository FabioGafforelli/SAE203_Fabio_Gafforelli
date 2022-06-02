<template>
<header1 />
    <div>
        <h1 class="flex pl-5 pt-5 pb-10 text-black sm:text-base lg:text-xl xl:text-2xl font-algerian m-auto">Inscrire un artiste</h1>

        <section class="pb-6 mx-2 md:max-w-[70%] md:m-auto lg:max-w-[50%] lg:pb-14">
            <form enctype="multipart/form-data"
                @submit.prevent="createArtistes()">
                <div class="bg-red-800 p-2 rounded-xl flex gap-2">
                    <div class="mx-auto flex flex-col justify-end mb-10">
                        <div class="m-auto">
                            <img class="" :src="imageData"/>
                        </div> 
                        <label class="bg-white font-bold text-center text-black" for="file">
                            <input type="file" class="hidden" ref="file" id="file" required
                            @change="previewImage">
                            Selectionner une image
                        </label>
                    </div>
                    <div class="m-auto">
                        <label class="flex flex-col mb-3">
                            <span class="font-semibold my-1 text-white" >Nom :  </span>
                            <input class="border-none w-80" type="text" placeholder="Nom de la personne"
                                v-model="Nom" required />  
                        </label>
                        <label class="flex flex-col mb-3">
                            <span class="text-white">Biographie :  </span>
                            <input v-model="Artistes.Bio"
                                class="border-none" type="text" placeholder="Biographie" required>
                        </label>
                        <div class="flex justify-between gap-10 my-4">
                            <button type="submit" @click='createArtistes()' title="Création" >
                                <BoutonImage class="w-32 bg-white text-black" Nom="Créer"/>
                            </button>
                            <RouterLink to="/listeartistes" >
                                <button type="submit">
                                    <BoutonImage class="w-20 bg-white text-black" Nom="Retour"/>
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </form>
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
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    onSnapshot,
    query,
    orderBy } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'

import {
    getStorage,
    ref,
    getDownloadURL,
    uploadString,
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'

// import { preview } from "vite";


export default {
    data (){
        return {
            imageData:null,
            Artistes: {
                Nom:null,
                Bio:null,
                photo:null,
            }
        }
    },
    name: "CréationView",
    components: { BoutonImage, header1, footer1 },

   mounted (){
        this.getArtistes();
    },
    methods : {
        async getArtistes (){
            const firestore = getFirestore();
            const dbArtistes = collection(firestore, "Artistes");
            const q = query(dbArtistes, orderBy('Nom','asc'));
            await onSnapshot(q, (snapshot) => {
                this.listeArtistes = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))
        console.log("Liste des Artistes", this.listeArtistes)
            })
        },
        previewImage: function(event) {
            //debugger
            this.file = this.$refs.file.files[0];
            this.Artistes.photo = this.file.name;
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        async createArtistes(){
            const storage = getStorage();
            const refStorage = ref(storage, 'artistes/'+this.Artistes.photo);
            await uploadString(refStorage, this.imageData, 'data_url').then((snapshot) => {
                console.log('Uploaded a base64 string');
                const db = getFirestore();
                const docRef = addDoc(collection(db, 'Artistes'), this.Artistes);
            });
            this.$router.push('/artistes')
        },
    },
};
</script>