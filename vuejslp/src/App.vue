<template>
  <div id="app">
    <div id="nav" class="navbar navbar-expand-lg navbar-light bg-light ">
      <router-link to="/" class="navbar-brand">Home</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="nav justify-content-center">
          <li class="nav-item">
      <router-link to="/categories" class="nav-link">Catégories</router-link>
          </li>
      <li class="nav-item">
      <router-link to="/messages" class="nav-link">Messages</router-link>
      </li>
          <li class="nav-item">
      <router-link to="/recherche" class="nav-link">Recherche</router-link>
          </li>

          <li class="nav-item">
      <router-link to="/a-propos" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>

    <!--    <Bonjour />-->
    <!--    <Bonjour />-->
    <!--    <Bonjour />-->
    <!--    <Bonjour />-->
    <!--    <Bonjour />-->


    <!--    <ul>-->
    <!--      <li v-for="(note, matiere) in notes" :key="matiere">-->
    <!--        <Note :matiere="matiere" :note="note" />-->
    <!--      </li>-->
    <!--      <li>Moyenne des notes : {{ moyenneCalculee }}</li>-->
    <!--      <li>-->
    <!--        <Note matiere="Moyenne" :note="moyenneCalculee" />-->
    <!--      </li>-->
    <!--      <li v-if="moyenneCalculee > 10">Vous êtes admis</li>-->
    <!--      <li v-else>Play again !</li>-->
    <!--    </ul>-->

    <!--    <input-text name="test" id="test" :required="true" class="form" label="Champ 1" />-->
    <!--    <input-select-->
    <!--        name="test"-->
    <!--        id="test"-->
    <!--        :required="false"-->
    <!--        class="form"-->
    <!--        label="Champ Select"-->
    <!--        :donnees="donnees"-->

    <!--    />-->

    <!--    <input type="text" v-model.number="notes.Symfony">-->

  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
    }
  },
  computed: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}


</style>