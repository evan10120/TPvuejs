<template>
  <div class="about">
    <h1>Connexion</h1>
    <input-text name="username" label="Login" required v-model="username"></input-text>
    <input-text name="password" label="password" required v-model="password"></input-text>
    <button @click="loginCheck">Connexion</button>

  </div>
</template>
<script>
import InputText from '../components/InputText'
import axios from 'axios'
export default {
  components: {InputText},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async loginCheck() {
      await axios.post('http://localhost:8888/lpdev2021/public/index.php/api/login_check', {
        username : this.username,
        password: this.password
      }).then( response => {
        console.log(response.data)
        localStorage.token = response.data.token
      })
    }
  }
}
</script>