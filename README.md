#Landing Page - Centro de Negocios Santiago (SERCOTEC)

Proyecto frontend desarrollado para responder a la necesidad de actualización del sitio web del Centro de Negocios Santiago de SERCOTEC. Esta aplicación ofrece una interfaz moderna, interactiva y centrada en el usuario para visualizar servicios de acompañamiento empresarial y gestión de negocios.

## Instalación y Despliegue

Sigue estos pasos para levantar el entorno de desarrollo local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tomaslopez624/EVA3_TOMAS_LOPEZ_FRANULIC

cd eva3frontend-sercotec
npm install
npm run dev

El proyecto sigue una arquitectura modular basada en Vue 3:

    /src/components/: Contiene los componentes reutilizables (Tarjetas, Carrusel, etc.).

    /src/views/: Vistas principales de la aplicación (Inicio, Nosotros, Servicios, Contacto).

    /src/router/: Configuración de las rutas (Vue Router).

    /src/assets/: Recursos estáticos (Imágenes comprimidas, CSS global, Logo).

* **Componentes (`src/components/`):**
  * `ServiceCard.vue`: Tarjeta reutilizable que expone los servicios y enlaza dinámicamente al formulario.
  * `TestimonialCarousel.vue`: Carrusel interactivo y accesible que muestra testimonios de clientes.
* **Vistas (`src/views/`):**
  * `HomeView.vue`: Página de inicio que integra los servicios y el carrusel.
  * `ContactoView.vue`: Formulario de contacto inteligente que lee los parámetros de la URL.
  * `FaqView.vue`: Vista que consume y renderiza datos de forma asíncrona.
* **Gestión de Rutas (`src/router/`):** Configuración de Vue Router para navegación sin recargas.
* **Consumo de API (`public/api/`):** Simulación de base de datos mediante un archivo `preguntas.json` consumido a través de peticiones HTTP `fetch`.

## Buenas Prácticas de Desarrollo Aplicadas
* **Componentización:** Separación de la interfaz en piezas independientes, reutilizables y fáciles de mantener.
* **Accesibilidad (a11y):** Implementación de atributos `aria` y roles semánticos en componentes interactivos (como el carrusel) para garantizar la compatibilidad con lectores de pantalla.
* **Diseño Responsivo:** Uso de CSS y Media Queries para adaptar la interfaz a dispositivos móviles y pantallas de escritorio.
* **Reactividad y Estado:** Utilización de la Composition API de Vue (`ref`, `onMounted`) para gestionar los datos en tiempo real y el ciclo de vida de las vistas.

## Instrucciones de Ejecución Local

1. Instalar las dependencias del proyecto:
```bash
   npm install.

