<script setup>
import { ref } from 'vue'
import ServiceCard from '../components/ServiceCard.vue'
import TestimonialCarousel from '../components/TestimonialCarousel.vue'

// Datos de prueba para el carrusel
const listaTestimonios = ref([
  {
    texto: "Gracias al Centro de Negocios logramos ordenar nuestras finanzas y postular con éxito a fondos de SERCOTEC. El acompañamiento fue fundamental.",
    autor: "María González",
    empresa: "Panadería La Masa"
  },
  {
    texto: "La asesoría en marketing digital triplicó nuestras ventas online en solo tres meses. Excelente disposición del equipo de asesores.",
    autor: "Carlos Ruiz",
    empresa: "EcoMuebles"
  },
  {
    texto: "El diagnóstico inicial nos ayudó a identificar procesos que nos hacían perder dinero. Ahora somos un 40% más eficientes.",
    autor: "Ana y Pedro",
    empresa: "Logística Express SpA"
  }
])
</script>

<template>
  <main class="contenedor">
    <section class="seccion">
      <h1>Servicios del Centro de Negocios</h1>
      <div class="grilla-servicios">
        <ServiceCard 
          titulo="Asesoría Financiera" 
          descripcion="Te ayudamos a optimizar los recursos y el flujo de caja de tu empresa para asegurar su sostenibilidad." 
          imagen="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80" 
        />
        <ServiceCard 
          titulo="Marketing Digital" 
          descripcion="Estrategias de posicionamiento web y manejo de redes sociales para aumentar tus ventas." 
          imagen="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80" 
        />
      </div>
    </section>

    <section class="seccion">
      <h2>Casos de Éxito</h2>
      <TestimonialCarousel :testimonios="listaTestimonios" />
    </section>
  </main>
</template>

<style scoped>
.contenedor {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.seccion {
  margin-bottom: 4rem;
}
h1, h2 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}
.grilla-servicios {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>