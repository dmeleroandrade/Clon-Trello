<template>
  <div id="app">
    <!-- componente de la cabecera -->
    <app-header></app-header>
    <router-view class="container"></router-view>
    <app-footer></app-footer>
</div>
</template>

<script>
// importamos los componentes de la carpeta components
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  // incluímos los componentes dentro del objeto components que vamos a utilizar en la app
  components: {AppHeader, AppFooter}
}
</script>

<style scoped>
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0 auto;
  padding: 0;
}

.container {
  padding-bottom: 4rem;
}
</style>
