<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="logo">Centro de Negocios Santiago</div>
      <div class="enlaces">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
/* Estilos globales básicos */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f8fafc;
}

header {
  background-color: #002b60; /* Color corporativo azul oscuro */
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.enlaces a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
}

.enlaces a:hover {
  text-decoration: underline;
}
</style>
