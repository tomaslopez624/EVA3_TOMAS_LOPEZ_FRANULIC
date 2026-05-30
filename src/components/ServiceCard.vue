<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  titulo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  }
})

const router = useRouter()

const irAContacto = () => {
  // Cuando tengamos la vista de contacto, esto enviará el dato por la URL
  router.push({ 
    path: '/contacto', 
    query: { servicio: props.titulo } 
  })
}
</script>

<template>
  <div class="card-servicio">
    <img :src="imagen" :alt="titulo" class="card-imagen" />
    <div class="card-contenido">
      <h3>{{ titulo }}</h3>
      <p>{{ descripcion }}</p>
      <button @click="irAContacto" class="btn-contacto">Contáctanos</button>
    </div>
  </div>
</template>

<style scoped>
.card-servicio {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
  background-color: white;
  max-width: 350px; /* Para que no ocupe toda la pantalla */
}
.card-servicio:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}
.card-imagen {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-contenido {
  padding: 1.5rem;
}
h3 {
  margin-top: 0;
  color: #2c3e50;
}
p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.5;
}
.btn-contacto {
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  width: 100%;
  font-weight: bold;
}
.btn-contacto:hover {
  background-color: #004494;
}
</style>