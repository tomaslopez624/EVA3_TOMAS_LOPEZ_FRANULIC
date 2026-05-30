<script setup>
import ServiceCard from '../components/ServiceCard.vue'
</script>

<template>
  <main class="contenedor">
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
  </main>
</template>

<style scoped>
.contenedor {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
h1 {
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