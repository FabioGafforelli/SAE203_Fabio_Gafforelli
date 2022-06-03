<template>
<Header1 />
    <div class="bg-red-800 mt-12 px-5 flex flex-col gap-20 relative">
        <div class="flex justify-between items-end">
            <h1 class="text-white font-algerian text-2xl">Modifier l'artiste</h1>
        </div>
        <form @submit.prevent="updateArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="imageData" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-white px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full" type="text" placeholder="Nom de l'artiste" v-model="Artistes.Nom" required>
                    </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-white px-5 border-[1px] flex justify-center items-center">Biographie</div>
                        <input class="w-full" type="text" placeholder="Biographie de l'artiste" v-model="Artistes.Bio" required>
                    </div>

                    <div class="flex h-10 text-white rounded-sm overflow-hidden">
                        <div class="bg-true-gray-25 px-5 border-[1px] flex justify-center items-center">Photo</div>
                        <div class="relative w-full">
                            <input type="file" class="w-full relative" ref="file" id="file" @change="previewImage">
                            <label class="absolute w-full left-0 top-0 bottom-0 bg-white text-black flex justify-center items-center" for="file">Sélectionner l'image</label>
                        </div>
                    </div>

                </div>
            </div>
            
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3 text-white" type="submit">Modifier</button>
                <button class="w-fit px-6 py-3 text-white" type="button"><RouterLink to="/listeartistes">Annuler</RouterLink></button>
            </div>
            </div>
        </form>
    </div>
    <Footer1 />
</template>

<script>
import Header1 from '../../components/Header.vue'
import Footer1 from '../../components/Footer.vue'
import BoutonImage from '../../components/icones/modifierListe/BoutonImage.vue'
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    deleteObject} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
export default {
    data(){
        return{
            imageData:null, 
               
            Artistes:{   
                Nom:null,
                Bio:null,  
                photo:null, 
            },

            refArtiste:null,     
            imgModifiee:false,       
            photoActuelle:null 
        }
    },
    components: { Header1, Footer1, BoutonImage },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{
        previewImage: function(event){
          this.file = this.$refs.file.files[0];
          this.Artistes.photo = this.file.name;
          this.imgModifiee = true;
          var input = event.target;
          if(input.files && input.files[0]){
              var reader = new FileReader();
              reader.onload = (e) => {
                  this.imageData = e.target.result;
              }
              reader.readAsDataURL(input.files[0]);
          }
      },

      async getArtiste(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "Artistes", id);
          this.refArtiste = await getDoc(docRef);
          if(this.refArtiste.exists()){
              this.Artistes = this.refArtiste.data();
              this.photoActuelle = this.Artistes.photo;
          }else{
              this.console.log("artiste inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'artistes/'+this.Artistes.photo);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.imageData = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },

      async updateArtiste(){
          if(this.imgModifiee){
              const storage = getStorage();
              let docRef = ref(storage, 'artistes/'+this.photoActuelle);
              deleteObject(docRef);
              docRef = ref(storage, 'artistes/'+this.Artistes.photo);
              await uploadString(docRef, this.imageData, 'data_url').then((snapshot) =>{
                  console.log('Uploaded a base64 string', this.Artistes.photo);
              });
          }
          const firestore = getFirestore();
          await updateDoc(doc(firestore, "Artistes", this.$route.params.id), this.Artistes);
          this.$router.push('/listeartistes');
      }
    }
}

</script>