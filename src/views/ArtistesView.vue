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
    <div class="bg-indigo-25 dark:bg-black">
        <p class="m-auto w-[311px] h-[81px] text-2xl text-center text-black dark:text-white">
  Retrouvez tous nos artistes en cliquant sur leur fiche
</p>
    <div class="container">
        <div class="card-header">
            <h5>Liste des pays</h5>
        </div>    
        <hr/>

        <form>
          <h6>Nouveau pays</h6>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Nom</span>
            </div>
            <input type="text" class="form-control" required />
            <button class="btn btn-light" type="submit" title="Création">
              <i class="fa fa-save fa-lg"></i>
            </button>
          </div>
        </form>

        <div class="card-body table-responsive">
            <table class="table text-light">
                <thead>
                    <tr>                      
                        <th scope="col">
                          <div class="float-left">Liste des Pays actuels</div>                          
                          <span class="float-right">
                            <div class="input-group" >
                                <div class="input-group-prepend">
                                  <span class="input-group-text" >Filtrage</span>
                                </div>
                                <input type="text" class="form-control" />
                                <button class="btn btn-light" type="submit" title="Création">
                                  <i class="fa fa-search fa-lg"></i>
                                </button>
                              </div>
                          </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                          <form>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">Nom</span>
                              </div>
                              <input type="text" class="form-control" required />
                              <button class="btn btn-light" type="submit" title="Création">
                                <i class="fa fa-save fa-lg"></i>
                              </button>
                              <button class="btn btn-light" type="submit" title="Suppression">
                                <i class="fa fa-trash fa-lg"></i>
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