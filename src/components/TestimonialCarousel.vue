<script setup>
import { ref } from 'vue'

// Recibimos un arreglo de testimonios como propiedad
const props = defineProps({
  testimonios: {
    type: Array,
    required: true
  }
})

// Variable reactiva para saber qué testimonio estamos viendo
const currentIndex = ref(0)

// Funciones para avanzar y retroceder
const siguiente = () => {
  currentIndex.value = (currentIndex.value + 1) % props.testimonios.length
}

const anterior = () => {
  currentIndex.value = (currentIndex.value - 1 + props.testimonios.length) % props.testimonios.length
}
</script>

<template>
  <section class="carrusel-contenedor" aria-label="Carrusel de testimonios">
    <div class="carrusel-track" aria-live="polite">
      
      <div 
        v-for="(testimonio, index) in testimonios" 
        :key="index"
        v-show="index === currentIndex"
        class="testimonio-slide"
      >
        <div class="comillas">❝</div>
        <blockquote class="texto">{{ testimonio.texto }}</blockquote>
        <div class="info-autor">
          <p class="autor">{{ testimonio.autor }}</p>
          <p class="empresa">{{ testimonio.empresa }}</p>
        </div>
      </div>

    </div>
    
    <div class="controles">
      <button @click="anterior" aria-label="Testimonio anterior" class="btn-control">❮</button>
      
      <div class="indicadores">
        <span 
          v-for="(t, index) in testimonios" 
          :key="'ind-'+index" 
          class="punto" 
          :class="{ activo: index === currentIndex }"
        ></span>
      </div>
      
      <button @click="siguiente" aria-label="Siguiente testimonio" class="btn-control">❯</button>
    </div>
  </section>
</template>

<style scoped>
.carrusel-contenedor {
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  text-align: center;
}

.comillas {
  font-size: 4rem;
  color: #0056b3;
  line-height: 1;
  margin-bottom: -1rem;
  opacity: 0.2;
}

.texto {
  font-size: 1.2rem;
  font-style: italic;
  color: #4a5568;
  margin: 1.5rem 0;
  line-height: 1.6;
}

.autor {
  font-weight: bold;
  color: #2d3748;
  margin: 0;
  font-size: 1.1rem;
}

.empresa {
  color: #718096;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.controles {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.btn-control {
  background-color: #e2e8f0;
  color: #4a5568;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-control:hover, .btn-control:focus {
  background-color: #0056b3;
  color: white;
  outline: none;
}

.indicadores {
  display: flex;
  gap: 8px;
}

.punto {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #cbd5e0;
  transition: background-color 0.3s;
}

.punto.activo {
  background-color: #0056b3;
  transform: scale(1.2);
}

/* Adaptación para dispositivos móviles */
@media (max-width: 600px) {
  .carrusel-contenedor {
    padding: 1.5rem 1rem;
    margin: 2rem 1rem;
  }
  .texto {
    font-size: 1rem;
  }
  .btn-control {
    width: 45px; /* Botones más grandes para pantallas táctiles */
    height: 45px;
  }
}
</style>
