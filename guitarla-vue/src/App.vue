<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
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
const guitarra = ref([])


watch(carrito, () => {
    guardarLocalStorage()
}, {
    //Con el deep conseguimos que entre en todos los atributos del carrito y cuando uno cambie hará lo que yo quiera
    deep: true
})

onMounted(() => {
    guitarraRef.value = db
    guitarraReactive.guitarras = db
    guitarra.value = db[5]
    const carritoStorage = localStorage.getItem('carrito')
    if (carritoStorage) {
        carrito.value = JSON.parse(carritoStorage)
    }
})

const guardarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito.value))
}

const agregarCarrito = (guitarra) => {
    const existeCarrito = carrito.value.findIndex(producto => producto.id === guitarra.id)
    if (existeCarrito >= 0) {
        carrito.value[existeCarrito].cantidad++

    } else {
        guitarra.cantidad = 1
        carrito.value.push(guitarra)
    }

}

const decrementarCantidad = (id) => {
    const index = carrito.value.findIndex(producto => producto.id === id)
    if (carrito.value[index].cantidad <= 1) return
    carrito.value[index].cantidad--

}


const incrementarCantidad = (id) => {
    const index = carrito.value.findIndex(producto => producto.id === id)
    carrito.value[index].cantidad++
}

const eliminarProducto = (id) => {
    carrito.value = carrito.value.filter(producto => producto.id !== id)

}

const vaciarCarrito = () => {
    carrito.value = []

}


</script>

<template>
    <Header :carrito="carrito" :guitarra="guitarra" @incrementar-cantidad="incrementarCantidad"
        @decrementar-cantidad="decrementarCantidad" @agregar-carrito="agregarCarrito"
        @eliminar-producto="eliminarProducto" @vaciar-carrito="vaciarCarrito" />
    <main class="container-xl mt-5">
        <h2 class="text-center">Nuestra Colección</h2>

        <div class="row mt-5">

            <Guitarra v-for="guitarra in guitarraRef" v-bind:guitarra="guitarra" @agregar-carrito="agregarCarrito" />

        </div>
    </main>

    <Footer />



</template>
