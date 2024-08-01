<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import { uid } from 'uid';
import Header from './components/Header.vue';
import Formulario from './components/Formulario.vue';
import Paciente from './components/Paciente.vue';

// Arreglo de pacientes
const pacientes = ref([]);

// Objeto paciente prueba
const pacientePrueba = {
  id: 1,
  nombre: 'PACIENTE DE PRUEBA',
  propietario: 'Juan',
  email: 'prueba@gmail.com',
  alta: '2021-09-01',
  sintomas: '¡¡¡BORRAR ESTE PACIENTE!!!',
};

// Objeto paciente
const paciente = reactive({
  id: null,
  nombre: '',
  propietario: '',
  email: '',
  alta: '',
  sintomas: '',
});

// Función para guardar un paciente
const guardarPacientes = () => {
  if (paciente.id) {
    const index = pacientes.value.findIndex(p => p.id === paciente.id);
    if (index !== -1) {
      pacientes.value[index] = { ...paciente };
    }
  } else {
    pacientes.value.push({ ...paciente, id: uid() });
  }

  // Reinicio del objeto paciente
  Object.assign(paciente, {
    id: null,
    nombre: '',
    propietario: '',
    email: '',
    alta: '',
    sintomas: '',
  });
};

// Función para editar un paciente
const editarPaciente = (id) => {
  const pacienteEditar = pacientes.value.find(p => p.id === id);
  if (pacienteEditar) {
    Object.assign(paciente, pacienteEditar);
  }
};

// Función para eliminar un paciente
const eliminarPaciente = (id) => {
  pacientes.value = pacientes.value.filter(p => p.id !== id);
};

// Persistencia en el LocalStorage
const guardarLocalStorage = () => {
  localStorage.setItem('pacientes', JSON.stringify(pacientes.value));
};

// Inicialización del componente
onMounted(() => {
  const pacientesStorage = localStorage.getItem('pacientes');
  if (pacientesStorage) {
    pacientes.value = JSON.parse(pacientesStorage);
  }
  if (pacientes.value.length === 0) {
    pacientes.value.push(pacientePrueba);
  }
});

// Observador para guardar en localStorage
watch(pacientes, guardarLocalStorage, {
  deep: true,
});
</script>

<template>
  <div class="container mx-auto mt-20">
    <Header />
    <br />
    <div class="mt-12 md:flex">
      <Formulario
        v-model:nombre="paciente.nombre"
        v-model:propietario="paciente.propietario"
        v-model:email="paciente.email"
        v-model:alta="paciente.alta"
        v-model:sintomas="paciente.sintomas"
        @guardar-paciente="guardarPacientes"
        :id="paciente.id"
      />
      <div class="md:w-1/2 md:h-screen overflow-y-scroll">
        <h3 class="font-black text-3xl text-center">Administra tus Pacientes</h3>
        <div v-if="pacientes.length > 0">
          <p class="text-lg mt-5 text-center mb-10">
            Información de tus
            <span class="text-indigo-600 font-bold">Pacientes</span>
          </p>
          <Paciente
            v-for="paciente in pacientes"
            :key="paciente.id"
            :paciente="paciente"
            @editar-paciente="editarPaciente"
            @eliminar-paciente="eliminarPaciente"
          />
        </div>
        <p v-else class="mt-10 text-2xl text-center">No hay pacientes aún</p>
      </div>
    </div>
  </div>
</template>
