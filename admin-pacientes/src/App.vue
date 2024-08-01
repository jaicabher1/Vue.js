<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { uid } from "uid";
import Header from "./components/Header.vue";
import Formulario from "./components/Formulario.vue";
import Paciente from "./components/Paciente.vue";

//Arreglo de pacientes
const pacientes = ref([]);

//Objeto paciente
const paciente = reactive({
  id: null,
  nombre: "",
  propietario: "",
  email: "",
  alta: "",
  sintomas: "",
});

const guardarPacientes = () => {
  if (paciente.id) {
    const index = pacientes.value.findIndex((pacienteState) => pacienteState.id === paciente.id);
    pacientes.value[index] = { ...paciente };

  } else {
    // con los {...paciente} se crea una copia del objeto paciente y se quita la reactividad
    pacientes.value.push({ ...paciente, id: uid() });

  }

  //Reinicio del objeto paciente
  /*paciente.nombre = "";
  paciente.propietario = "";
  paciente.email = "";
  paciente.alta = "";
  paciente.sintomas = "";*/

  //Otra manera
  Object.assign(paciente, {
    nombre: "",
    propietario: "",
    email: "",
    alta: "",
    sintomas: "",
    id: null,
  });
}

const editarPaciente = (id) => {
  // Ponemos [0] porque filter devuelve un array y queremos el Objeto
  const pacienteEditar = pacientes.value.filter(paciente => paciente.id === id)[0];
  Object.assign(paciente, pacienteEditar);
}

const eliminarPaciente = (id) => {
  //Eliminar paciente del arreglo
  pacientes.value = pacientes.value.filter(paciente => paciente.id !== id);
}

//Pacientes Persistentes
watch(pacientes, () => {
    guardarLocalStorage()
}, {
    //Con el deep se observa los cambios en los objetos internos
    deep: true
})

const guardarLocalStorage = () => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes.value))
}

onMounted(() => {
    const pacientesStorage = localStorage.getItem('pacientes')
    if (pacientesStorage) {
      pacientes.value = JSON.parse(pacientesStorage)
    }
})



</script>

<template>
  <div class="container mx-auto mt-20">
    <Header />
    <br />
    <div class="mt:12 md:flex">
      <Formulario v-model:nombre="paciente.nombre" v-model:propietario="paciente.propietario"
        v-model:email="paciente.email" v-model:alta="paciente.alta" v-model:sintomas="paciente.sintomas"
        @guardar-paciente="guardarPacientes" :id="paciente.id" />

      <div class="md:w-1/2 md:h-screen overflow-y-scroll">
        <h3 class="font-black text-3xl text-center">
          Administra tus Pacientes
        </h3>

        <div v-if="pacientes.length > 0">
          <p class="text-lg mt-5 text-center mb-10">
            Información de tus
            <span class="text-indigo-600 font-bold">Pacientes</span>
          </p>
          <Paciente v-for="paciente in pacientes" :paciente="paciente" @editar-paciente="editarPaciente" @eliminar-paciente="eliminarPaciente" />

        </div>
        <p v-else class="mt-10 text-2xl text-center">No hay pacientes aún</p>
      </div>
    </div>
  </div>
</template>
