<template>
  <div class="container col-sm-6">
    <h1>Modification de la categorie</h1>
    <div v-if="confirm">
      Catégorie modifié avec succès !
    </div>
    <div>
      <label class="form-label" for="libelle">Libellé</label>
      <input class="form-control" type="text" name="libelle" v-model="libelle"  id="libelle"/>
    </div>

    <div>
      <label class="form-label" for="couleur">Couleur</label>
      <input class="form-control" type="text" name="couleur" v-model="couleur"  id="couleur"/>
    </div>
    <div style="display: flex; justify-content: space-around; margin-top: 40px;">
      <button class="btn btn-primary" @click="editCategorie">Modifier</button>
      <button class="btn btn-danger" @click="deleteCategorie">Supprimer</button>
      <a class="btn btn-dark" href="/categories">Retour</a>
    </div>
  </div>
</template>

<script>

import {putCategorie, getCategorie, deleteCategorie} from '../api/categorie'

export default {
  name: 'CategorieEdit',
  data () {
    return {
      id: '',
      couleur: '',
      libelle: '',
      confirm: false
    }
  },
  async mounted() {
    this.id = this.$route.params.id
    await getCategorie(this.id).then(response => {
      this.libelle = response.data.libelle
      this.couleur = response.data.couleur
    })
  },
  methods: {
    async editCategorie() {
      await putCategorie(this.id,{
        couleur: this.couleur,
        libelle: this.libelle
      }).then(() => {
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    },
    async deleteCategorie() {
      await deleteCategorie(this.id).then((reponse) => {
        console.log(reponse)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/categories') //redirection
      })
    }
  }
}

</script>
