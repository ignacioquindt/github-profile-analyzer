# 🔍 Analizador de Perfiles GitHub

Un analizador de perfiles profesional construido con **React**, **TypeScript** y **Vite**. Esta aplicación permite a los usuarios buscar cualquier usuario de GitHub y obtener información detallada sobre su perfil y repositorios en una interfaz elegante y moderna.

## ✨ Características

*   🔍 **Búsqueda Instantánea:** Obtén perfiles y repositorios en tiempo real.
*   📊 **Modelado Inteligente:** Utiliza Programación Orientada a Objetos (POO) para mapear las respuestas de la API en modelos de datos inteligentes.
*   🛡️ **Seguridad de Tipos:** Construido con TypeScript para asegurar un código robusto y detectar errores a tiempo.
*   🎨 **Interfaz Premium:** Diseño moderno tipo **Glassmorphism** con layouts responsivos.
*   🚀 **Rendimiento:** Compilaciones optimizadas gracias a Vite.

## 🏗️ Arquitectura y Buenas Prácticas

Este proyecto fue construido siguiendo los estándares de la industria en ingeniería de software:

*   **Capa de Servicio:** Todas las interacciones con la API están encapsuladas en la clase `GitHubService`, haciendo que la app sea independiente de la fuente de datos.
*   **Modelos de Datos:** Los datos crudos de la API se transforman en instancias de `UserProfile` y `Repository`, asegurando datos limpios y predecibles en toda la interfaz.
*   **Basado en Componentes:** Componentes de React modulares para alta reutilización y mantenibilidad.
*   **Encapsulamiento:** La lógica y los estilos están separados para mantener una base de código limpia.

## 🛠️ Stack Tecnológico

*   **Frontend:** React 18, TypeScript, Vite
*   **Estilos:** CSS Moderno (Propiedades personalizadas, efectos de desenfoque)
*   **API:** GitHub REST API

## 🏁 Cómo ejecutar localmente

1.  **Clonar el proyecto:**
    ```bash
    cd git-profile-analyzer
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    Ve a `http://localhost:5173`

---

> Este proyecto sirve como demostración de habilidades técnicas en **Desarrollo Fullstack**, **POO con TypeScript** y **Diseño UI/UX Moderno**.
