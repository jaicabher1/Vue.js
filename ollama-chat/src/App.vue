<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ChatBox from './components/ChatBox.vue'
</script>

<template>
  <div id="app">
    <ChatBox />
  </div>
</template>

<style>
#app {
  min-height: 100vh; /* Asegura que el div ocupe toda la altura de la ventana */
  background-image: url(/backgroundCHatBox.jpg); /* Ruta a tu imagen en la carpeta public */
  background-size: cover; /* Ajusta la imagen para que cubra el fondo */
  background-position: center; /* Centra la imagen en el fondo */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  margin: 0; /* Elimina el margen predeterminado del body */
  padding: 0; /* Elimina el relleno predeterminado del body */
  display: flex; /* Permite a los elementos secundarios (como ChatBox) ocupar espacio flexiblemente */
  align-items: center; /* Centra los elementos secundarios verticalmente */
  justify-content: center; /* Centra los elementos secundarios horizontalmente */
}
</style>

