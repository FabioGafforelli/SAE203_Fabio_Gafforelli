<template>
<header1 />
    <div class="">
        <form enctype="multipart/form-data" >
            <div class="">

                <div class="">
                    <h5>Création participant</h5>
                </div>    

                <div class="">   
                    <div class="">
                        <div class="">
                            <div>
                                <img class="" :src="imageData"/>
                            </div>
                        </div>

                        <div class="">
                            <div class="">
                                <div class="">
                                    <span class="" >Nom</span>
                                </div>
                                <input 
                                    class="" placeholder="Nom de la personne"
                                    required />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Prénom</span>
                                </div>
                                <input 
                                    class="" placeholder="Prénom de la personne"
                                    required />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="">Photo</span>
                                </div>
                                <div class="">
                                    <input type="file" class="" ref="file" id="file"
                                    >
                                    <label class="" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Date naissance</span>
                                </div>
                                <input 
                                    type=""
                                    class="" 
                                    required />                    
                            </div>
                            <br/>
                            <div class="">
                                <div class="">
                                    <span class="" >Pays</span>
                                </div>
                                <select class="" >
                                    <option selected disabled>Sélectionner un Pays</option>
                                </select>
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="">   
                    <button type="submit" class="">
                        Créer
                    </button>
                    <button class="" >
                        <router-link to="/artistes" ><Supprimer /></router-link>
                    </button>
                </div>

            </div>
        </form>        
    </div>
    <footer1 />
</template>

<script>
import header1 from '../../components/Header.vue'
import footer1 from '../../components/Footer.vue'
import Supprimer from '../../components/icones/Supprimer.vue';

export default {
    name: "CreateView",
    data() {
        return {};
    },
    components: { header1, footer1, Supprimer }
}
</script>


