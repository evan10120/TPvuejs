<template>
  <div class="container col-sm-6">
    <h1>Modification d'un message</h1>
    <div v-if="confirm">
      Message modifié avec succès !
    </div>
    <div>
      <label class="form-label" for="titre">Titre</label>
      <input class="form-control" type="text" name="titre" v-model="titre"  id="titre"/>
    </div>

    <div>
      <label class="form-label" for="message">Message</label>
      <input class="form-control" type="text" name="message" v-model="message"  id="message"/>
    </div>

    <div>
      <label class="form-label" for="categorie">Categorie</label>
      <select class="form-select" name="categorie" v-model="selected" id="categorie">
        Categorie
        <option v-for="categorie in categories" :key="categorie.id" :value="categorie.id">
          {{categorie.libelle}}
        </option>
      </select>
    </div>

    <div style="display: flex; justify-content: space-around; margin-top: 40px;">
      <button class="btn btn-primary" @click="editMessage">Modifier</button>
      <button class="btn btn-danger" @click="deleteMessage">Supprimer</button>
      <a class="btn btn-dark" href="/messages">Retour</a>
    </div>
  </div>
</template>

<script>

import {putMessage, getMessage, deleteMessage} from '../api/message'
import {getCategories, getCategorie} from '../api/categorie'
export default {
  name: 'MessageEdit',
  data () {
    return {
      id: '',
      message: '',
      titre: '',
      categorie:{},
      categories:{},
      selected: '',
      confirm: false
    }
  },
  async mounted() {
    this.id = this.$route.params.id
    this.categories = await getCategories().then((response) => {
      return response.data['hydra:member']
    })
    await getMessage(this.id).then((response) => {
      this.titre = response.data.titre
      this.message = response.data.message
    })
  },
  methods: {
    async editMessage() {
      await this.getCategorieById().then((data) => {
        putMessage(this.id,{
          message: this.message,
          titre: this.titre,
          date: new Date(),
          categorie: data
        }).then((response) => {
          console.log(response)
          this.$router.push('/messages') //redirection
        })

      })
    },
    async deleteMessage() {
      await deleteMessage(this.id).then((response) => {
        console.log(response)
        //this.confirm = true //activation d'un bandeau de confirmation
        this.$router.push('/messages') //redirection
      })
    },
    async getCategorieById() {
      return await getCategorie(this.selected).then((response) => {
        return response.data['@id']
      })
    },
  }
}
</script>
