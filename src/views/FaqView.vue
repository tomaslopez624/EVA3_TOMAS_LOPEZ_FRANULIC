<script setup>
import { ref, onMounted } from 'vue'

// Variables reactivas para guardar los datos y el estado de carga
const listaPreguntas = ref([])
const cargando = ref(true)
const error = ref(null)

// onMounted se ejecuta apenas la página se abre
onMounted(async () => {
  try {
    // Consumimos nuestra API interna
    const respuesta = await fetch('/api/preguntas.json')
    if (!respuesta.ok) throw new Error('Error al conectar con la API')
    
    // Guardamos los datos en nuestra variable reactiva
    listaPreguntas.value = await respuesta.json()
  } catch (err) {
    error.value = 'Hubo un problema al cargar las preguntas. Intenta más tarde.'
    console.error(err)
  } finally {
    // Apagamos el indicador de carga sin importar si falló o funcionó
    cargando.value = false
  }
})
</script>

<template>
  <main class="contenedor-faq">
    <h1>Preguntas Frecuentes</h1>
    <p class="subtitulo">Resolvemos tus dudas sobre el Centro de Negocios Santiago.</p>

    <div v-if="cargando" class="estado-mensaje">
      <p>Cargando información desde la API...</p>
    </div>

    <div v-else-if="error" class="estado-mensaje error">
      <p>{{ error }}</p>
    </div>

    <div v-else class="lista-preguntas">
      <div v-for="item in listaPreguntas" :key="item.id" class="pregunta-card">
        <h3>{{ item.pregunta }}</h3>
        <p>{{ item.respuesta }}</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contenedor-faq {
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}
h1 {
  color: #002b60;
  text-align: center;
  margin-bottom: 0.5rem;
}
.subtitulo {
  text-align: center;
  color: #64748b;
  margin-bottom: 3rem;
}
.estado-mensaje {
  text-align: center;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 8px;
  color: #334155;
  font-weight: bold;
}
.error {
  color: #dc2626;
  background-color: #fef2f2;
}
.lista-preguntas {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.pregunta-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #0056b3;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.pregunta-card h3 {
  margin-top: 0;
  color: #1e293b;
  font-size: 1.1rem;
}
.pregunta-card p {
  margin-bottom: 0;
  color: #475569;
  line-height: 1.5;
}
</style>