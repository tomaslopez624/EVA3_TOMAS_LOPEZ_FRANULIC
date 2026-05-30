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

1. ServiceCard (Tarjeta de Servicio)

Componente reutilizable que muestra la información de un servicio y redirige al formulario de contacto pre-llenando el campo correspondiente.

    Props: titulo (String), descripcion (String), imagen (String).

    Ejemplo de uso:
 
<ServiceCard 
  titulo="Asesoría Financiera" 
  descripcion="Optimización de recursos y flujo de caja." 
  imagen="/img/finanzas.jpg" 
/>

2. TestimonialCarousel (Carrusel de Testimonios)

(En desarrollo: Componente responsivo para mostrar opiniones de clientes).
📖 Guía de Buenas Prácticas

(Sección en desarrollo: Aquí documentaremos nuestras convenciones de nomenclatura, uso de variables CSS y estrategias de accesibilidad/usabilidad implementadas en el proyecto).

