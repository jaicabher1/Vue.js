<script setup>
import { ref, reactive, onMounted } from 'vue'
import { db } from './data/guitarras'
import Guitarra from './components/Guitarra.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

//Si son datos agrupados mejor usar REACTIVE
const guitarraReactive = reactive({
    guitarras: []
})



//Para trabajar con ref siempre usaremos .value
// const guitarraRef = ref(db)
const guitarraRef = ref([])
const carrito = ref([])

onMounted(() => {
    guitarraRef.value = db
    guitarraReactive.guitarras = db
})

const agregarCarrito = (guitarra) => {
    guitarra.cantidad = 1
    carrito.value.push(guitarra)

}

console.log(guitarraRef.value)
console.log(guitarraReactive.guitarras)

</script>

<template>
    <Header />
    <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="row mt-5">

            <Guitarra 
            v-for="guitarra in guitarraRef" 
            v-bind:guitarra="guitarra" 
            @agregar-carrito="agregarCarrito" />

        </div>
    </main>

    <Footer />



</template>
