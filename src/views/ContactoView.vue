<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Variables reactivas para guardar los datos del formulario
const formulario = ref({
  nombre: '',
  email: '',
  servicio: '',
  mensaje: '',
  trampaBot: '' // <- Nuestro campo Honeypot
})

// Cuando la vista carga, revisamos si viene un servicio por la URL
onMounted(() => {
  if (route.query.servicio) {
    formulario.value.servicio = route.query.servicio
  }
})

// Función para simular el envío y aplicar validación básica y antibot (Punto 10)
const enviarMensaje = () => {
  // 1. VALIDACIÓN CONTRA ROBOTS (Honeypot)
  // Si el campo tiene texto, es un bot. Detenemos la ejecución silenciosamente.
  if (formulario.value.trampaBot !== '') {
    console.warn('Bloqueado: Intento de bot detectado.')
    return 
  }

  // 2. VALIDACIÓN DEL LADO DEL CLIENTE (Campos vacíos)
  if (!formulario.value.nombre || !formulario.value.email || !formulario.value.servicio) {
    alert('Por favor, completa todos los campos obligatorios.')
    return
  }
  
  // Simulación de éxito
  alert(`¡Gracias ${formulario.value.nombre}! Hemos recibido tu solicitud para el servicio de: ${formulario.value.servicio}.`)
  
  // Limpiar el formulario
  formulario.value = { nombre: '', email: '', servicio: '', mensaje: '', trampaBot: '' }
}
</script>

<template>
  <main class="contenedor-contacto">
    <div class="formulario-card">
      <h1>Contáctanos</h1>
      <p>Déjanos tus datos y un asesor del Centro de Negocios se comunicará contigo.</p>
      
      <form @submit.prevent="enviarMensaje" class="form-grid">
        
        <div class="campo">
          <label for="nombre">Nombre Completo *</label>
          <input type="text" id="nombre" v-model="formulario.nombre" required placeholder="Ej: Juan Pérez" />
        </div>

        <div class="campo">
          <label for="email">Correo Electrónico *</label>
          <input type="email" id="email" v-model="formulario.email" required placeholder="correo@empresa.com" />
        </div>

        <div class="campo ancho-completo">
          <label for="servicio">Servicio de Interés *</label>
          <select id="servicio" v-model="formulario.servicio" required>
            <option value="" disabled>Selecciona un servicio...</option>
            <option value="Asesoría Financiera">Asesoría Financiera</option>
            <option value="Marketing Digital">Marketing Digital</option>
            <option value="Formalización de Empresas">Formalización de Empresas</option>
            <option value="Innovación">Innovación</option>
          </select>
        </div>

        <div class="campo ancho-completo">
          <label for="mensaje">Mensaje (Opcional)</label>
          <textarea id="mensaje" v-model="formulario.mensaje" rows="4" placeholder="Cuéntanos más sobre tu negocio..."></textarea>
        </div>

        <!-- HONEYPOT: Campo oculto para atrapar bots -->
        <div class="campo-oculto" aria-hidden="true">
          <label for="telefono-secundario">Teléfono secundario (no llenar)</label>
          <input type="text" id="telefono-secundario" v-model="formulario.trampaBot" tabindex="-1" autocomplete="off" />
        </div>

        <button type="submit" class="btn-enviar ancho-completo">Enviar Solicitud</button>
      </form>
    </div>
  </main>
</template>

<style scoped>
.contenedor-contacto {
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background-color: #f8fafc;
}

.formulario-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 600px;
}

h1 {
  color: #002b60;
  text-align: center;
  margin-top: 0;
}

p {
  text-align: center;
  color: #64748b;
  margin-bottom: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.campo {
  display: flex;
  flex-direction: column;
}

.ancho-completo {
  grid-column: 1 / -1;
}

label {
  font-weight: bold;
  color: #334155;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

input, select, textarea {
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #0056b3;
  box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.1);
}

.btn-enviar {
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.btn-enviar:hover {
  background-color: #004494;
}

/* Ocultamos el honeypot visualmente y para lectores de pantalla */
.campo-oculto {
  position: absolute;
  left: -9999px;
  opacity: 0;
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>